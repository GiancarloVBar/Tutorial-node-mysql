const Sequelize = require('sequelize')
const db = require('./db') //como estou carregando na Models, ela some do app.js

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }, 
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Criar a tabela
User.sync()

module.exports = User