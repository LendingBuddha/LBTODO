import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const noteModel = mongoose.model("todos", noteSchema);

export default noteModel;