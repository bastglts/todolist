// Require useful modules
const express = require('express');
const app = express();
const cookieSession = require('cookie-session');


// Set pug as template engine
app.set('view engine', 'pug');


// Create application/x-www-form-urlencoded parser
const urlencodedParser = express.urlencoded({ extended: false });


// Use session middleware
app.use(cookieSession({ secret: 'secretkey' }));


// Create a todolist array if dealing with new session
app.use((req, res, next) => {
  if (!req.session.todolist) {
    req.session.todolist = [];
  }
  next();
});


// Render index(.pug) view with todolist as local variable
app.get('/todo', (req, res) => {
  res.render('index', { todolist: req.session.todolist });
});


// Add a todo to the list
app.post('/todo/add', urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);

  req.session.todolist.push(req.body.todo);
  res.redirect('/todo');
});


// Delete a todo from the list
app.get('/todo/delete/:id', (req, res) => {
  req.session.todolist.splice(req.params.id, 1);
  res.redirect('/todo');
});


// Modify a todo
app.route('/todo/modify/:id')

  // Render index with the todo-to-be-modified index as 'todoToModify'
  .get((req, res) => {
    res.render('index', {
      todolist: req.session.todolist,
      todoToModify: req.params.id,
    });
  })

  // Modify the todo
  .post(urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);

    req.session.todolist[req.params.id] = req.body.modify_todo;
    res.redirect('/todo');
  });


// Redirect user to home page if requested url does not exist
app.use((req, res) => res.redirect('/todo'));


// Listen to port 8080
app.listen(8080, () => console.log(`App listening on port 8080!`));
