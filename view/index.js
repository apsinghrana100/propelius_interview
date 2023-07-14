 let bookname = document.getElementById('bookname');
 let imageUrl = document.getElementById('imageUrl');
 let authname = document.getElementById('An');
 let pagees = document.getElementById('page');
 let price = document.getElementById('price');

 const token=localStorage.getItem("user");
 async function SubmitBookDetail(event){
    event.preventDefault();
    try {
        
        const data = {
            bookname :bookname.value,
            imageUrl : imageUrl.value,
            authname : authname.value,
            pagees : pagees.value,
            price : price.value
        }
        console.log("i am calling");
        
        const output =await axios.post("http://localhost:8000/AddBookDetail",data,{headers: {"Authorization":token}});

    } catch (error) {
        console.log(error);
    }



}

async function fetchBookDetail(event){
try {
    const output = await axios.get("http://localhost:8000/fetchBookDetail",{headers: {"Authorization":token}})
    console.log(output);
    displayOnScreen(output.data.output);
} catch (error) {
    console.log(error);
    
}
}
const id= document.getElementById('data');
function displayOnScreen(data)
{
    console.log(data);
    data.forEach(element => {
        let dat = `<td>${element.bookname}</td>
                    <td>${element.imageUrl}</td>
                    <td>${element.AuthorName}</td>
                    <td>${element.pages}</td>
                    <td>${element.price}</td>
                    <td><button type="button" onclick=editexpense('${element.id}','${element.bookname}','${element.AuthorName}','${element.pages}')>Edit</button></td>
                     <td><button type="button" onclick=deletexpense('${element.id}')>Delete</button></td>
`
        id.innerHTML+=dat;
    });
    

}

async function deletexpense(id)
{
    try {
        const output = await axios.delete(`http://localhost:8000/DeleteRcord/${id}`,{headers: {"Authorization":token}}) 
    } catch (error) {
        console.log(error);
    }
}
var tempid;

async function editexpense(id,bookname,authname,page)
{
    try {
        bookname.value=bookname;
        imageUrl.value="temp"
        authname.value=authname;
        pagees.value = page;
        tempid=id;

       

    } catch (error) {
            console.log(error);
    }   
}

async function updatedata()
{
    console.log("i am calling update")
    try {
        const data = {
            bookname :bookname.value,
            imageUrl : imageUrl.value,
            authname : authname.value,
            pagees : pagees.value,
            price : price.value
        }
    
        const output =await axios.put(`http://localhost:8000/UpdateBookDetail/${tempid}`,data,{headers: {"Authorization":token}});
        console.log(output);
    } catch (error) {
        console.log(error);
    }
    

}