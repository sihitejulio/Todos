const express = require('express');
const todo = require('../controller/todo');
let router = express.Router();

router.post('/', todo.createTodo);
router.put('/:id', todo.updateTodo);
router.get('/', todo.getTodo);
router.get('/:id', todo.getTodoById);
router.delete('/:id', todo.deleteTodo);

module.exports = router;