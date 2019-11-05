const express = require('express');
const todoItem = require('../controller/todoItem');
let router = express.Router();

router.post('/', todoItem.createTodoItem);
router.put('/:id', todoItem.updateTodoItem);
router.get('/:id', todoItem.getTodoItemById);
router.delete('/:id', todoItem.deleteTodoItem);

module.exports = router;