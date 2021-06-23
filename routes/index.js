const express = require('express');
const router = express.Router();
const keyboard = require('./keyboard/index');

router.use('/keyboard', keyboard);

router.get('/', async (req,res)=>{
    res.redirect('/io-info/keyboard');
})

module.exports = router;