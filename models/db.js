const Sequelize = require('sequelize')

const /* db, conexao */ sequelize = new Sequelize("tutorial", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
});

/* retirar essa mensagem quando for para produção */
sequelize.authenticate().then(function(){
    console.log('conexão com o banco de dados realizada com sucesso')
}).catch(function(){
    console.log('ERRO: conexão com o banco de dados não realizada')
})

module.exports = sequelize;