module.exports = (mongoose) => {
  // Configure
  const dbUrl = 'mongodb+srv://bast:pwd123@cluster0-9wb08.gcp.mongodb.net/' +
  'Todo?retryWrites=true';

  mongoose.Promise = global.Promise;

  mongoose.set('useFindAndModify', false);


  // Connect to the database
  mongoose.connect(dbUrl, { useNewUrlParser: true })
    .then(() => {
      console.log('Successfully connected to the database');
    }).catch(err => {
      console.log('Could not connect to the database. Exiting now...', err);
      process.exit();
    });
};
