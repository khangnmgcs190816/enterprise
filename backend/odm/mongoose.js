import mongoose from 'mongoose';
import validator, * as otherValidator from 'validator';
import chalk from 'chalk';
import {User} from "../models/user.js";
import {Task} from "../models/task.js";


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-app';

await mongoose.connect(`${connectionURL}/${databaseName}`, {useNewUrlParser: true});


function saveUser() {

    const userInstance = new User({name: 'Trong', age: 22, email: 'trong@gmail.com', password: 'passwOrd'});

    userInstance
        .save()
        .then(() => {
            console.log(chalk.green(`Document Added: ${userInstance}`));
        }).catch((err) => {
        console.log(chalk.red(err));
    });
}



const myTask = new Task({complete: false});

function saveTask() {
    myTask
        .save()
        .then(() => {
            console.log(chalk.green(`Document Added: ${myTask}`));
        }).catch((err) => {
        console.log(chalk.red(err));
    });
}


saveUser();
//saveTask();