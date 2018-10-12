'use strict';

/* Require data module */
const data = require('../models/data.js');


/* Route handlers */
module.exports = {
  // Render index.pug with todolist and/or indexOfTodoToModify
  renderIndex: (req, res) => {
    res.render('index', {
      todolist: data,
      indexOfTodoToModify: req.params.todoId,
    });
  },

  // Add todo to the model
  addTodo: (req, res) => {
    data.push({ item: req.body.todo });
    res.redirect('/todo');
  },

  // Delete todo from the model with :todoId
  deleteTodo: (req, res) => {
    data.splice(req.params.todoId, 1);
    res.redirect('/todo');
  },

  // Modify todo with :todoId
  modifyTodo: (req, res) => {
    data[req.params.todoId] = { item: req.body.modify_todo };
    res.redirect('/todo');
  },
};
