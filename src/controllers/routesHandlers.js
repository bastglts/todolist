'use strict';

/* ------- Require mongoose's Todo model ------- */
const Todo = require('../models/TodoModel.js');


/* -------------- Route handlers --------------- */
module.exports = {

  /* Render index.pug with todolist and indexOfTodoToModify */
  renderIndex: (req, res) => {
    // Retrieve all todos form the database
    Todo.find()
      .then(todos => {
        // Render view
        res.render('index', {
          todolist: todos,
          indexOfTodoToModify: req.params.todoId,
        });
      });
  },


  /* Add todo to the database */
  addTodo: (req, res) => {
    // Create a todo
    const todo = new Todo({
      item: req.body.todo,
    });

    // Save todo to database
    todo.save()
      .then(todo => {
        console.log('todo saved');

        // Redirect to home page
        res.redirect('/todo');
      });
  },


  /* Delete todo from the model with :todoId */
  deleteTodo: (req, res) => {
    Todo.findByIdAndDelete(req.params.todoId)
      .then(todo => {
        console.log('todo deleted');

        // Redirect to home page
        res.redirect('/todo');
      });
  },


  /* Modify todo with :todoId */
  modifyTodo: (req, res) => {
    Todo.findOneAndUpdate(
      { _id: req.params.todoId },
      { item: req.body.modifiedTodo }
    )
      .then(todo => {
        console.log('todo modified');

        // Redirect to home page
        res.redirect('/todo');
      });
  },

};
