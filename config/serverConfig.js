module.exports = (app, express) => {
  // Template engine & views directory
  app.set('views', 'src/views');
  app.set('view engine', 'pug');

  // Urlencoded body-parser
  app.use(express.urlencoded({ extended: false }));
}