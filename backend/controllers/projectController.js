import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Project } from "../models/projectSchema.js";
import { v2 as cloudinary } from "cloudinary";

export const addNewProject = catchAsyncError(async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("Project Banner is requried", 400));
    }

    const { projectBanner } = req.files;
    const {
        title,
        description,
        gitRepoLink,
        projectLink,
        technologies,
        stack,
        deployed,
    } = req.body;

    if (
        !title ||
        !description ||
        !gitRepoLink ||
        !projectLink ||
        !technologies ||
        !stack ||
        !deployed
    ) {
        return next(new ErrorHandler("Please provide all details", 400));
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(
        projectBanner.tempFilePath,
        { folder: "PORTFOLIO_PROJECT_BANNER" }
    );

    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.error(
            "Cloudinary Error",
            cloudinaryResponse.error || "Unknown cloudinary error"
        );
        return next(
            new ErrorHandler("Failed to upload projectBanner to cloudinary")
        );
    }

    const project = await Project.create({
        title,
        description,
        gitRepoLink,
        projectLink,
        technologies,
        stack,
        deployed,
        projectBanner: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        },
    });
    res.status(201).json({
        success: true,
        message: "New project added",
        project,
    });
});

export const deleteProject = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
        return next(new ErrorHandler("Project not found", 404));
    }
    const projectBanner = project.projectBanner.public_id;
    await cloudinary.uploader.destroy(projectBanner);
    await project.deleteOne();
    res.status(200).json({
        success: true,
        message: "Project deleted",
    });
});

export const updateProject = catchAsyncError(async (req, res, next) => {
    const newProjectData = {
        title: req.body.title,
        description: req.body.description,
        gitRepoLink: req.body.gitRepoLink,
        projectLink: req.body.projectLink,
        technologies: req.body.technologies,
        stack: req.body.stack,
        deployed: req.body.deployed,
    };

    if (req.files && req.files.projectBanner) {
        const projectBanner = req.files.projectBanner;
        const project = await Project.findById(req.params.id);
        const projectBannerId = project.projectBanner.public_id;
        await cloudinary.uploader.destroy(projectBannerId);
        const cloudinaryResponse = await cloudinary.uploader.upload(
            projectBanner.tempFilePath,
            { folder: "PORTFOLIO_PROJECT_BANNER" }
        );
        newProjectData.projectBanner = {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        };
    }

    const project = await Project.findByIdAndUpdate(
        req.params.id,
        newProjectData,
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );

    res.status(200).json({
        success: true,
        message: "Project updated",
        project,
    });
});

export const getAllProject = catchAsyncError(async (req, res, next) => {
    const projects = await Project.find();
    res.status(200).json({
        success: true,
        projects,
    });
});

export const getSingleProject = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
        return next(new ErrorHandler("Project not found", 404));
    }
    res.status(200).json({
        success: true,
        project,
    });
});
