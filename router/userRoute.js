const express=require('express');
const router=express.Router();

const controller = require('../controller/signUpController')
const auth = require('../middleware/authen');


router.post('/adduserDetail',controller.addpostdata);
router.post('/loginpage',controller.logincred);


module.exports = router;





