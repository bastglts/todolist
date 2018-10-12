'use strict';

module.exports = (app) => {
  // Require route handlers (controller) module
  const routesHandlers = require('../controllers/routesHandlers.js');

  // Render index(.pug) view with todolist
  app.get('/todo', routesHandlers.renderIndex);

  // Add a todo to the list
  app.post('/todo', routesHandlers.addTodo);

  // Delete a todo from the list with todoId
  app.get('/todo/:todoId', routesHandlers.deleteTodo);

  // Modify a todo
  app.route('/todo/modify/:todoId')
    // Render index(.pug) with todoId (display "modify-form")
    .get(routesHandlers.renderIndex)

    // Modify the todo
    .post(routesHandlers.modifyTodo);
};
