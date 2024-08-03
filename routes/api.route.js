var express = require('express')
var router = express.Router()
var toDoList = require('./api/toDoList.route')

router.use('/ToDoList', toDoList);
router.use('/createTask', toDoList);
module.exports = router;