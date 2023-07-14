const Sequelize=require('sequelize');
const bcrpt=require('bcrypt');
const bookmodule=require('../model/bookdetail');
const jwt=require('jsonwebtoken');



exports.addbookdata=(async(req,res,next)=>{
 console.log(req.body.bookn);
try {

    const output =await  bookmodule.create({
        bookName:req.body.bookname,
         imageUrl:req.body.imageUrl,
          AuthorName:req.body.authname,
           pages:req.body.pagees,
            price:req.body.price
    });
    
    
    } catch (error) {
    console.log(error);
}
});


exports.fetchbookdata = (async(req,res)=>{
    try {
        const output = await bookmodule.findAll();
        res.status(200).json({output});
        console.log(output);
    } catch (error) {
        console.log(error);
    }
})

exports.deletebookdata = (async(req,res)=>{

    try {
        const output = await bookmodule.destroy({where :{id:req.params.id}});
    } catch (error) {
        console.log(error);
        
    }
})

exports.bookupdatebookdata =(async(req,res)=>{
    console.log("--------"+req.body.id)
    try {
        const output =await bookmodule.update({
            bookName:req.body.bookname,
            imageUrl:req.body.imageUrl,
             AuthorName:req.body.authname,
              pages:req.body.pagees,
               price:req.body.price
        },{where:{id:req.params.id}});
    } catch (error) {
        console.log(error)
    }
})
