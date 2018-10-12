'use strict';

/* Dependencies */
const express = require('express');
const app = express();


/* Configuration */
app.set('view engine', 'pug'); // template engine
app.set('views', './src/views'); // views directory

app.use(express.urlencoded({ extended: false })); // urlencoded body-parser


/* Fire up routing */
const todoRoutes = require('./src/routes/todoRoutes.js');
todoRoutes(app);


/* Listen to port 8080 */
app.listen(8080, () => console.log('App listening on port 8080!'));
