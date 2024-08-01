let form = document.querySelector("form")

let data = []

function savedata(){

    localStorage.setItem("data", JSON.stringify(data))
}
function loaddata (){

    let vlauedata = JSON.parse(localStorage.getItem("data"))
    if(vlauedata){
        data = vlauedata
        console.log(data)

    }

}
function submitbutton(event){

    event.preventDefault();

    let inputvalue = event.target
    
    let username = inputvalue[0].value
    let email = inputvalue[1].value
    let password = inputvalue[2].value
    let confirm = inputvalue[3].value


    if(password == confirm){
        let obj = {

            username : username,
            email: email,
            password: password,
    
        }
        data.push(obj)
        alert("Registration Successful")
        window.location.href = "login.html"
        savedata()
        console.log(data)


    }
    else{
        alert("Wrong Password")
    }
    

    // console.log(username,email,password,confirm)
}

form.addEventListener("submit",function(event){
      submitbutton(event)
})

loaddata()