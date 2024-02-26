const express = require('express');
const router = express.Router();
const { createProject, projectInfo, projectdelete } = require("../controllers/project");

router.post('/project/create', createProject);
router.get('/getproject', projectInfo);
router.delete('/projectdelete/:id', projectdelete);





module.exports = router;