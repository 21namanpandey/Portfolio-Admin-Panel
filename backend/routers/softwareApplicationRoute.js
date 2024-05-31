import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
    addNewApplication,
    deleteApplication,
    getAllApplication,
} from "../controllers/SoftwareApplicationController.js";

const router = express.Router();

router.post("/add", isAuthenticated, addNewApplication);
router.delete("/delete/:id", isAuthenticated, deleteApplication);
router.get("/getAll", getAllApplication);

export default router;
