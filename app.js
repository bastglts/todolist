/* Require useful modules */
const app = require('express')();
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');


/* Use session middleware */
app.use(cookieSession({ secret: 'secretkey' }));


/* Use pug as template engine */
app.set('view engine', 'pug');


/* Create application/x-www-form-urlencoded parser */
const urlencodedParser = bodyParser.urlencoded({ extended: false });


/* Create todolist if dealing with new session,
   render index.pug with todolist as local variable in both cases */
app.get('/todo', (req, res) => {
  if (!req.session.todolist) {
    req.session.todolist = [];
  }

  res.render('index', { todolist: req.session.todolist });
});


app.listen(8080, () => console.log(`App listening on port 8080!`));
