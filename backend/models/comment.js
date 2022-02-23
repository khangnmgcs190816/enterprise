import mongoose from 'mongoose';
import validator, * as otherValidator from 'validator';
import chalk from 'chalk';
import bcrypt from "bcrypt";
import {User} from "./user.js";

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-app';

await mongoose.connect(`${connectionURL}/${databaseName}`, {useNewUrlParser: true});


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