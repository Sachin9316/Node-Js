const express = require('express');
const router = express.Router();
const { createTodo } = require('../Controllers/createTodo')

router.post('/createTodo', createTodo);

module.exports = router;