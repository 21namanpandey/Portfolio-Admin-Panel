import express from "express";
import { deleteMessage, sendAllMessage, sendMessage } from "../controllers/messageController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getAll", sendAllMessage);
router.delete("/delete/:id", isAuthenticated, deleteMessage);

export default router;