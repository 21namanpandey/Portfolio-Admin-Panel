import express from "express";
import { deleteMessage, sendAllMessage, sendMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getAll", sendAllMessage);
router.delete("/delete", deleteMessage);

export default router;