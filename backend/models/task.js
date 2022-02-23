import mongoose from 'mongoose';
import validator, * as otherValidator from 'validator';
import chalk from 'chalk';
import bcrypt from "bcrypt";
import {User} from "./user.js";

const url = "mongodb+srv://trongkami:Trongvip123!@cluster0.zee12.mongodb.net/web_enterprise?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true
}
await mongoose.connect(url,connectionParams)


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    }
}, {
    timestamps: true
});

TaskSchema.methods.getOwnerOfTask = async function (taskId) {
    const task = await Task.findById(taskId);
    await task.populate('owner');
    return task.owner;
}


TaskSchema.pre('save', async function (next){
    const task = this;

    next();
})


export const Task = mongoose.model('tasks', TaskSchema);