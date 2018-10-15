'use strict';

/* -------- Create Router -------- */
const router = require('express').Router();


/* --------- Dependency ---------- */
const routesHandlers = require('../controllers/routesHandlers.js');


/* -------- Todo routes ---------- */

// Render index(.pug) view with todolist (i.e. all todos)
router.get('/', routesHandlers.renderIndex);

// Add a todo to the list
router.post('/', routesHandlers.addTodo);

// Delete a todo from the list with todoId
router.get('/:todoId', routesHandlers.deleteTodo);

// Modify a todo
router.route('/modify/:todoId')
  // Render index(.pug) with todoId (display "modify-form")
  .get(routesHandlers.renderIndex)

  // Modify the todo
  .post(routesHandlers.modifyTodo);


module.exports = router;
