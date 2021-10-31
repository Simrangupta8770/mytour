 window.addEventListener('load', function () {
    setTimeout(removeLoader, 4000);
});
function removeLoader() {
    const preloader = document.querySelector('.preload');
    preloader.classList.add('preload-finish');
    document.querySelector('.down').style.display = "block";
}

//search bar
document.getElementById('search-icon').addEventListener('click', function () {

    const search = document.getElementById('search-input');
    search.classList.toggle('active2');

});
document.getElementById('color-panel').addEventListener('click', function () {

    const panel = document.getElementById('color');
    panel.classList.toggle('active1');

});
const dark=document.getElementById("dark-btn");
dark.addEventListener("click",function(){
    document.getElementById("body").style.backgroundColor="black";
});
const light=document.getElementById("light-btn");
light.addEventListener("click",function(){
    document.getElementById("body").style.backgroundColor="white";
});

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


function select(){

var s=document.getElementById("days");
var m=s.options[s.selectedIndex].text;
var s1=document.getElementById("price");

var p=s1.options[s1.selectedIndex].text;
if(m==="Ten" && p==="Under 10000"){
    var element=document.getElementsByClassName("ten-first");
    for(var i=0;i<element.length;i++){
        element[i].style.display="block";
    }
    var element1=document.getElementsByClassName("ten-second");
    for(var i=0;i<element1.length;i++){
element1[i].style.setProperty("display", "none", "important");
    }
    var element2=document.getElementsByClassName("ten-third");
    for(var i=0;i<element2.length;i++){
element2[i].style.setProperty("display", "none", "important");
    }
    var element3=document.getElementsByClassName("five");
    for(var i=0;i<element3.length;i++){
element3[i].style.setProperty("display", "none", "important");
    }
    var element4=document.getElementsByClassName("twenty");
    for(var i=0;i<element4.length;i++){
element4[i].style.setProperty("display", "none", "important");
    }
}
else if(m==="Ten" && p==="Under 20000"){
    var element=document.getElementsByClassName("ten-second");
    for(var i=0;i<element.length;i++){
        element[i].style.display="block";
    }
    var element1=document.getElementsByClassName("ten-first");
    for(var i=0;i<element1.length;i++){
element1[i].style.setProperty("display", "block", "important");
    }
    var element2=document.getElementsByClassName("ten-third");
    for(var i=0;i<element2.length;i++){
element2[i].style.setProperty("display", "block", "important");
    }
    var element3=document.getElementsByClassName("five");
    for(var i=0;i<element3.length;i++){
element3[i].style.setProperty("display", "none", "important");
    }
    var element4=document.getElementsByClassName("twenty");
    for(var i=0;i<element4.length;i++){
element4[i].style.setProperty("display", "none", "important");
    }
}
else if(m==="Ten" && p==="Under 30000"){
    var element=document.getElementsByClassName("ten-third");
    for(var i=0;i<element.length;i++){
        element[i].style.display="block";
    }
    var element1=document.getElementsByClassName("ten-first");
    for(var i=0;i<element1.length;i++){
element1[i].style.setProperty("display", "block", "important");
    }
    var element2=document.getElementsByClassName("ten-second");
    for(var i=0;i<element2.length;i++){
element2[i].style.setProperty("display", "block", "important");
    }
    var element3=document.getElementsByClassName("five");
    for(var i=0;i<element3.length;i++){
element3[i].style.setProperty("display", "none", "important");
    }
    var element4=document.getElementsByClassName("twenty");
    for(var i=0;i<element4.length;i++){
element4[i].style.setProperty("display", "none", "important");
    }
}
else if(m==="Five" && p==="Under 10000"){
    var element=document.getElementsByClassName("five-first");
    for(var i=0;i<element.length;i++){
        element[i].style.display="block";
    }
    var element1=document.getElementsByClassName("five-second");
    for(var i=0;i<element1.length;i++){
element1[i].style.setProperty("display", "none", "important");
    }
    var element2=document.getElementsByClassName("five-third");
    for(var i=0;i<element2.length;i++){
element2[i].style.setProperty("display", "none", "important");
    }
    var element3=document.getElementsByClassName("ten");
    for(var i=0;i<element3.length;i++){
element3[i].style.setProperty("display", "none", "important");
    }
    var element4=document.getElementsByClassName("twenty");
    for(var i=0;i<element4.length;i++){
element4[i].style.setProperty("display", "none", "important");
    }
}
else if(m==="Five" && p==="Under 20000"){
    var element=document.getElementsByClassName("five-second");
    for(var i=0;i<element.length;i++){
        element[i].style.display="block";
    }
    var element1=document.getElementsByClassName("five-first");
    for(var i=0;i<element1.length;i++){
element1[i].style.setProperty("display", "block", "important");
    }
    var element2=document.getElementsByClassName("five-third");
    for(var i=0;i<element2.length;i++){
element2[i].style.setProperty("display", "none", "important");
    }
    var element3=document.getElementsByClassName("ten");
    for(var i=0;i<element3.length;i++){
element3[i].style.setProperty("display", "none", "important");
    }
    var element4=document.getElementsByClassName("twenty");
    for(var i=0;i<element4.length;i++){
element4[i].style.setProperty("display", "none", "important");
    }
}
else if(m==="Five" && p==="Under 30000"){
    var element=document.getElementsByClassName("five-third");
    for(var i=0;i<element.length;i++){
        element[i].style.display="block";
    }
    var element1=document.getElementsByClassName("five-second");
    for(var i=0;i<element1.length;i++){
element1[i].style.setProperty("display", "block", "important");
    }
    var element2=document.getElementsByClassName("five-first");
    for(var i=0;i<element2.length;i++){
element2[i].style.setProperty("display", "block", "important");
    }
    var element3=document.getElementsByClassName("ten");
    for(var i=0;i<element3.length;i++){
element3[i].style.setProperty("display", "none", "important");
    }
    var element4=document.getElementsByClassName("twenty");
    for(var i=0;i<element4.length;i++){
element4[i].style.setProperty("display", "none", "important");
    }
}
else if(m==="Twenty" && p==="Under 10000"){
    var element=document.getElementsByClassName("twenty-first");
    for(var i=0;i<element.length;i++){
        element[i].style.display="block";
    }
    var element1=document.getElementsByClassName("twenty-second");
    for(var i=0;i<element1.length;i++){
element1[i].style.setProperty("display", "none", "important");
    }
    var element2=document.getElementsByClassName("twenty-third");
    for(var i=0;i<element2.length;i++){
element2[i].style.setProperty("display", "none", "important");
    }
    var element3=document.getElementsByClassName("ten");
    for(var i=0;i<element3.length;i++){
element3[i].style.setProperty("display", "none", "important");
    }
    var element4=document.getElementsByClassName("five");
    for(var i=0;i<element4.length;i++){
element4[i].style.setProperty("display", "none", "important");
    }
}
else if(m==="Twenty" && p==="Under 20000"){
    var element=document.getElementsByClassName("twenty-second");
    for(var i=0;i<element.length;i++){
        element[i].style.display="block";
    }
    var element1=document.getElementsByClassName("twenty-first");
    for(var i=0;i<element1.length;i++){
element1[i].style.setProperty("display", "block", "important");
    }
    var element2=document.getElementsByClassName("twenty-third");
    for(var i=0;i<element2.length;i++){
element2[i].style.setProperty("display", "none", "important");
    }
    var element3=document.getElementsByClassName("ten");
    for(var i=0;i<element3.length;i++){
element3[i].style.setProperty("display", "none", "important");
    }
    var element4=document.getElementsByClassName("five");
    for(var i=0;i<element4.length;i++){
element4[i].style.setProperty("display", "none", "important");
    }
}
else if(m==="Twenty" && p==="Under 30000"){
    var element=document.getElementsByClassName("twenty-third");
    for(var i=0;i<element.length;i++){
        element[i].style.display="block";
    }
    var element1=document.getElementsByClassName("twenty-second");
    for(var i=0;i<element1.length;i++){
element1[i].style.setProperty("display", "block", "important");
    }
    var element2=document.getElementsByClassName("twenty-first");
    for(var i=0;i<element2.length;i++){
element2[i].style.setProperty("display", "block", "important");
    }
    var element3=document.getElementsByClassName("ten");
    for(var i=0;i<element3.length;i++){
element3[i].style.setProperty("display", "none", "important");
    }
    var element4=document.getElementsByClassName("five");
    for(var i=0;i<element4.length;i++){
element4[i].style.setProperty("display", "none", "important");
    }
}


// if(p==="Under 10000"){
//     var element=document.getElementsByClassName("first");
//     for(var i=0;i<element.length;i++){
//         element[i].style.display="block";
//     }
//     var element1=document.getElementsByClassName("second");
//     for(var i=0;i<element1.length;i++){
// element1[i].style.setProperty("display", "none", "important");
//     }
//     var element2=document.getElementsByClassName("third");
//     for(var i=0;i<element2.length;i++){
// element2[i].style.setProperty("display", "none", "important");
//     }
// }
// else if(p==="Under 20000"){
//     var element=document.getElementsByClassName("second");
//     for(var i=0;i<element.length;i++){
//         element[i].style.display="block";
//     }
//     var element1=document.getElementsByClassName("first");
//     for(var i=0;i<element1.length;i++){
// element1[i].style.setProperty("display", "none", "important");
//     }
//     var element2=document.getElementsByClassName("third");
//     for(var i=0;i<element2.length;i++){
// element2[i].style.setProperty("display", "none", "important");
//     }
// }
// else if(p==="Under 30000"){
//     var element=document.getElementsByClassName("third");
//     for(var i=0;i<element.length;i++){
//         element[i].style.display="block";
//     }
//     var element1=document.getElementsByClassName("second");
//     for(var i=0;i<element1.length;i++){
// element1[i].style.setProperty("display", "none", "important");
//     }
//     var element2=document.getElementsByClassName("first");
//     for(var i=0;i<element2.length;i++){
// element2[i].style.setProperty("display", "none", "important");
//     }
// }
}
document.getElementById("filter").addEventListener('click',function(){
select();
});