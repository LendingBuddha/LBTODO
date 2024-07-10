import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    task: String
})

const noteModel = mongoose.model("todos", noteSchema);

export default noteModel;