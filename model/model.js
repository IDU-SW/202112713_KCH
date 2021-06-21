const conn = require('../dbConn');
const Sequelize = require('sequelize');

const CateList = conn.define('cateList', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING
}, {timestamps: false});

const ProductList = conn.define('productList', {
    //property 정의
    id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    name: Sequelize.STRING,
    brand: Sequelize.STRING,
    cate_id: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
    code: Sequelize.STRING,
    state: Sequelize.BOOLEAN,
}, {timestamps: false});

async function initGroup() {
    try {
        const cate = await CateList.findAll({});
    
        if (cate.length === 0) {
            CateList.create({
                name: 'default'
            })
        }
    } catch (error) {
        console.log('error: ', error)
    }
}

async function setRelation() {
    ProductList.belongsTo(CateList, { foreignKey: 'cate_id' })

    try {
        await CateList.sync().then( ret => {
            console.log('Sync Success :', ret);
            // conn.close();
        }).catch(error => {
            console.error('Sync Failure :', error);
        })

        await ProductList.sync().then( ret => {
            console.log('Sync Success :', ret);
            // conn.close();
        }).catch(error => {
            console.error('Sync Failure :', error);
        })
    } catch (error) {
        console.log('error: ', error);
    }

    initGroup();
}

setRelation();

exports.cateList = CateList;
exports.productList = ProductList;