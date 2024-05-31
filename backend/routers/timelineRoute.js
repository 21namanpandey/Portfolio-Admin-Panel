import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
    deleteTimeline,
    getAllTimeline,
    postTimeline,
} from "../controllers/timelineController.js";

const router = express.Router();

router.post("/add", isAuthenticated, postTimeline);
router.delete("/delete/:id", isAuthenticated, deleteTimeline);
router.get("/getAll", getAllTimeline);

export default router;
