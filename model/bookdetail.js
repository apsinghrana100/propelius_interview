const sequelize = require('sequelize');
const connection = require('../util/connection');

const BookDetail = connection.define('BookDetai',{
    id:{
        type : sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull : true
    },
    bookName : sequelize.STRING,
    imageUrl : sequelize.STRING,
    AuthorName : sequelize.STRING,
    pages : sequelize.INTEGER,
    price : sequelize.INTEGER

});

module.exports = BookDetail;