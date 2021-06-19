const Sequelize = require('sequelize');

const conn = new Sequelize('idu_node_final_db','root','cometrue',{
    dialect: 'mysql',
    host: '127.0.0.1'
});

function connect() {
    conn.authenticate().then(()=>{
        console.log('Sequelize DB 성공');
        conn.close();
    })
    .catch(err => {
        console.log('Sequelize DB 실패');
    })
}