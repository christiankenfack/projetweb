const express = require('express');
const router = express.Router();
const { createTask, displayTask } = require("../controllers/task");

router.post('/task/create', createTask);
router.get('/tasks/all', displayTask);





module.exports = router;