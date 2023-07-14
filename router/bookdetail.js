const express=require('express');
const router=express.Router();

const controller = require('../controller/bookController')
const auth = require('../middleware/authen');


router.post('/AddBookDetail',auth.authenticate,controller.addbookdata);
router.get('/fetchBookDetail',auth.authenticate,controller.fetchbookdata);

router.delete('/DeleteRcord/:id',auth.authenticate,controller.deletebookdata);
router.put('/UpdateBookDetail/:id',auth.authenticate,controller.bookupdatebookdata);



// router.post('/loginpage',controller.logincred);


module.exports = router;





