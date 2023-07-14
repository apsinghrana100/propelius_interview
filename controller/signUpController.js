const Sequelize=require('sequelize');
const bcrpt=require('bcrypt');
const usermodule=require('../model/UserDetail');
const jwt=require('jsonwebtoken');

exports.addpostdata=(async(req,res,next)=>{
        console.log("i am controller")
        console.log(req.body.pass,)
    try {
        const pass=req.body.pass
        const saltround=10;
        const count=await usermodule.count({where:{useremail:req.body.email}});
        if(count>0)
            {
                console.log("email id duplicate");
                return res.json(true);
            }
            else
            {
                try {
                    bcrpt.hash(pass,saltround, async(err,hash)=>{
                        await  usermodule.create({
                            username:req.body.uname,
                            useremail:req.body.email,
                            pass:hash });
                            return res.json(false);
                    })
                        
                } catch (error) {
                    return res.json(true);
                }
              
            }
    } catch (error) {
        console.log(error);
    }
    });

    function detailencry(id,username,premium)// this function through we are encryption aur data with some special keys(secret key)
{
    return jwt.sign({userid:id,username:username,isuserpremium:premium},'sekreteky');
}

    exports.logincred=(async(req,res,next)=>{
        console.log("email"+req.body.emailid);
        console.log("password"+req.body.password);
        const passwordtemp=req.body.password;
        const emailtemp=req.body.emailid;
    try {
        
        const userdetail=await usermodule.findAll({where:{useremail:req.body.emailid}});
        console.log("coundt"+userdetail.length);
        
        if(userdetail.length>0)
        {       
                bcrpt.compare(passwordtemp,userdetail[0].pass,(err,result)=>{
                    if(err)
                    {
                        console.log("something went wrong");
                        // return res.status(401).send({error:"User not authorized!!"});
                        throw new Error("User not authorized!!");
                    }
                    if(result===true)
                    {
                        // req.session.user=userdetail;
                        return res.status(200).json({success:true,msg:"Login Successfull",userdetail:detailencry(userdetail[0].id,userdetail[0].username,userdetail[0].ispremium),ispremium:userdetail[0].ispremium});
                        //  res.redirect('/addexpense');
                    }
                    else
                    {
                        return res.status(401).send({error:"User not authorized!!"});
                    }
                    
                })
            
        }
        else
        {
            return res.status(404).send({error:"404 - Not Found"});
        }
    } catch (error) {
        console.log(error);
    }
       
    });
    