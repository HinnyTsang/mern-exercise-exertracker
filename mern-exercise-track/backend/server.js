/**
 * Server!
 */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// get ATLAS_URI from .env
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});

const connection = mongoose.connection;
connection.once('open',
    () => {
        console.log(`MongoDB database connection established successfully`);
    }
);


// require file and use file
const exeercisesRouter = require('./routes/exercises');
const userssRouter = require('./routes/users');
// go to the url -> routers data
app.use('/exercises', exeercisesRouter);
app.use('/users', userssRouter);

app.listen(port,
    () => {
        console.log(`server is running in port: ${port}`);
    }
);