import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnection from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./routers/messageRoute.js"
import userRouter from "./routers/userRouter.js"
import timelineRouter from "./routers/timelineRoute.js"
import softwareApplicationRouter from "./routers/softwareApplicationRoute.js"
import skillRouter from "./routers/skillRoute.js"

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
    cors({
        origin: [process.env.PORTFOLIO_URL, process.env.DASHBOARD_URL],
        methods: ["GET", "POST", "DELETE", "PUT"],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/"
    })
)

app.use("/api/v1/message", messageRouter)
app.use("/api/v1/user", userRouter)
app.use("/api/v1/timeline", timelineRouter)
app.use("/api/v1/softwareApplication", softwareApplicationRouter)
app.use("/api/v1/skill", skillRouter)

dbConnection()
app.use(errorMiddleware)

export default app;