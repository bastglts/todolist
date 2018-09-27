/* Require useful modules */
const app = require('express')();
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

/* Use pug as template engine */
app.set('view engine', 'pug');

/* Create application/x-www-form-urlencoded parser */
const urlencodedParser = bodyParser.urlencoded({ extended: false });


/* Use session middleware */
app.use(cookieSession({ secret: 'secretkey' }));


/* Create todolist array if dealing with new session
   (middleware executed every time the app receive a request) */
app.use((req, res, next) => {
  if (!req.session.todolist) {
    req.session.todolist = [];
  }
  next();
});


/* Render index.pug with todolist as local variable */
app.get('/todo', (req, res) => {
  res.render('index', { todolist: req.session.todolist });
});


/* Add a todo to list */
app.post('/todo/add', urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);

  res.send('response :' + req.body.todo);
});


app.listen(8080, () => console.log(`App listening on port 8080!`));
