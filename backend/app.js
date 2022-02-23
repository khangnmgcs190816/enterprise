import {MongoClient, ObjectId} from 'mongodb';
import {User} from './models/user.js';
import express, {request, response} from 'express';
import chalk from "chalk";
import {Task} from "./models/task.js";
import mongoose from "mongoose";
import {router as userRouter} from "./routers/user-router.js";
import {router as taskRouter} from "./routers/task-router.js";
import {router as ideaRouter} from "./routers/idea-router.js";
import jwt from "jsonwebtoken";
import multer from "multer";
import multerS3 from "multer-s3";
import cors from "cors";
import path from 'path';
import aws from "aws-sdk";

const app = express();
const port = 8000;


app.use((request, response, next)=>{
    console.log(`REQUEST PATH: ${request.path}`);
    console.log(`REQUEST METHOD: ${request.method}`);
    next();
});

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.use(ideaRouter);






app.listen(port, () => {
    console.log(chalk.green(`Listening on port ${port}`));
})