const  path = require('path');
const express = require('express');
const app = express();
const port = 8000;
const morgan = require('morgan');
const cors = require('cors');


app.use(cors());
//Middleware
app.use(
    express.urlencoded({
        extended: true,
    }))
app.use(express.json());

// Http Logger
app.use(morgan('combined'));

//Connect Database
const db = require('./config/db')
db.connect();

//Router init
const route = require('./routes');
route(app);

app.listen(port,() => {
        console.log(`App listening is http://localhost:${port}`);
})