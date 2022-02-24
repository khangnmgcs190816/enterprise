import express, {response} from 'express';
import {Task} from "../models/task.js";
import chalk from "chalk";
import {ObjectId} from "mongodb";
import {User} from "../models/user.js";
import {authMiddleware} from "../middleware/auth-middleware.js";
import {Idea} from "../models/idea.js";
import multer from "multer";
import path from "path";
import aws from "aws-sdk";
import multerS3 from "multer-s3";

export const router = new express.Router();


/* ======================================================= CREATE ======================================================= */
router.post('/ideas', authMiddleware, async (request, response) => {
    const idea = new Idea({...request.body, owner: request.user._id});
    try {
        await idea.save();
        console.log(chalk.green(`CREATE ${idea} into MongoDB`));
        response.status(201).send(idea);
    } catch (error) {
        console.log(chalk.red(error));
    }

});


/* ======================================================= UPLOAD DOCUMENTS ======================================================= */
const documentStorage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, 'documents/')
    },
    filename: function (request, file, callback) {
        callback(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
})

const documentUpload = multer({
    storage: documentStorage,
    limits: {
        fileSize: 10000000,
    }
});


const imageUpload = multer({
    limits: {
        fileSize: 10000000,
    },
    fileFilter(request, file, callback){
        if(!(file.originalname.endsWith('.jpg') || file.originalname.endsWith('.jpeg') || file.originalname.endsWith('.img') || file.originalname.endsWith('.png') || file.originalname.endsWith('.svg'))){
            return callback(new Error("Format does not supported"));
        }

        callback(undefined, true);
    }
});




aws.config.update({
    secretAccessKey: 'OmN3JrFVQcET6iub0Ri1VFlwSxFSng8qzfOoHfFx',
    accessKeyId: 'AKIAYW6CQBLQ42VD3IVD',
    region: 'ap-southeast-1'
});

// const s3Storage = new aws.S3({
//     accessKeyId: 'AKIAYW6CQBLQ42VD3IVD',
//     secretAccessKey: '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',
//     region: 'ap-southeast-1'
// });

const s3 = new aws.S3();

const s3Upload = multer({

    storage: multerS3({
        s3: s3,
        bucket:"web-enterprises",
        metadata: function (request, file, callback) {
            callback(null, {fieldName: file.originalname.toString()});
        },
        key: function (request, file, callback) {
            callback(null, file.originalname);
        },
    }),
});




router.post('/upload', documentUpload.single("document"), (request, response)=>{


    console.log(request.file);

    response.status(200).send(request.file.path);
} );


router.post('/uploadS3', s3Upload.single("document"), async (request, response, error)=>{
    const _ideaId = request.query.ideaId;
    const fileName = request.query.fileName;

    const foundIdea = await Idea.findById(_ideaId);

    const url = s3.getSignedUrl('getObject', {
        Bucket:"web-enterprises",
        Key: fileName,
        Expires: 100000
    })


    foundIdea.documents.push({url: url.toString()})
    await foundIdea.save();
    console.log(`Upload document for Idea: ${foundIdea}`);

    response.status(200).send(foundIdea);
} );





router.post('/users/me/avatar', imageUpload.single("upload"), (request, response)=>{
    console.log(request.file);
    console.log(request.file.buffer);
    response.status(200).send(request.file);
},(error, request, response,next)=>{

    response.status(400).send({error: error.message});
});




/* ======================================================= READ ======================================================= */

/* ======================================================= DELETE ======================================================= */
