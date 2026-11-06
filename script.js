

let button = document.querySelector(".btn")
let qrDiv = document.getElementById("qrDiv")
let qrImg = document.getElementById("qrImg")
let qrText = document.getElementById("qrText")



let makeQr = () =>{
    if(qrText.value.length>0){
        qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`

        qrDiv.classList.add("show")
    }else{
        qrText.classList.add("shake")

        setTimeout(()=>{
        qrText.classList.remove("shake")
        },1000)
    }
}



button.addEventListener("click",makeQr)