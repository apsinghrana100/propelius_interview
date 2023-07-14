const sequelize = require('sequelize');
const connection = require('../util/connection');

const UserDetail = connection.define('UserDetai',{
    id:{
        type : sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull : true
    },
    username : sequelize.STRING,
    useremail : sequelize.STRING,
    pass : sequelize.STRING

});

module.exports = UserDetail