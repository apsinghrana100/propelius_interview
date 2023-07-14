const sequelize = require('sequelize');

const connection  = new sequelize ("book",'root','root',{

    dialect:"mysql",
    hostname:"localhost"
})

module.exports = connection;