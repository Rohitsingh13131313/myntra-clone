
let form = document.querySelector("form")

let data;

function loaddata (){

    let vlauedata = JSON.parse(localStorage.getItem("data"))
    if(vlauedata){
        data = vlauedata
        // console.log(data)

    }

}


function loginbutton (event){

    event.preventDefault();

    let datavalue = event.target

    email = datavalue[0].value
    password = datavalue[1].value


    let narr = data.filter(function(ele, i){
        return (ele.email===email)&&(ele.password===password)
        
        
    })
    if(narr.length>0){
        localStorage.setItem("loggin", JSON.stringify({status:true, username : narr[0].username}))
        alert("Login Successfull")
        window.location.href = "index.html"
    }
    else{
        alert("Wrong Credentials")
    }
  
    



}
form.addEventListener("submit",function(event){
    loginbutton(event)
})
loaddata()