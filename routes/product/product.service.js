const Sequelize = require('sequelize');
const conn = require('../../dbConn');
const models = require('../../model/model'); 
//const cateListService = require('../cate/cate.service');
const Op = Sequelize.Op;

const productList = models.productList;
//const cateList = models.cateList;

//제품목록 불러오기 시작
exports.getAllProducts = (req, res) => {
    
    productList.findAll({
        include: [{model: cateList}]
    }).then(results => {
        if (results == null) {
            res.send({
                message: 'emptyProducts'
            })
        }
        var rsArray = new Array();
        
        for(var product of results){
            const rs = {
                id: product.id,
                name: product.name,
                brand: product.brand,
                cate_id: product.cate_id,
                price: product.price,
                code: product.code,
                state: product.state,
            }
            rsArray.push(rs);
        }
        res.send(rsArray);
        res.render('index');
        
    }).catch(error=>{
        consol.log('Error:'+error);
    })
}
//제품목록 불러오기 끝

//제품입력 시작
exports.writeProduct = (req, res)=>{
    //입력페이지로 이동
    res.render('input-form');
//제품입력 끝
}
//제품입력(D`B) 시작
exports.addProduct = async (req, res) => {
        const name = req.body.name;
        const brand = req.body.brand;
        const price = req.body.price;
        const code = req.body.code;
        const state = req.body.state;
        let cate_id = req.body.cate_id;

    if (!name || !price) {
        res.sendStatus(400);
        return;
    }

    if (!cate_id) {
        cate_id = 1;
    }

    try {
        const ret = await productList.create({
            name: name,
            brand: brand,
            price: price,
            code: code,
            state: state,
            cate_id: cate_id
        }, {logging: false});

        const result = {
            "name": name,
            "brand": brand,
            "price": price,
            "code": code,
            "state": state,
            "cate_id": cate_id
        }
        /*카테고리추가
        todoGroupService.findById(groupId)
        .then(group => {
            if(group) {
                addToGroup(groupId, ret.id);
            } else {
                res.sendStatus(400);
                res.send('no such group')
            }
        })
        */
        res.sendStatus(200);
        res.json(result);
        //등록 후 메인으로 이동
        res.render('index');
        console.log('Create success');
    }
    catch (error) {
        console.log('Error: ', error);
    }
}
//제품입력(D`B) 끝
