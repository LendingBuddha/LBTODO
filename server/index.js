import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { UserRouter } from "./routes/auth.js";
import cors from "cors";
dotenv.config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/auth", UserRouter);

mongoose.connect("mongodb://127.0.0.1:27017/authentication");

app.listen(3000, () => {
  "server is running";
});
