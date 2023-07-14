const uname = document.getElementById('username')
const email = document.getElementById('useremail')
const pass = document.getElementById('userpass')
const conpass = document.getElementById('userconpass')

async function formSubmit(event){
    console.log(uname.value,email.value,pass.value,conpass.value);
    event.preventDefault();
    
try {

    if(uname==='' || email==='' || pass===''|| conpass==='')
    {
        alert('some filed might be empty');
    }else{
        
        Userdata={
            uname:uname.value,
            email:email.value,
            pass:pass.value,
            conpass:conpass.value
        }
       const output = await axios.post("http://localhost:8000/adduserDetail",Userdata);
       console.log(output);
    }
} catch (error) {
        console.log(error);
}
    


}