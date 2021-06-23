const express = require('express');
const router = express.Router();
const service = require('./keyboard.service.js');

router.get('/', service.getAllKeyboard);
router.get('/create', service.writeKeyboard);
router.post('/create', service.addKeyboard);
router.get('/edit/:id', service.selectKeyboard);
router.post('/edit/:id', service.updateKeyboard);
router.get('/delete/:id', service.removeKeyboard);

module.exports = router;