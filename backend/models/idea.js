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


const IdeaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    documents: [{
        url: {
            type: String
        }
    }],
    anonymous: {
        type: Boolean,
        default: false
    },
    thumbsUp: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        }
    ],
    thumbsDown: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        }
    ],
    categories: [
        {
            category: {
                type: String
            }
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comments'
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    }
}, {
    timestamps: true
});

IdeaSchema.methods.getOwnerOfIdea = async function (ideaId) {
    const idea = await Idea.findById(ideaId);
    await idea.populate('owner');
    return idea.owner;
}

IdeaSchema.pre('save', async function (next) {
    const idea = this;
    next();
})


export const Idea = mongoose.model('ideas', IdeaSchema);