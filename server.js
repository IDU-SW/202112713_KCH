const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.set('views',__dirname+'/views');
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));
//app.set('layout', 'common/layout.ejs');
app.use('/io-info', routes);

app.listen(3000, ()=>{
    console.log("server start");
});


//error
/*
app.use((req, res, next)=>{
    next(createError(404));
});
*/
