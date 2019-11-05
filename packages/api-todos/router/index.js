const express = require('express');
let router = express.Router();

const workspace = require('./routeWorkspace');
const todo = require('./routeTodo');
const todoItem = require('./routeTodoItem');

router.use('/workspace', workspace);
router.use('/todo', todo);
router.use('/todo_item', todoItem);
module.exports = router;



