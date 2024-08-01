
let profile = document.querySelector("#ptag1")
let loginstatus = JSON.parse(localStorage.getItem("loggin"))

if(loginstatus){
    profile.innerHTML = `<b>Hello,</b> <h4>${loginstatus.username}</h4>`
    let icon = document.querySelector("#icon1").style.display = "none"
    profile.style.color = "#ff3c78"
    
    
        
}


imagearr = [

"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/22/2d6ba180-0fe1-4754-9557-56320a6899dc1716399602300-DESKTOP-HP-BANNER-----8.jpg",
"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg" ,
"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg" ,
"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg" ,
"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg" ,
"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg"

]

let allimg = document.querySelector(".sliderimg > img")
let prev = document.getElementById("prev")
let next = document.getElementById("next")

let cuurentimg = 0;

allimg.setAttribute("src",imagearr[cuurentimg])
dotbtn = document.querySelectorAll(".dot")


let interval
let settime =0


function startinterval(){
    interval = setInterval(function(){
        cuurentimg++
        if(cuurentimg >= imagearr.length){
            cuurentimg=0
        }
        allimg.setAttribute("src",imagearr[cuurentimg])
    },4000)
}
startinterval()



function backbtn (){
    cuurentimg++
    //  clearInterval(interval)
    if(cuurentimg >= imagearr.length){
        cuurentimg = 0
    }
    allimg.setAttribute("src",imagearr[cuurentimg])

}


// function backbtn (){
//     clearInterval(interval)
// }

function dot (){
  if(interval){
     backbtn()
  }
   else{
     nextbtn()
    }
}


// next.addEventListener("click",function(){
//     cuurentimg++
//     if(cuurentimg >= imagearr.length){
//         cuurentimg =0

//     }
//     allimg.setAttribute("src",imagearr[cuurentimg])
// })

// prev.addEventListener("click",function(){
    
//     cuurentimg--
//     if(cuurentimg<0){
//         cuurentimg = imagearr.length - 1
//     }
//     allimg.setAttribute("src",imagearr[cuurentimg])
// })

// let interval
// let settime =0


// function startinterval(){
//     interval = setInterval(function(){
//         cuurentimg++
//         if(cuurentimg >= imagearr.length){
//             cuurentimg=0
//         }
//         allimg.setAttribute("src",imagearr[cuurentimg])
//     },4000)
// }
// startinterval()



 

















