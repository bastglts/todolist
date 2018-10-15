'use strict';

/* -------- Dependencies -------- */
const express = require('express');
const mongoose = require('mongoose');


/* ----- Create express app ----- */
const app = express();


/* ------- Configuration -------- */

// Template engine & views directory
app.set('views', 'src/views');
app.set('view engine', 'pug');

// Urlencoded body-parser
app.use(express.urlencoded({ extended: false }));

// Configure & connect to the database
const dbConfig = require('../config/dbConfig.js');
mongoose.set('useFindAndModify', false);

mongoose.connect(dbConfig.url, { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to the database');
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });


/* ------ Fire up routing ------- */
app.use('/todo', require('./routes/todoRoutes.js'));


/* ---- Listen for requests ----- */
app.listen(8080, () => console.log('App listening on port 8080!'));
