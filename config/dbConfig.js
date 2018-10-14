'use strict';

require('dotenv').config();

const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_COLLECTION
} = process.env;


module.exports = {
  url: 'mongodb+srv://DB_USER:DB_PASS@DB_HOST/B_COLLECTION?retryWrites=true',
};
