const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app=express();



const connection = require('./util/connection');
const userDetail = require('./model/UserDetail');
const bookDetail = require('./model/bookdetail');

const router = require('./router/userRoute')
const bookrouter = require('./router/bookdetail')
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

app.use(router);
app.use(bookrouter);

connection.sync()
.then(response=>{
    app.listen(8000);
})
.catch(error=>{
    console.log(error);
})
