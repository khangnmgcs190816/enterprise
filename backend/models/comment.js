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


const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    anonymous: {
        type: Boolean,
        default: false
    },
    idea: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'comments'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    }
}, {
    timestamps: true
});


export const Comment = mongoose.model('comments', CommentSchema);