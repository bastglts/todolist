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

// Configure the database
const dbConfig = require('../config/dbConfig.js');

mongoose.set('useFindAndModify', false);

// Connect to the database
mongoose.connect(dbConfig.url, { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to the database');
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });


/* ------ Fire up routing ------- */
const todoRoutes = require('./routes/todoRoutes.js');
todoRoutes(app);


/* ---- Listen for requests ----- */
app.listen(8080, () => console.log('App listening on port 8080!'));
