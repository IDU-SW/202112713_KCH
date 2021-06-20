const express = require('express');
const router = express.Router();
const product = require('./product/index');
const cate = require('./cate/index');

module.exports = router;

router.get('/', async (req,res)=>{
    res.render('index');
})
