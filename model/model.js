const conn = require('../dbConn');
const Sequelize = require('sequelize');

const Keyboard = conn.define('keyboard', {
    //property 정의
    id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    name: Sequelize.STRING,
    brand: Sequelize.STRING,
    keytype: Sequelize.STRING,
    status: Sequelize.STRING,
    code: Sequelize.STRING,
    price: Sequelize.INTEGER
}, {timestamps: false});

async function setRelation() {

    try {

        await Keyboard.sync().then( ret => {
            console.log('Sync Success :', ret);
            // conn.close();
        }).catch(error => {
            console.error('Sync Failure :', error);
        })
    } catch (error) {
        console.log('error: ', error);
    }
}
setRelation();

exports.keyboard = Keyboard;