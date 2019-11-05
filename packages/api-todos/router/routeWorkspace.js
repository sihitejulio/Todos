const express = require('express');
const workspace = require('../controller/workspace');
let router = express.Router();

router.post('/', workspace.createWorkspace);
router.get('/', workspace.getWorkspace);
router.get('/:id', workspace.getWorkspaceById);
router.put('/:id', workspace.updateWorkspace);
router.delete('/:id', workspace.deleteWorkspace);

module.exports = router;