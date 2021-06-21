const express = require('express');
const router = express.Router();
const product = require('./product/index');
const cate = require('./cate/index');

router.use('/product', product)
router.use('/cate', cate)

router.get('/', async (req,res)=>{
    res.render('index');
})

module.exports = router;