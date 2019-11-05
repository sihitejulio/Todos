const express = require('express');
const router = express.Router();
var workspace = require('./todoService');

router.use(workspace);

module.exports = router;