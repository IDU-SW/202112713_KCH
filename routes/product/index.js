const express = require('express');
const router = express.Router();
const service = require('./product.service.js');

router.get('/', service.getAllProducts);
router.get('/create', service.writeProduct);
router.post('/create', service.addProduct);
module.exports = router;