'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));



app.post('/',(req,res)=>{
res.send(`<html><head>
<link href="https://fonts.googleapis.com/css2?family=Varela+Round&amp;display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">


<style>
@media(max-width:600px){html{font-family:Raleway}#review-slider{display:none}
#post-header-body-div-1{display:none}#messaging-feature{margin:25%}#review-slider{width:100%;height:100%;visibility:visible}#start-review{width:50%;height:inherit;font-size:1em}body{font-family:Raleway}#contact-footer-div{visibility:hidden;position:fixed}#image-slider{display:none;background-color:transparent}.circle-select-buttons{display:none}
#main-nav-bar-bottom-half,.main-nav-bar-items-container{display:none}
#search_icon{position:fixed;top:10px;width:25px;right:20px}
.product-images-container{width:100%;display:block}}
@media (max-width:500px){#contact-footer-div{display:none}}
@media(max-width:400px){
.social-media-image-container{width:20px;height:20px}
.home-info{width:100%;display:block}#arrow_1,#arrow_2{width:25px;height:25px}



}

.main-nav-bar-items-container{width:33%;float:right}    
</style>
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&amp;family=Raleway:ital,wght@1,200&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@7f00..700&amp;family=Raleway:ital,wght@1,200&amp;display=swap" rel="stylesheet">

<link rel="stylesheet" href="/styles.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<script src="/functions.js" type="text/javascript">

function imageSlide(id,urlList){
var image = document.getElementById(id);
for(let i of urlList){
setTimeout(()=>{image.style.opacity = 0%;image.style.opacity = 100%;image.src = i},4000);
};
};



</script>

<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet">

<title>The Medicator: A Healthcare App</title>
</head>

<body><header id="main-header" style="height:600px;background-color:#0b4ecc"><div style="z-index:-1;background-color: #35e8fe;"><div style="z-index:1;position:absolute;top:50%;background-color:transparent;margin:auto;width:100%;height:100px"><div style="font-weight:bold;font-family:Raleway;opacity:100%;color:white;background-color:transparent"><p style="font-family:'Varela Round';top:-450px;font-size:120px;position:absolute;left:100px;width:50%"><br>The<br>Medicator</p><p style="position:absolute;right:20px;width:50%">The premier healthcare app in managing your prescriptions, writing new ones, and staying safe on medication<br></p></div></div><img style="opacity:60%;width:100%;height:100%;" src="https://harcourthealth.com/wp-content/uploads/2019/10/technology-in-healthcare.jpg"></div>
<div style="background-color:transparent;height:50%;width:100%">

<div id="main-nav-bar-top-half">
<br>

<script>
window.onload = (event) =>{
document.getElementById('search').style.width = '350px';

}


window.onclick = (event) =>{
document.getElementById('options').innerHTML = '';
var menu = document.getElementById('menu-bar') 
menu.style.width = "0px";
menu.style.height = "0px";
menu.style.fontSize = "0px"
var specialOffers = document.getElementById('special-offers');specialOffers.style.visibility = hidden;
}
  window.onload = (event) =>{
document.getElementById('search').style.width = '350px';
}
window.onclick = (event) =>{
document.getElementById('options').innerHTML = '';
}
    
var search_list = {


        }
function searchReq(){
  document.getElementById('options').innerHTML = '';
var val = document.getElementById('search').value;
var list = Object.keys(search_list);

for(let i of list){

if(i.includes(val.toUpperCase())){
    var elem = document.createElement('div');
    var a = document.createElement('a');
    var but = document.createElement('button')
    
    a.className = 'search_op';
    elem.className = 'search_op';
but.style.fontFamily = 'Raleway'
but.style.color = "white";
but.style.borderColor = "rgb(145 151 81)"
but.style.backgroundColor = "rgb(145 151 81)";
but.style.borderRadius = "10px"
but.style.fontWeight = "bold";
but.style.margin = "0px";
but.style.display = "block"
but.style.height = "50px";
but.style.width= "275px";
a.style.position = "absolute"
    elem.style.visibility = "visible";
    a.style.visibility = "visible";
    elem.style.height = "50px";
    a.style.height = "50px" 
    a.href = list[i];
	a.append(but)
    but.append(i);

    elem.appendChild(a);
    document.getElementById('options').append(elem);


}



}

}
</script>
<style>
:hover:-moz-placeholder{
    color:rgba(0, 0, 120, 0.8)
    
  } 
  
  :hover::-webkit-input-placeholder { 
    color:rgba(0, 0, 120, 0.8)}
  
  :hover:-ms-input-placeholder { 
    color:rgba(0, 0, 120, 0.8)}
  
  :hover::-moz-placeholder{ 
    color:rgba(0, 0, 120, 0.8)}
  
  
  
  
a{
text-decoration:none
}

	#options{position:absolute;z-index:1;width:50%;margin:auto;}
#search{
border-radius:25px;
font-family:Cormorant Garamond;
width:0px;
border-style:solid;
border-color:#a3b8c8;
display:inline-block;
height:50px;
text-align:center;
border-color:white;
transition:width 1s;
border-style:solid}
</style>
  

<div style=" width: 120px;position:fixed;top:10px;left:50%"><svg id="search_icon" onclick="

var width = document.getElementById('search');
if(width.style.width == '0px'){
width.style.width = '120px';
}
else{
width.style.width = '0px'}


" style="z-index:1;width:30px;height:20px;">
<circle cx="8" cy="8" stroke-width="3" stroke="black" r="6"></circle>
<polyline points="12 12 20 20 " stroke-width="3" stroke="black" fill="none"></polyline>
</svg><input placeholder="Find Out More About Us" onkeyup="" id="search" type="search" style="width: 0px;float:left"></div>

<div style="position:relative"> 
    
<div id="options"></div>
<div id="precursor"></div>
</div><br>
</div><div><svg style="height:50px;width:40px;z-index:1;position:fixed;left:15px;top:10px" onmouseover="menuStat('menu-bar')">

<polyline stroke="whitesmoke" stroke-width="4" points="0 10 40 10"></polyline>
<polyline stroke="whitesmoke" stroke-width="4" points="0 20 40 20"></polyline>
<polyline stroke="whitesmoke" stroke-width="4" points="0 30 40 30"></polyline>

</svg><div id="menu-bar" onmouseleave="menuStat('menu-bar')" style="width: 0px; height: 0px; font-size: 0px; top: 0%;">
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">About Us</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Drug Information</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Careers</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Specials</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Create Account/Login</button></a>


</div></div>


 

<nav id="main-nav-bar">

<br>

<div style="position:fixed;top:10px;right:50px">












<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-6')" style="background-color:transparent">

<form action="" method="POST" class="main-nav-bar-form" style="background-color:transparent">
<input name="username" value = `+user+` style="display:none">
<input name="pasword" value = `+password+` style="display:none">
<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">Medical Forms</button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span>




<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-7')" style="background-color:transparent">

<form action="" method="POST" class="main-nav-bar-form" style="background-color:transparent">
<input name="username" value = `+user+` style="display:none">
<input name="pasword" value = `+password+` style="display:none">
<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">Accounts</button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span><span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-8')" style="background-color:transparent">

<form action="" method="POST" class="main-nav-bar-form" style="background-color:transparent">
<input name="username" value = `+user+` style="display:none">
<input name="pasword" value = `+password+` style="display:none">
<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">APIs</button>

</form>
<div class="main-nav-bar-dropdown-container" style="background-color:transparent">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span><span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-9')" style="background-color:transparent">

<form action="" method="POST" class="main-nav-bar-form" style="background-color:transparent">
<input name="username" value = `+user+` style="display:none">
<input name="pasword" value = `+password+` style="display:none">
<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">About</button>

</form>
<div style="background-color:transparent" class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span></div>



</nav>

</div></header>
<div class="alert-item" id="special-offers" style="z-index:2;opacity:80%;background-color:black;width:80%;height:500px;right:10%;position:fixed;top:30px;margin:auto;color:white;text-align:center;visibility:hidden">
<span style="float:left;font-size:20px;font-family:Raleway;font-weight:bold" onclick="document.getElementById('special-offers').style.visibility = 'hidden'">X</span>
<h1 style="font-family:Raleway;font-size:3em">Special Offers</h1>
<div class="product-images-container" id="product-images-container-1">
  <img class="product-images">
    <h2>Product Image</h2>
  <input class="product-titles" value="Product Image">
  <br>
<span style="color:red;text-decoration:line-through
    "><p style="font-family:Helvetica;text-align:center">$100.00</p></span>
    <p>50% OFF</p><input style="display:none;" class="price" value="2">
    <label>Quantity</label><input class="select-quantity" style="
    width: 20px;
">
    <button class="buy-button">Add to Cart</button>
  </div></div>
<div class="alert-item" id="account-forms" style="z-index: 3; opacity: 0.8; background-color: rgb(75, 85, 118); width: 100%; height: 100%; position: fixed; color: white; text-align: center; top: 0px; visibility: hidden;">
<span style="float:left;font-size:20px;font-family:Raleway;font-weight:bold" onclick="document.getElementById('account-forms').style.visibility = 'hidden'">X</span>

<div id="2_dif_forms" style="border-color:rgb(145 151 81);border-style: solid;width:500px;border-width: .3cm; text-align: center;margin:auto"><button onclick="var x = document.getElementById('sgnp'); x.style.color = 'rgb(145 151 81)';x.style.backgroundColor = 'white';var c =document.getElementById('lgin'); c.style.color = 'white';c.style.backgroundColor = 'rgb(145 151 81)';var form_1 = document.getElementById('form_1');var form_2 = document.getElementById('form_2'); form_1.style.display = 'none';form_2.style.display = 'block'" id="lgin" style="border-color: whitesmoke; border-radius: 0%; width: 100px; height: 50px; background-color: white; color: rgb(145, 151, 81); font-family: Raleway; font-size: large;">Login</button><button onclick="var x = document.getElementById('lgin'); x.style.color = 'rgb(145 151 81)';x.style.backgroundColor = 'white'; var c =document.getElementById('sgnp'); c.style.color = 'white';c.style.backgroundColor = 'rgb(145 151 81)';var form_1 = document.getElementById('form_1');var form_2 = document.getElementById('form_2');form_2.style.display = 'none';form_1.style.display = 'block'" id="sgnp" style="border-color: whitesmoke; border-radius: 0%; width: 100px; height: 50px; color: white; background-color: rgb(145, 151, 81); font-family: Arial; font-size: large;">Sign up</button><form name="form_1" style="font-family:Raleway;display: block; margin: 0% 1cm 1cm; border-width: 0.3cm; border-style: solid; border-color: rgb(145, 151, 81);" action="/signup" method="post" id="form_1"><br><h1 style="font-family:Raleway;font-size: 1cm;text-align: center;">Create Account</h1><span style="text-align: center;">_____________</span><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" id="User" name="User" placeholder="Type your username" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" id="psw" name="psw" placeholder="Type your password" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" name="cell" id="cell" placeholder="Type your cell" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" name="email_user" id="email_user" placeholder="Type your email" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" name="email_psw" id="email_psw" placeholder="Type your password for your email" type="text"><br><button style="border-color:rgb(145 151 81);border-radius: 0%; width:100px;height:50px;color:white;background-color:rgb(145 151 81) ;font-family:Arial;font-size: large;border-style: none;" onclick="formCheck();" id="register" type="submit">Register</button><script>function formCheck(){var user = document.getElementById('User').value;var email,email_psw,cell,psw;psw = document.getElementById('psw').value;email =  document.getElementById('email_user').value;email_psw =  document.getElementById('email_psw').value;cell =  document.getElementById('cell').value;if((email == ""||email=="undefined")||(cell == ""||cell== "undefined")||(email_psw ==""||email_psw== "undefined")||(User == "" || User== "undefined")||(psw == ""||psw == "undefined")){document.getElementById('register').type = 'text';document.getElementById('form_1').action = '/login';alert("Please fill all fields");}}</script></form><form name="form_2" id="form_2" action="/.netlify/functions/login_sub" method="post" style="display: none; margin: 0% 1cm 1cm; border-width: 0.3cm; border-style: solid; border-color: rgb(145, 151, 81); font-family: Raleway;"><label><h1 style="font-size: 1cm;">Login</h1><span style="text-align: center;">_____________</span><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" placeholder="Type your username" name="login_user" id="lu"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" placeholder="Type your password" id="pw" name="login_psw"><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;display:none" name="cell" placeholder="Type your cell" type="text"><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;display:none" name="email_user" placeholder="Type your cell" type="text"></label><br><br><button style="border-color:whitesmoke;border-radius: 0%; width:100px;height:50px;color:white;background-color:rgb(145 151 81) ;font-family:Arial;font-size: large;border-style:none" type="submit">Login</button></form></div>

</div>

<div id="product-selection"></div>
<div style="height:400px;background-color:white;"><h1 style="transition: background-color 0.5s, color 0.5s; text-align: center; font-family: Raleway; color: white; margin: auto; width: 100%; background-color: rgb(159, 0, 255); border-bottom-style: solid; border-bottom-color: blue;" onmouseover="this.style.backgroundColor = 'white';this.style.color = 'blue';this.style.borderBottomStyle = 'solid';this.style.borderBottomColor = 'blue'" onmouseleave="this.style.backgroundColor = '#9f00ff';this.style.color = 'white';this.style.borderBottomColor = white">For any other concerns, email us at medicator@email.com<br></h1><div style="background-color:white"><form method="POST" style="display:inline-block;margin:50px;background-color:rgb(159, 0, 255);height:100px;width:100px;border-radius:25px;" onmouseover="propChange(this,'borderRadius','0px');propChange(this,'height','120px');propChange(this,'textDecorationLine','underline')" onmouseleave="propChange(this,'borderRadius','25px');propChange(this,'height','100px');propChange(this,'textDecorationLine','none')" action="/"><input name="username" value = `+user+` style="display:none">
<input name="pasword" value = `+password+` style="display:none">

<button onmouseover="" type="submit" id="" class="main-nav-bar-form-button" style="font-size:fit-content;background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke;margin-top:30%;width:100%;">CTA
</button>

</form><form method="POST" style="display:inline-block;margin:50px;background-color:rgb(159, 0, 255);height:100px;width:100px;border-radius:25px;" onmouseover="propChange(this,'borderRadius','0px');propChange(this,'height','120px');propChange(this,'textDecorationLine','underline')" onmouseleave="propChange(this,'borderRadius','25px');propChange(this,'height','100px');propChange(this,'textDecorationLine','none')" action="/">
<input name="username" value = `+user+` style="display:none">
<input name="pasword" value = `+password+` style="display:none">
<button onmouseover="" type="submit" id="" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke;margin-top:30%;width:100%;">CTA</button>

</form><form method="POST" style="display:inline-block;margin:50px;background-color:rgb(159, 0, 255);height:100px;width:100px;border-radius:25px;" onmouseover="propChange(this,'borderRadius','0px');propChange(this,'height','120px');propChange(this,'textDecorationLine','underline')" onmouseleave="propChange(this,'borderRadius','25px');propChange(this,'height','100px');propChange(this,'textDecorationLine','none')" action="/">
<input name="username" value = `+user+` style="display:none">
<input name="pasword" value = `+password+` style="display:none">
<button onmouseover="" type="submit" id="" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke;margin-top:30%;width:100%;">CTA
</button>

</form><form method="POST" style="display:inline-block;margin:50px;background-color:rgb(159, 0, 255);height:100px;width:100px;border-radius:25px;" onmouseover="propChange(this,'borderRadius','0px');propChange(this,'height','120px');propChange(this,'textDecorationLine','underline')" onmouseleave="propChange(this,'borderRadius','25px');propChange(this,'height','100px');propChange(this,'textDecorationLine','none')" action="/">
<input name="username" value = `+user+` style="display:none">
<input name="pasword" value = `+password+` style="display:none">
<button onmouseover="" type="submit" id="" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke;margin-top:30%;width:100%;">CTA</button>

</form><form method="POST" style="display:inline-block;margin:50px;background-color:rgb(159, 0, 255);height:100px;width:100px;border-radius:25px;" onmouseover="propChange(this,'borderRadius','0px');propChange(this,'height','120px');propChange(this,'textDecorationLine','underline')" onmouseleave="propChange(this,'borderRadius','25px');propChange(this,'height','100px');propChange(this,'textDecorationLine','none')" action="/">

<button onmouseover="" type="submit" id="" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke;margin-top:30%;width:100%;">CTA</button>
<input name="username" value = `+user+` style="display:none">
<input name="pasword" value = `+password+` style="display:none">
</form><form method="POST" style="display:inline-block;margin:50px;background-color:rgb(159, 0, 255);height:100px;width:100px;border-radius:25px;" onmouseover="propChange(this,'borderRadius','0px');propChange(this,'height','120px');propChange(this,'textDecorationLine','underline')" onmouseleave="propChange(this,'borderRadius','25px');propChange(this,'height','100px');propChange(this,'textDecorationLine','none')" action="/">

<button onmouseover="" type="submit" id="" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke;margin-top:30%;width:100%;">CTA</button>

</form></div></div>

<br><br>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<div id="post-header-body-div-2" class="body-div"> 
<div class="product-images-container" id="product-images-container-1" onmouseover="this.style.borderStyle = 'solid';this.style.borderColor = '#e6eab7'" onmouseleave="this.style.borderStyle = 'none';this.style.borderColor = 'white'" style="border-style: none; border-color: white;"><h2 class="product-image-heading-2">Medical Forms</h2><div class="slide-down-div" onmouseover="slideDown()" onmouseleave="slideDown()"></div><p class="product-image-home-paragraph">Submit your medical forms to us first before creating your account.</p><h3 class="product-image-heading-3"></h3>
    <input style="display:none;" class="price" value="2"><img src="https://images.sampleforms.com/wp-content/uploads/2017/12/Emergency-Medical-Information-Form-1.jpg" class="product-images"></div>
<div class="product-images-container" id="product-images-container-2" onmouseover="this.style.borderStyle = 'solid';this.style.borderColor = '#e6eab7'" onmouseleave="this.style.borderStyle = 'none';this.style.borderColor = 'white'" style="border-style: none; border-color: white;"><h2 class="product-image-heading-2">Account Managment</h2><div class="slide-down-div" onmouseover="slideDown()" onmouseleave="slideDown()"></div><p class="product-image-home-paragraph">Manage your account through your profile page along with all of your medication related information.</p><h3 class="product-image-heading-3"></h3>
    <input style="display:none;" class="price" value="2"><img src="https://www.economiafinanzas.com/wp-content/uploads/2022/08/mejores-cuentas-online.webp" class="product-images"></div>
<div class="product-images-container" id="product-images-container-3" onmouseover="this.style.borderStyle = 'solid';this.style.borderColor = '#e6eab7'" onmouseleave="this.style.borderStyle = 'none';this.style.borderColor = 'white'" style="border-style: none; border-color: white;"><h2 class="product-image-heading-2">Drug Recommendations</h2><div class="slide-down-div" onmouseover="slideDown()" onmouseleave="slideDown()"></div><p class="product-image-home-paragraph">Using our software, we can provide you with the proper medications to treat your symptoms that won't negatively affect you with your other medications.</p><h3 class="product-image-heading-3"></h3>
    <input style="display:none;" class="price" value="2"><img src="https://www.codementum.com/images/maker/aimlmaker.png" class="product-images"></div>
<div class="product-images-container" id="product-images-container-4" onmouseover="this.style.borderStyle = 'solid';this.style.borderColor = '#e6eab7'" onmouseleave="this.style.borderStyle = 'none';this.style.borderColor = 'white'" style="border-style: none; border-color: white;"><h2 class="product-image-heading-2">Reminders</h2><div class="slide-down-div" onmouseover="slideDown()" onmouseleave="slideDown()"></div><p class="product-image-home-paragraph">Our app also reminds users to take their daily medications on a predetermined basis depending on the drug you're taking.</p><h3 class="product-image-heading-3"></h3>
    <input style="display:none;" class="price" value="2"><img src="https://media1.thehungryjpeg.com/thumbs2/ori_3591356_9p73ir53uuip8wqyeb4svl7t15biwcuhmwztailk_alarm-clock-icon.jpg" class="product-images"></div>
</div>


<div id="post-header-body-div-3" class="body-div">


    
<div onmouseover="this.style.backgroundColor = 'white';this.style.color = 'rgb(159, 0, 255)';this.style.borderStyle = 'solid';this.style.borderColor = 'rgb(159, 0, 255)'" onmouseleave="this.style.backgroundColor = 'rgb(159, 0, 255)'; this.style.color = 'white';this.style.borderStyle = 'none';this.style.borderColor = 'white'" id="home-info-1" class="home-info" style="background-color: rgb(159, 0, 255); color: white; border-style: none; border-color: white; font-family: &quot;Varela Round&quot;;">
<h2 class="secondary-headings" id="home-info-1-secondary-headings">Getting Specifications</h2>
<p>Fill out a form regarding your medical history, the drugs you take, and any new symptoms you have. 
</p>
</div>
<div onmouseover="this.style.backgroundColor = 'white';this.style.color = 'rgb(159, 0, 255)';this.style.borderStyle = 'solid';this.style.borderColor = 'rgb(159, 0, 255)'" onmouseleave="this.style.backgroundColor = 'rgb(159, 0, 255)'; this.style.color = 'white';this.style.borderStyle = 'none';this.style.borderColor = 'white'" id="home-info-2" class="home-info" style="background-color: rgb(159, 0, 255); color: white; border-style: none; border-color: white; font-family: &quot;Varela Round&quot;;">
<h2 class="secondary-headings" id="home-info-2-secondary-headings">Account Setup</h2>
<p>Once you finish the form, an account will be created for you. Your account will log all of your medications, the times you need to take them, and the quantities of the doses.
</p>
</div>
<div onmouseover="this.style.backgroundColor = 'white';this.style.color = 'rgb(159, 0, 255)';this.style.borderStyle = 'solid';this.style.borderColor = 'rgb(159, 0, 255)'" onmouseleave="this.style.backgroundColor = 'rgb(159, 0, 255)'; this.style.color = 'white'; this.style.borderStyle = 'none';this.style.borderColor = 'white'" id="home-info-3" class="home-info" style="background-color: rgb(159, 0, 255); color: white; border-style: none; border-color: white; font-family: &quot;Varela Round&quot;;">
<h2 class="secondary-headings" id="home-info-3-secondary-headings">End Result</h2>
<p>Once the account is created, you will be able to view your daily drug dosages along with recommended drugs to take and drugs to avoid.
</p></div>





<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<footer style="height:700px;position:relative;background-color:#9f00ff;">
<div style="width:49%;color:white;background-color:#e6eab7;display:inline-block">



</div>



<div>

<div id="messaging-feature" style="float:right;color:white">
<h4 style="text-align:center">Have a Question? Contact Us.</h4>
<form method="POST" id="email" action="/submit">
<h4 style="text-align:center">Type your full name in the box below.</h4>
<textarea id="sender" name="sender"></textarea>
<h4 style="text-align:center">Type your message in the box below.</h4>
<textarea id="message" name="message"></textarea>
<button id="message-button" type="submit" style="font-family:font-size:20px;color:white">Send</button>
</form>

</div>

<p style="display:inline-block;text-align:center;width:100%;font-family:Cormorant Garamond;color:white;background-color:#9f00ff">The Medicator | All Rights Reserved</p>

</div>
</footer>





</div>






</body></html>`)
	

	
	
})

app.get('/',(req,res)=>{
res.send(`
<html><head>
<link href="https://fonts.googleapis.com/css2?family=Varela+Round&amp;display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">


<style>
@media(max-width:600px){html{font-family:Raleway}#review-slider{display:none}
#post-header-body-div-1{display:none}#messaging-feature{margin:25%}#review-slider{width:100%;height:100%;visibility:visible}#start-review{width:50%;height:inherit;font-size:1em}body{font-family:Raleway}#contact-footer-div{visibility:hidden;position:fixed}#image-slider{display:none;background-color:transparent}.circle-select-buttons{display:none}
#main-nav-bar-bottom-half,.main-nav-bar-items-container{display:none}
#search_icon{position:fixed;top:10px;width:25px;right:20px}
.product-images-container{width:100%;display:block}}
@media (max-width:500px){#contact-footer-div{display:none}}
@media(max-width:400px){
.social-media-image-container{width:20px;height:20px}
.home-info{width:100%;display:block}#arrow_1,#arrow_2{width:25px;height:25px}



}

.main-nav-bar-items-container{width:33%;float:right}    
</style>
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&amp;family=Raleway:ital,wght@1,200&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@7f00..700&amp;family=Raleway:ital,wght@1,200&amp;display=swap" rel="stylesheet">

<link rel="stylesheet" href="/styles.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<script src="/functions.js" type="text/javascript">

function imageSlide(id,urlList){
var image = document.getElementById(id);
for(let i of urlList){
setTimeout(()=>{image.style.opacity = 0%;image.style.opacity = 100%;image.src = i},4000);
};
};



</script>

<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet">

<title>The Medicator: A Healthcare App</title>
</head>

<body><header id="main-header" style="height:600px;background-color:#0b4ecc"><div style="z-index:-1;background-color: #35e8fe;"><div style="z-index:1;position:absolute;top:50%;background-color:transparent;margin:auto;width:100%;height:100px"><div style="font-weight:bold;font-family:Raleway;opacity:100%;color:white;background-color:transparent"><p style="font-family:'Varela Round';top:-450px;font-size:120px;position:absolute;left:100px;width:50%"><br>The<br>Medicator</p><p style="position:absolute;right:20px;width:50%">The premier healthcare app in managing your prescriptions, writing new ones, and staying safe on medication<br></p></div></div><img style="opacity:60%;width:100%;height:100%;" src="https://harcourthealth.com/wp-content/uploads/2019/10/technology-in-healthcare.jpg"></div>
<div style="background-color:transparent;height:50%;width:100%">

<div id="main-nav-bar-top-half">
<br>

<script>
window.onload = (event) =>{
document.getElementById('search').style.width = '350px';

}


window.onclick = (event) =>{
document.getElementById('options').innerHTML = '';
var menu = document.getElementById('menu-bar') 
menu.style.width = "0px";
menu.style.height = "0px";
menu.style.fontSize = "0px"
var specialOffers = document.getElementById('special-offers');specialOffers.style.visibility = hidden;
}
  window.onload = (event) =>{
document.getElementById('search').style.width = '350px';
}
window.onclick = (event) =>{
document.getElementById('options').innerHTML = '';
}
    
var search_list = {


        }
function searchReq(){
  document.getElementById('options').innerHTML = '';
var val = document.getElementById('search').value;
var list = Object.keys(search_list);

for(let i of list){

if(i.includes(val.toUpperCase())){
    var elem = document.createElement('div');
    var a = document.createElement('a');
    var but = document.createElement('button')
    
    a.className = 'search_op';
    elem.className = 'search_op';
but.style.fontFamily = 'Raleway'
but.style.color = "white";
but.style.borderColor = "rgb(145 151 81)"
but.style.backgroundColor = "rgb(145 151 81)";
but.style.borderRadius = "10px"
but.style.fontWeight = "bold";
but.style.margin = "0px";
but.style.display = "block"
but.style.height = "50px";
but.style.width= "275px";
a.style.position = "absolute"
    elem.style.visibility = "visible";
    a.style.visibility = "visible";
    elem.style.height = "50px";
    a.style.height = "50px" 
    a.href = list[i];
	a.append(but)
    but.append(i);

    elem.appendChild(a);
    document.getElementById('options').append(elem);


}



}

}
</script>
<style>
:hover:-moz-placeholder{
    color:rgba(0, 0, 120, 0.8)
    
  } 
  
  :hover::-webkit-input-placeholder { 
    color:rgba(0, 0, 120, 0.8)}
  
  :hover:-ms-input-placeholder { 
    color:rgba(0, 0, 120, 0.8)}
  
  :hover::-moz-placeholder{ 
    color:rgba(0, 0, 120, 0.8)}
  
  
  
  
a{
text-decoration:none
}

	#options{position:absolute;z-index:1;width:50%;margin:auto;}
#search{
border-radius:25px;
font-family:Cormorant Garamond;
width:0px;
border-style:solid;
border-color:#a3b8c8;
display:inline-block;
height:50px;
text-align:center;
border-color:white;
transition:width 1s;
border-style:solid}
</style>
  

<div style=" width: 120px;position:fixed;top:10px;left:50%"><svg id="search_icon" onclick="

var width = document.getElementById('search');
if(width.style.width == '0px'){
width.style.width = '120px';
}
else{
width.style.width = '0px'}


" style="z-index:1;width:30px;height:20px;">
<circle cx="8" cy="8" stroke-width="3" stroke="black" r="6"></circle>
<polyline points="12 12 20 20 " stroke-width="3" stroke="black" fill="none"></polyline>
</svg><input placeholder="Find Out More About Us" onkeyup="" id="search" type="search" style="width: 0px;float:left"></div>

<div style="position:relative"> 
    
<div id="options"></div>
<div id="precursor"></div>
</div><br>
</div><div><svg style="height:50px;width:40px;z-index:1;position:fixed;left:15px;top:10px" onmouseover="menuStat('menu-bar')">

<polyline stroke="whitesmoke" stroke-width="4" points="0 10 40 10"></polyline>
<polyline stroke="whitesmoke" stroke-width="4" points="0 20 40 20"></polyline>
<polyline stroke="whitesmoke" stroke-width="4" points="0 30 40 30"></polyline>

</svg><div id="menu-bar" onmouseleave="menuStat('menu-bar')" style="width: 0px; height: 0px; font-size: 0px; top: 0%;">
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">About Us</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Drug Information</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Careers</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Specials</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Create Account/Login</button></a>


</div></div>


 

<nav id="main-nav-bar">

<br>

<div style="position:fixed;top:10px;right:50px">












<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-6')" style="background-color:transparent">

<form action="" method="POST" class="main-nav-bar-form" style="background-color:transparent">

<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">Medical Forms</button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span>




<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-7')" style="background-color:transparent">

<form action="" method="POST" class="main-nav-bar-form" style="background-color:transparent">

<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">Accounts</button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span><span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-8')" style="background-color:transparent">

<form action="" method="POST" class="main-nav-bar-form" style="background-color:transparent">

<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">APIs</button>

</form>
<div class="main-nav-bar-dropdown-container" style="background-color:transparent">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span><span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-9')" style="background-color:transparent">

<form action="" method="POST" class="main-nav-bar-form" style="background-color:transparent">

<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">About</button>

</form>
<div style="background-color:transparent" class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span></div>



</nav>

</div></header>
<div class="alert-item" id="special-offers" style="z-index:2;opacity:80%;background-color:black;width:80%;height:500px;right:10%;position:fixed;top:30px;margin:auto;color:white;text-align:center;visibility:hidden">
<span style="float:left;font-size:20px;font-family:Raleway;font-weight:bold" onclick="document.getElementById('special-offers').style.visibility = 'hidden'">X</span>
<h1 style="font-family:Raleway;font-size:3em">Special Offers</h1>
<div class="product-images-container" id="product-images-container-1">
  <img class="product-images">
    <h2>Product Image</h2>
  <input class="product-titles" value="Product Image">
  <br>
<span style="color:red;text-decoration:line-through
    "><p style="font-family:Helvetica;text-align:center">$100.00</p></span>
    <p>50% OFF</p><input style="display:none;" class="price" value="2">
    <label>Quantity</label><input class="select-quantity" style="
    width: 20px;
">
    <button class="buy-button">Add to Cart</button>
  </div></div>
<div class="alert-item" id="account-forms" style="z-index: 3; opacity: 0.8; background-color: rgb(75, 85, 118); width: 100%; height: 100%; position: fixed; color: white; text-align: center; top: 0px; visibility: hidden;">
<span style="float:left;font-size:20px;font-family:Raleway;font-weight:bold" onclick="document.getElementById('account-forms').style.visibility = 'hidden'">X</span>

<div id="2_dif_forms" style="border-color:rgb(145 151 81);border-style: solid;width:500px;border-width: .3cm; text-align: center;margin:auto"><button onclick="var x = document.getElementById('sgnp'); x.style.color = 'rgb(145 151 81)';x.style.backgroundColor = 'white';var c =document.getElementById('lgin'); c.style.color = 'white';c.style.backgroundColor = 'rgb(145 151 81)';var form_1 = document.getElementById('form_1');var form_2 = document.getElementById('form_2'); form_1.style.display = 'none';form_2.style.display = 'block'" id="lgin" style="border-color: whitesmoke; border-radius: 0%; width: 100px; height: 50px; background-color: white; color: rgb(145, 151, 81); font-family: Raleway; font-size: large;">Login</button><button onclick="var x = document.getElementById('lgin'); x.style.color = 'rgb(145 151 81)';x.style.backgroundColor = 'white'; var c =document.getElementById('sgnp'); c.style.color = 'white';c.style.backgroundColor = 'rgb(145 151 81)';var form_1 = document.getElementById('form_1');var form_2 = document.getElementById('form_2');form_2.style.display = 'none';form_1.style.display = 'block'" id="sgnp" style="border-color: whitesmoke; border-radius: 0%; width: 100px; height: 50px; color: white; background-color: rgb(145, 151, 81); font-family: Arial; font-size: large;">Sign up</button><form name="form_1" style="font-family:Raleway;display: block; margin: 0% 1cm 1cm; border-width: 0.3cm; border-style: solid; border-color: rgb(145, 151, 81);" action="/signup" method="post" id="form_1"><br><h1 style="font-family:Raleway;font-size: 1cm;text-align: center;">Create Account</h1><span style="text-align: center;">_____________</span><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" id="User" name="User" placeholder="Type your username" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" id="psw" name="psw" placeholder="Type your password" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" name="cell" id="cell" placeholder="Type your cell" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" name="email_user" id="email_user" placeholder="Type your email" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" name="email_psw" id="email_psw" placeholder="Type your password for your email" type="text"><br><button style="border-color:rgb(145 151 81);border-radius: 0%; width:100px;height:50px;color:white;background-color:rgb(145 151 81) ;font-family:Arial;font-size: large;border-style: none;" onclick="formCheck();" id="register" type="submit">Register</button><script>function formCheck(){var user = document.getElementById('User').value;var email,email_psw,cell,psw;psw = document.getElementById('psw').value;email =  document.getElementById('email_user').value;email_psw =  document.getElementById('email_psw').value;cell =  document.getElementById('cell').value;if((email == ""||email=="undefined")||(cell == ""||cell== "undefined")||(email_psw ==""||email_psw== "undefined")||(User == "" || User== "undefined")||(psw == ""||psw == "undefined")){document.getElementById('register').type = 'text';document.getElementById('form_1').action = '/login';alert("Please fill all fields");}}</script></form><form name="form_2" id="form_2" action="/.netlify/functions/login_sub" method="post" style="display: none; margin: 0% 1cm 1cm; border-width: 0.3cm; border-style: solid; border-color: rgb(145, 151, 81); font-family: Raleway;"><label><h1 style="font-size: 1cm;">Login</h1><span style="text-align: center;">_____________</span><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" placeholder="Type your username" name="login_user" id="lu"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" placeholder="Type your password" id="pw" name="login_psw"><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;display:none" name="cell" placeholder="Type your cell" type="text"><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;display:none" name="email_user" placeholder="Type your cell" type="text"></label><br><br><button style="border-color:whitesmoke;border-radius: 0%; width:100px;height:50px;color:white;background-color:rgb(145 151 81) ;font-family:Arial;font-size: large;border-style:none" type="submit">Login</button></form></div>

</div>

<div id="product-selection"></div>
<div style="height:400px;background-color:white;"><h1 style="transition: background-color 0.5s, color 0.5s; text-align: center; font-family: Raleway; color: white; margin: auto; width: 100%; background-color: rgb(159, 0, 255); border-bottom-style: solid; border-bottom-color: blue;" onmouseover="this.style.backgroundColor = 'white';this.style.color = 'blue';this.style.borderBottomStyle = 'solid';this.style.borderBottomColor = 'blue'" onmouseleave="this.style.backgroundColor = '#9f00ff';this.style.color = 'white';this.style.borderBottomColor = white">For any other concerns, email us at medicator@email.com<br></h1><div style="background-color:white"><form method="POST" style="display:inline-block;margin:50px;background-color:rgb(159, 0, 255);height:100px;width:100px;border-radius:25px;" onmouseover="propChange(this,'borderRadius','0px');propChange(this,'height','120px');propChange(this,'textDecorationLine','underline')" onmouseleave="propChange(this,'borderRadius','25px');propChange(this,'height','100px');propChange(this,'textDecorationLine','none')" action="/">

<button onmouseover="" type="submit" id="" class="main-nav-bar-form-button" style="font-size:fit-content;background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke;margin-top:30%;width:100%;">CTA
</button>

</form><form method="POST" style="display:inline-block;margin:50px;background-color:rgb(159, 0, 255);height:100px;width:100px;border-radius:25px;" onmouseover="propChange(this,'borderRadius','0px');propChange(this,'height','120px');propChange(this,'textDecorationLine','underline')" onmouseleave="propChange(this,'borderRadius','25px');propChange(this,'height','100px');propChange(this,'textDecorationLine','none')" action="/">

<button onmouseover="" type="submit" id="" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke;margin-top:30%;width:100%;">CTA</button>

</form><form method="POST" style="display:inline-block;margin:50px;background-color:rgb(159, 0, 255);height:100px;width:100px;border-radius:25px;" onmouseover="propChange(this,'borderRadius','0px');propChange(this,'height','120px');propChange(this,'textDecorationLine','underline')" onmouseleave="propChange(this,'borderRadius','25px');propChange(this,'height','100px');propChange(this,'textDecorationLine','none')" action="/">

<button onmouseover="" type="submit" id="" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke;margin-top:30%;width:100%;">CTA
</button>

</form><form method="POST" style="display:inline-block;margin:50px;background-color:rgb(159, 0, 255);height:100px;width:100px;border-radius:25px;" onmouseover="propChange(this,'borderRadius','0px');propChange(this,'height','120px');propChange(this,'textDecorationLine','underline')" onmouseleave="propChange(this,'borderRadius','25px');propChange(this,'height','100px');propChange(this,'textDecorationLine','none')" action="/">

<button onmouseover="" type="submit" id="" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke;margin-top:30%;width:100%;">CTA</button>

</form><form method="POST" style="display:inline-block;margin:50px;background-color:rgb(159, 0, 255);height:100px;width:100px;border-radius:25px;" onmouseover="propChange(this,'borderRadius','0px');propChange(this,'height','120px');propChange(this,'textDecorationLine','underline')" onmouseleave="propChange(this,'borderRadius','25px');propChange(this,'height','100px');propChange(this,'textDecorationLine','none')" action="/">

<button onmouseover="" type="submit" id="" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke;margin-top:30%;width:100%;">CTA</button>

</form><form method="POST" style="display:inline-block;margin:50px;background-color:rgb(159, 0, 255);height:100px;width:100px;border-radius:25px;" onmouseover="propChange(this,'borderRadius','0px');propChange(this,'height','120px');propChange(this,'textDecorationLine','underline')" onmouseleave="propChange(this,'borderRadius','25px');propChange(this,'height','100px');propChange(this,'textDecorationLine','none')" action="/">

<button onmouseover="" type="submit" id="" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke;margin-top:30%;width:100%;">CTA</button>

</form></div></div>

<br><br>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<div id="post-header-body-div-2" class="body-div"> 
<div class="product-images-container" id="product-images-container-1" onmouseover="this.style.borderStyle = 'solid';this.style.borderColor = '#e6eab7'" onmouseleave="this.style.borderStyle = 'none';this.style.borderColor = 'white'" style="border-style: none; border-color: white;"><h2 class="product-image-heading-2">Medical Forms</h2><div class="slide-down-div" onmouseover="slideDown()" onmouseleave="slideDown()"></div><p class="product-image-home-paragraph">Submit your medical forms to us first before creating your account.</p><h3 class="product-image-heading-3"></h3>
    <input style="display:none;" class="price" value="2"><img src="https://images.sampleforms.com/wp-content/uploads/2017/12/Emergency-Medical-Information-Form-1.jpg" class="product-images"></div>
<div class="product-images-container" id="product-images-container-2" onmouseover="this.style.borderStyle = 'solid';this.style.borderColor = '#e6eab7'" onmouseleave="this.style.borderStyle = 'none';this.style.borderColor = 'white'" style="border-style: none; border-color: white;"><h2 class="product-image-heading-2">Account Managment</h2><div class="slide-down-div" onmouseover="slideDown()" onmouseleave="slideDown()"></div><p class="product-image-home-paragraph">Manage your account through your profile page along with all of your medication related information.</p><h3 class="product-image-heading-3"></h3>
    <input style="display:none;" class="price" value="2"><img src="https://www.economiafinanzas.com/wp-content/uploads/2022/08/mejores-cuentas-online.webp" class="product-images"></div>
<div class="product-images-container" id="product-images-container-3" onmouseover="this.style.borderStyle = 'solid';this.style.borderColor = '#e6eab7'" onmouseleave="this.style.borderStyle = 'none';this.style.borderColor = 'white'" style="border-style: none; border-color: white;"><h2 class="product-image-heading-2">Drug Recommendations</h2><div class="slide-down-div" onmouseover="slideDown()" onmouseleave="slideDown()"></div><p class="product-image-home-paragraph">Using our software, we can provide you with the proper medications to treat your symptoms that won't negatively affect you with your other medications.</p><h3 class="product-image-heading-3"></h3>
    <input style="display:none;" class="price" value="2"><img src="https://www.codementum.com/images/maker/aimlmaker.png" class="product-images"></div>
<div class="product-images-container" id="product-images-container-4" onmouseover="this.style.borderStyle = 'solid';this.style.borderColor = '#e6eab7'" onmouseleave="this.style.borderStyle = 'none';this.style.borderColor = 'white'" style="border-style: none; border-color: white;"><h2 class="product-image-heading-2">Reminders</h2><div class="slide-down-div" onmouseover="slideDown()" onmouseleave="slideDown()"></div><p class="product-image-home-paragraph">Our app also reminds users to take their daily medications on a predetermined basis depending on the drug you're taking.</p><h3 class="product-image-heading-3"></h3>
    <input style="display:none;" class="price" value="2"><img src="https://media1.thehungryjpeg.com/thumbs2/ori_3591356_9p73ir53uuip8wqyeb4svl7t15biwcuhmwztailk_alarm-clock-icon.jpg" class="product-images"></div>
</div>


<div id="post-header-body-div-3" class="body-div">

<form><div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Please type your name(First,Last, and Middle)</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Please type your address:</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Enter your DOB</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Enter your email address:</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">What is your marital status?</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">What city do you live in?</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Ask a question</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">What state do you live in?</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">What is your zip code?</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">What is your phone number?</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Type your emergency contact.</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>
 
<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Emergency Contact Relationship</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Emergency Contact Phone Number</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">What is the name of your insurance company?</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">What Insurance Plan do you have?</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Policy Holder's Name</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Policy Holder's Employer</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Primary Care Physician</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Preferred Pharmacy</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Policy Holder's DOB</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Policy Holder's Employer's Relationship to Patient</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">PCP Phone Number</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">ID#</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>
<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Group</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div></form>
    
<div onmouseover="this.style.backgroundColor = 'white';this.style.color = 'rgb(159, 0, 255)';this.style.borderStyle = 'solid';this.style.borderColor = 'rgb(159, 0, 255)'" onmouseleave="this.style.backgroundColor = 'rgb(159, 0, 255)'; this.style.color = 'white';this.style.borderStyle = 'none';this.style.borderColor = 'white'" id="home-info-1" class="home-info" style="background-color: rgb(159, 0, 255); color: white; border-style: none; border-color: white; font-family: &quot;Varela Round&quot;;">
<h2 class="secondary-headings" id="home-info-1-secondary-headings">Getting Specifications</h2>
<p>Fill out a form regarding your medical history, the drugs you take, and any new symptoms you have. 
</p>
</div>
<div onmouseover="this.style.backgroundColor = 'white';this.style.color = 'rgb(159, 0, 255)';this.style.borderStyle = 'solid';this.style.borderColor = 'rgb(159, 0, 255)'" onmouseleave="this.style.backgroundColor = 'rgb(159, 0, 255)'; this.style.color = 'white';this.style.borderStyle = 'none';this.style.borderColor = 'white'" id="home-info-2" class="home-info" style="background-color: rgb(159, 0, 255); color: white; border-style: none; border-color: white; font-family: &quot;Varela Round&quot;;">
<h2 class="secondary-headings" id="home-info-2-secondary-headings">Account Setup</h2>
<p>Once you finish the form, an account will be created for you. Your account will log all of your medications, the times you need to take them, and the quantities of the doses.
</p>
</div>
<div onmouseover="this.style.backgroundColor = 'white';this.style.color = 'rgb(159, 0, 255)';this.style.borderStyle = 'solid';this.style.borderColor = 'rgb(159, 0, 255)'" onmouseleave="this.style.backgroundColor = 'rgb(159, 0, 255)'; this.style.color = 'white'; this.style.borderStyle = 'none';this.style.borderColor = 'white'" id="home-info-3" class="home-info" style="background-color: rgb(159, 0, 255); color: white; border-style: none; border-color: white; font-family: &quot;Varela Round&quot;;">
<h2 class="secondary-headings" id="home-info-3-secondary-headings">End Result</h2>
<p>Once the account is created, you will be able to view your daily drug dosages along with recommended drugs to take and drugs to avoid.
</p></div>





<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<footer style="height:700px;position:relative;background-color:#9f00ff;">
<div style="width:49%;color:white;background-color:#e6eab7;display:inline-block">



</div>



<div>

<div id="messaging-feature" style="float:right;color:white">
<h4 style="text-align:center">Have a Question? Contact Us.</h4>
<form method="POST" id="email" action="/submit">
<h4 style="text-align:center">Type your full name in the box below.</h4>
<textarea id="sender" name="sender"></textarea>
<h4 style="text-align:center">Type your message in the box below.</h4>
<textarea id="message" name="message"></textarea>
<button id="message-button" type="submit" style="font-family:font-size:20px;color:white">Send</button>
</form>

</div>

<p style="display:inline-block;text-align:center;width:100%;font-family:Cormorant Garamond;color:white;background-color:#9f00ff">The Medicator | All Rights Reserved</p>

</div>
</footer>





</div>






</body></html>`)})

app.use('/home',router)

module.exports.handler = serverless(app)
