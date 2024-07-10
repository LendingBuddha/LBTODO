import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { UserRouter } from "./routes/auth.js";
import cors from "cors";
import noteModel from './model/notes.js';
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
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/test");


app.get('/get', (req,res) => {
  noteModel.find()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.post('/add', (req,res) => {
  const task = req.body.task;
  noteModel.create({
    task: task
  }).then(result => res.json(result))
    .catch(err => res.json(err))

})
app.listen(3000, () => {
  "server is running";
});
