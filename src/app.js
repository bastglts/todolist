'use strict';

/* -------- Dependencies -------- */
const express = require('express');
const mongoose = require('mongoose');


/* ----- Create express app ----- */
const app = express();


/* ------- Configuration -------- */
// Configure express & app
const serverConfig = require('../config/serverConfig.js');
serverConfig(app, express);

// Configure & connect to the database
const dbConfig = require('../config/dbConfig.js');
dbConfig(mongoose);


/* ------ Fire up routing ------- */
const todoRoutes = require('./routes/todoRoutes.js');
todoRoutes(app);


/* ---- Listen for requests ----- */
app.listen(8080, () => console.log('App listening on port 8080!'));
