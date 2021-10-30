
// window.addEventListener('load', function () {
//     setTimeout(removeLoader, 2000);
// });
// function removeLoader() {
//     const preloader = document.querySelector('.preload');
//     preloader.classList.add('preload-finish');
//     document.querySelector('.down').style.display = "block";
// }

//search bar
document.getElementById('search-icon').addEventListener('click', function () {

    const search = document.getElementById('search-input');
    search.classList.toggle('active2');

});
document.getElementById('color-panel').addEventListener('click', function () {

    const panel = document.getElementById('color');
    panel.classList.toggle('active1');

});
// document.getElementById("default").addEventListener("click",function(){
//     var element=document.getElementsByClassName("dark-bgcolor");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.backgroundColor = "#212529";
//     }
//     var element1=document.getElementsByClassName("light-color");
//     for (var i = 0; i < element1.length; i++) {
//         element1[i].style.setProperty("color", "white", "important");
//     }

//     var element=document.getElementsByClassName("orange-bgcolor");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("background-color", "#fd7e14", "important");
//     }
//     var element=document.getElementsByClassName("orange-locolor");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("background-color", "#fd7e147a", "important");
//         element[i].style.setProperty("color", "#fd7e14", "important");
//     }
//     var element=document.getElementsByClassName("passive");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("color", "#fd7e14", "important");
//     }
//     var element=document.getElementsByClassName("orange-color");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("color", "#fd7e14", "important");
//     }
    
//     // var element1=document.getElementsByClassName("light-color");
//     // for (var i = 0; i < element1.length; i++) {
//     //     element1[i].style.setProperty("color", "white", "important");
//     // }
   

// });
// document.getElementById("primary-btn-2").addEventListener("click",function(){
//     var element=document.getElementsByClassName("dark-bgcolor");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.backgroundColor = "white";
//     }
//     var element1=document.getElementsByClassName("light-color");
//     for (var i = 0; i < element1.length; i++) {
//         element1[i].style.setProperty("color", "black", "important");
//     }
   

// });
// document.getElementById("primary-btn-1").addEventListener("click",function(){
//     var element=document.getElementsByClassName("dark-bgcolor");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.backgroundColor = "#212529";
//     }
//     var element1=document.getElementsByClassName("light-color");
//     for (var i = 0; i < element1.length; i++) {
//         element1[i].style.setProperty("color", "white", "important");
//     }
   

// });
// document.getElementById("secondary-btn-1").addEventListener("click",function(){
//     var element=document.getElementsByClassName("orange-bgcolor");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("background-color", "blue", "important");
//     }
//     var element=document.getElementsByClassName("orange-locolor");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("background-color", "rgba(0,0,255,0.2)", "important");
//         element[i].style.setProperty("color", "rgb(0,0,255)", "important");
//     }
//     var element=document.getElementsByClassName("passive");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("color", "rgb(0,0,255)", "important");
//     }
//     var element=document.getElementsByClassName("orange-color");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("color", "rgb(0,0,255)", "important");
//     }
    
//     // var element1=document.getElementsByClassName("light-color");
//     // for (var i = 0; i < element1.length; i++) {
//     //     element1[i].style.setProperty("color", "white", "important");
//     // }
   

// });
// document.getElementById("secondary-btn-2").addEventListener("click",function(){
//     var element=document.getElementsByClassName("orange-bgcolor");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("background-color", "pink", "important");
//     }
//     var element=document.getElementsByClassName("orange-locolor");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("background-color", "rgba(255,192,203,0.2)", "important");
//         element[i].style.setProperty("color", "rgb(255,192,203)", "important");
//     }
//     var element=document.getElementsByClassName("passive");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("color", "pink", "important");
//     }
//     var element=document.getElementsByClassName("orange-color");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("color", "pink", "important");
//     }
// });
// document.getElementById("secondary-btn-3").addEventListener("click",function(){
//     var element=document.getElementsByClassName("orange-bgcolor");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("background-color", "yellow", "important");
//     }
//     var element=document.getElementsByClassName("orange-locolor");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("background-color", "rgba(255,252,0,0.2)", "important");
//         element[i].style.setProperty("color", "yellow", "important");
//     }
//     var element=document.getElementsByClassName("passive");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("color", "yellow", "important");
//     }
//     var element=document.getElementsByClassName("orange-color");
//     for (var i = 0; i < element.length; i++) {
//         element[i].style.setProperty("color", "yellow", "important");
//     }
// });
// let colorsInput=document.querySelector('#pickr1');
// let colorsInput1=document.querySelector('#pickr2');



//     colorsInput.addEventListener('input',() =>{
//         let colors1 = colorsInput.value;
//         var element=document.getElementsByClassName("dark-bgcolor");
//         for (var i = 0; i < element.length; i++) {
//             element[i].style.backgroundColor = colors1;
//         }
//         var element1=document.getElementsByClassName("light-color");
//         for (var i = 0; i < element1.length; i++) {
//             element1[i].style.setProperty("color", "white", "important");
//         }
//       });
//       colorsInput1.addEventListener('input',() =>{
//         let colors2 = colorsInput1.value;
//         var element2=document.getElementsByClassName("orange-bgcolor");
//         for (var i = 0; i < element2.length; i++) {
//             element2[i].style.setProperty("background-color", colors2, "important");
//         }
//         var element3=document.getElementsByClassName("orange-locolor");
//         for (var i = 0; i < element3.length; i++) {
//             element3[i].style.setProperty("background-color", "rgba(255,255,255,0.2)", "important");
//             element3[i].style.setProperty("color", colors2, "important");
//         }
//         var element4=document.getElementsByClassName("passive");
//         for (var i = 0; i < element4.length; i++) {
//             element4[i].style.setProperty("color", colors2, "important");
//         }
//         var element5=document.getElementsByClassName("orange-color");
//         for (var i = 0; i < element5.length; i++) {
//             element5[i].style.setProperty("color", colors2, "important");
//         }
    
//     });




//sigin form
const loginform = document.getElementById("loginForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

loginform.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});


function setErrorMsg(input, errormsgs) {
    const formBox = input.parentElement;
    const small = formBox.querySelector("small");
    small.innerText = errormsgs;
    formBox.className = "form-box error";
}
function setSuccessMsg(input) {
    const formBox = input.parentElement;
    formBox.className = "form-box success";
    const small = formBox.querySelector("small");
    small.innerText = "";
}
const isEmail = (emailVal) => {
    var atsymbol = emailVal.indexOf('@');
    if (atsymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atsymbol + 3) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}
const sendData = (usernameVal,sRate,count) => {
    if(sRate===count) {
        alert("You are signed in successfully");
        swal("Welcome " + usernameVal, "You are logged in Successfully", "success");
        location.href='index.html';

    }
}
const successMsg = (usernameVal) => {
    let formBox = document.getElementsByClassName('form-box');
    var count = formBox.length - 1;
    for (var i = 0; i < formBox.length; i++) {
        if (formBox[i].className === "form-box success") {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, count);   
        }
        else {
            return false;
        }
    }
    
}
function validate() {
    'use strict'
    //userame validate
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    if (usernameVal === " ") {
        setErrorMsg(username, "Username cannot be blank")
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, "username min 3 char");
    }
    else {
        setSuccessMsg(username);
    }
    // email VAL
    if (emailVal === "") {
        setErrorMsg(email, "email cannot be blank");
    } else if (emailVal.length <= 3) {
        setErrorMsg(email, "email is invalid");
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, "invalid email");
    } else {
        setSuccessMsg(email);
    }
    //password
    if (passwordVal === "") {
        setErrorMsg(password, "password cannot be blank");

    } else if (passwordVal.length <= 5) {
        setErrorMsg(password, "password has to be of minimum 6 characters");

    } else {
        setSuccessMsg(password);
    }
  successMsg(usernameVal);
}
// signup
const signUpform=document.getElementById("signUpForm");
const username1=document.getElementById("username1");
const number1=document.getElementById("phone1");
const email1=document.getElementById("email1");
const password1=document.getElementById("password1");
const cpassword1=document.getElementById("cpassword1");

signUpform.addEventListener('submit',(event)=>{
    
    event.preventDefault();
    validate1();
});

function setErrorMsg1(input,errormsgs){
    const formBox1 =input.parentElement;
    const small =formBox1.querySelector("small");
    small.innerText =errormsgs;

    formBox1.className="form-box1 error1";
    
}
function setSuccessMsg1(input){
    const formBox1 =input.parentElement;
    formBox1.className="form-box1 success1";
    const small =formBox1.querySelector("small");
    small.innerText ="";
    
}
const isEmail1=(emailVal1) =>{
    var atsymbol =emailVal1.indexOf('@');
    if(atsymbol <1) return false;
    var dot =emailVal1.lastIndexOf('.');
    if(dot <= atsymbol+3) return false;
    if(dot===emailVal1.length -1) return false;
    return true;
}

const sendData1=(usernameVal1,sRate1,count1) =>{
    if(sRate1===count1){
        swal("Welcome "+ usernameVal1 , "You are logged in Successfully", "success");
        location.href='index.html';
        
    }
}
const successMsg1 =(usernameVal1) =>{
    let formBox1=document.getElementsByClassName('form-box1');
    var count1=formBox1.length-1;
    for(var i=0 ;i<formBox1.length;i++) {
        if(formBox1[i].className==="form-box1 success1"){
            var sRate1=0+i;
            console.log(sRate1);
            sendData1(usernameVal1,sRate1,count1);
        }
        else{
            return false;
        }
    }
}
//final validation

function validate1(){
    const usernameVal1=username1.value.trim();
    const numberVal1=phone1.value.trim();
    const emailVal1=email1.value.trim();
    const passwordVal1=password1.value.trim();
    const cpasswordVal1=cpassword1.value.trim();
    
    //username validate
    if(usernameVal1===""){
        setErrorMsg1(username1,"username cannot be blank");
     } else if(usernameVal1.length <= 2){
         setErrorMsg1(username1,"username min 3 char");
    } else{
         setSuccessMsg1(username1);
    }
// email VAL
    if(emailVal1===""){
        setErrorMsg1(email1,"email cannot be blank");
     } else if(emailVal1.length <= 3){
        setErrorMsg1(email1,"email is invalid");
    } else if(!isEmail1(emailVal1)){
        setErrorMsg1(email1,"invalid email");
    } else{
        setSuccessMsg1(email1);
    }

// phone val
    if(numberVal1===""){
        setErrorMsg1(number1,"phone number cannot be blank");
    } else if(numberVal1.length!=10)
    {
        setErrorMsg1(phone1,"invalid phone no.");
        setSuccessMsg1(phone1);
    } else{
        setSuccessMsg1(phone1);
    }
//password
    if(passwordVal1===""){
        setErrorMsg1(password1,"password cannot be blank");

    } else if(passwordVal1.length<=5){
        setErrorMsg1(password1,"password has to be of minimum 6 characters");

    } else{
        setSuccessMsg1(password1);


    }


//password
if(cpasswordVal1===""){
    setErrorMsg1(cpassword1,"cpassword cannot be blank");

} else if(passwordVal1 !== cpasswordVal1){
    setErrorMsg1(cpassword1,"recheck confirm password");

} else{
    setSuccessMsg1(cpassword1);

}
  successMsg1(usernameVal1);
}

// var swiper = new Swiper(".packages-slider",{
//     spaceBetween:20,
//     loop:true,
//     autoplay:{
//         delay:2500,
//         disableOnInteraction:false,
//     },
//     breakpoints:{
//        640:{
//            slidesPerView:1,
//        },
//        768:{
//            slidesPerView:2,
//        },
//        1024:{
//            slidesPerView:3,
//        },
//     },
    
// });
