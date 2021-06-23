const Sequelize = require('sequelize');
const conn = require('../../dbConn');
const models = require('../../model/model');
const Op = Sequelize.Op;

const Keyboard = models.keyboard;

//제품목록 불러오기 시작
exports.getAllKeyboard = (req, res) => {

    Keyboard.findAll({
        //include: [{model: cateList}]
    }).then(results => {
        if (results == null) {
            res.send({
                message: 'emptyProducts'
            })
        }
        var rsArray = new Array();

        for (var keyboard of results) {
            const rs = {
                id: keyboard.id,
                name: keyboard.name,
                brand: keyboard.brand,
                keytype: keyboard.keytype,
                status: keyboard.status,
                code: keyboard.code,
                price: keyboard.price
            }
            rsArray.push(rs);
        }
        //res.send(rsArray);
        res.render('index', {
            data: rsArray
        });

    }).catch(error => {
        consol.log('Error:' + error);
    })
}
//제품목록 불러오기 끝

//제품입력 시작
exports.writeKeyboard = (req, res) => {
    //입력페이지로 이동
    res.render('input-form');
    //제품입력 끝
}

//제품입력(D`B) 시작
exports.addKeyboard = async (req, res) => {
    const name = req.body.name;
    const brand = req.body.brand;
    const keytype = req.body.keytype;
    const status = req.body.status;
    const code = req.body.code;
    const price = req.body.price;

    if (!name || !price) {
        res.sendStatus(400);
        return;
    }
    try {
        const ret = await Keyboard.create({
            name: name,
            brand: brand,
            keytype: keytype,
            status: status,
            code: code,
            price: price
        }, { logging: false });

        const result = {
            'name': name,
            'brand': brand,
            'keytype': keytype,
            'status': status,
            'code': code,
            'price': price
        };

        //res.sendStatus(200);
        //res.json(result);
        //등록 후 메인으로 이동

        if (ret) {
            console.log(result);
            res.redirect('/io-info/keyboard');
            console.log('Create success');
        }
        else {
            console.log('no data');
        }
    }
    catch (error) {
        console.log('Error: ', error);
    }
}
//제품입력(D`B) 끝


//제품조회 시작
exports.selectKeyboard = async (req, res) => {
    //수정페이지로 이동
    try {

        const id = req.params.id;
        // Primary Key로 찾기
        const result = await Keyboard.findByPk(id);
        // let result = await Movie.findOne({where: {year: {[Op.eq]: 2019}}});
        if (result) {
            console.log(result);
            res.render('edit-form', {
                msg:'Select success',
                data: result
            });
            console.log('Select success');
        }
        else {
            console.log('no data');
        }
    }
    catch (error) {
        console.log('Error :', error);
    }
}
//제품조회 끝

//제품수정 시작
exports.updateKeyboard = async (req, res) => {
    //수정페이지로 이동
    try {
        const id = req.params.id;
        let keyboard = await Keyboard.findByPk(id);
        keyboard.name = req.body.name;
        keyboard.brand = req.body.brand;
        keyboard.keytype = req.body.keytype;
        keyboard.status = req.body.status;
        keyboard.code = req.body.code;
        keyboard.price = req.body.price;

        let ret = await keyboard.save();
        if (ret) {
            let changedKeyboard = ret.dataValues;
            console.log('ret :', changedKeyboard);
            res.redirect('/io-info/keyboard');
            console.log('Update success');
        }
        else {
            console.log('no data');
        }

    }
    catch (error) {
        console.log('Error :', error);
    }
}
//제품수정 끝

//제품삭제 시작
exports.removeKeyboard = async (req, res) => {
    try {
        const id = req.params.id;
        let ret = await Keyboard.destroy({ where: { id: id } });
        if (ret) {
            console.log('ret :', ret);
            res.redirect('/io-info/keyboard');
            console.log('Remove success ');
        }
        else {
            console.log('no data');
        }
    }
    catch (error) {
        console.log('Remove Error :', error);
    }
}

