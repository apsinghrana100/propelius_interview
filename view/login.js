


let mes="";
let promise;
async function Onlogin(event)
{
    event.preventDefault();
    const emailid=document.getElementById("username").value;
    const password=document.getElementById("userpass").value;
    try {  
        
             if(emailid!==undefined && password!=="" && password!==undefined)
             {
                const userdetail={
                    emailid,
                    password
                };
                try {
                    
                   const promise=await axios.post("http://localhost:8000/loginpage",userdetail)
                    if(promise.data.success)
                    {
                        console.log(promise.data.userdetail);
                    
                         localStorage.setItem("user",promise.data.userdetail);

                          window.location.href = "index.htm";
                        console.log("login success")
                         console.log(promise);
                    }
                  
                    
                } catch (error) {
                    console.log(error);
                }
           
             }else{
                    console.log("some Field are might be empty");
                  
             }
    } catch (error) {
        console.log(error);
    }
}

