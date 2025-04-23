'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));



app.use('/',(req,res)=>{
var login = req.body.login

var username = req.body.username
var pasword = req.body.pasword
var records = req.body
var full_name = records.full_name
var address = records.address
var dob = records.DOB
var email_address = records.email_address
var marital_status = records.marital_status
var city = records.city
var ask_a_question = records.ask_a_question
var state = records.state
var zip_code = records.zip_code
var phone_number = records.phone_number
var emergency_contact = records.emergency_contact
var emergency_contact_relationship = records.emergency_contact_relationship

var connect = mysql.createConnection(process.env.DATABASE_URL)

if(login){
connect.query(`SELECT * FROM CUSTOMERS where username = ? AND pasword = ?`,[username,pasword],(err,results)=>{
if(results.length == 0){res.send(`This account doesn't exist. You need to create an account first`)}

else{
res.send(`<html><head><link href="https://fonts.googleapis.com/css2?family=Varela+Round&amp;display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com">
<header id="main-header" style="height:600px;background-color:#0b4ecc"><div style="z-index:-1;background-color: #35e8fe;"><div style="z-index:1;position:absolute;top:50%;background-color:transparent;margin:auto;width:100%;height:100px"><div style="font-weight:bold;font-family:Raleway;opacity:100%;color:white;background-color:transparent"><p style="font-family:'Varela Round';top:-450px;font-size:120px;position:absolute;left:100px;width:50%"><br>The<br>Medicator</p><p style="position:absolute;right:20px;width:50%">The premier healthcare app in managing your prescriptions, writing new ones, and staying safe on medication<br></p></div></div><img style="opacity:60%;width:100%;height:100%;" src="https://harcourthealth.com/wp-content/uploads/2019/10/technology-in-healthcare.jpg"></div>
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
<style>
.profile-data-unit{
    display:block;border-radius:25px;height:200px;box-shadow: 1px 1px 1px 1px gray;width:49%;display:inline-block
}

    .past-product-item{display:block
    }.h2_styles{background-color:#f6f6f6};.h4_styles{background-color:whitesmoke}
</style>

</head><body><div id="profile-container" style="height:700px;font-family:Raleway"><div id="image-container" style="display:inline-block;padding-right:40px"><img id="profile-picture" style="background-color:red;box-shadow: 0 200px #f55353 inset;border-radius:200px;width:200px;height:200px;opacity:40%;top:0px" src="/pic_1.jpg"><h4 style="text-align:center">John Doe</h4></div><div id="profile-info" style="float:right;display:inline-block">
<div class="profile-data-unit" style="" id="profile-name" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Profile Name</h2><h4 class="h4_styles">John Smith</h4></div>





<div class="profile-data-unit" style="" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Account Created</h2><h4 class="h4_styles">January 15, 2025</h4></div><div class="profile-data-unit" style="" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Email</h2><h4 class="h4_styles" style="">johnsmith@gmail.com</h4></div><div class="profile-data-unit" style="" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Medical Information</h2><div><h3>Medical Conditions</h3>
<ol id="medical_conditions" style="font-family:Varela Round">
<div><input value="Cancer" name="medical_condition_1" style="border-style:none;border-bottom-style:solid;font-size:20px"><button style="font-size:20px;border-style:none;background-color:transparent">&gt;</button>
    <ol style="width:0%;height:0%;visibility:hidden" id="cancer_attr_list"><li style="width:inherit;height:inherit">Symptoms<ol>
    <li style="width:inherit;height:inherit">Nausea</li>
    <li style="width:inherit;height:inherit">Vomiting</li>
    <li style="width:inherit;height:inherit">Disorientation</li>
    <li style="width:inherit;height:inherit">Hair Loss</li>


</ol></li>
<li style="width:inherit;height:inherit">Treatments</li>
<li style="width:inherit;height:inherit;"><ol style="width:inherit;height:inherit">
<li style="width:inherit;height:inherit">Chemotherapy</li>
</ol></li></ol></div>

</ol>
<h3>Current Prescriptions</h3>
<ol id="current_prescriptions">
<table>
    <tbody><tr><td>Drug</td><td>Side Effects</td><td>Description</td><td>Drug Experience</td></tr>
    <tr><td><li><input value="Naltrexone" name="prescrip_1"></li></td><td><input value="Nausea"></td><td></td><td><input name="" value="It helps with addiction"></td></tr>

<tr><td><li><input value="Naltrexone" name="prescrip_1"></li></td><td><input value="Nausea"></td><td></td><td><input name="" value="It helps with addiction"></td></tr><tr><td><li><input value="Naltrexone" name="prescrip_1"></li></td><td><input value="Nausea"></td><td></td><td><input name="" value="It helps with addiction"></td></tr><tr><td><li><input value="Naltrexone" name="prescrip_1"></li></td><td><input value="Nausea"></td><td></td><td><input name="" value="It helps with addiction"></td></tr></tbody></table>
</ol>
</div>
</div></div></div><div><h2>Drug Suggestions</h2>
    
    <p>-Ex. Ibuprofen and Tylenol are redundant
    - Too high of ibuprofen can cause stomach bleeding, which you may be more succeptible to because of stomach surgery
    </p></div><button onclick="function addField(form_id,input_clas,name_of_field){
    var elem = document.getElementById(form_id)
    var inp = document.createElement('input');console.log(inp.class);inp.class = input_clas;
  	var total_inp = document.getElementsByClassName(input_clas);
    ;inp.name = name_of_field +(total_inp.length+1);
    elem.appendChild(inp)
    };addField('form','form_inputs','pasword')">Add another illness</button>
    <button onclick="function addField(form_id,input_clas,name_of_field){
    var elem = document.getElementById(form_id)
    var inp = document.createElement('input');console.log(inp.class);inp.class = input_clas;
  	var total_inp = document.getElementsByClassName(input_clas);
    ;inp.name = name_of_field +(total_inp.length+1);
    elem.appendChild(inp)
    };addField('form','form_inputs','pasword')">Add another drug</button><div><h2>Drug Experiences</h2>
</div><br></body></html>`)
  
}
  
})
  
}
else{

  connect.query(`SELECT * FROM CUSTOMERS where username = ? OR pasword = ?`,[username,pasword],(err,results)=>{
if(results.length ==0){
connect.query(`INSERT INTO Customers VALUES(?,?)`,[username,pasword],(err,results)=>{
res.send(`<style>
.profile-data-unit{
    display:block;border-radius:25px;height:200px;box-shadow: 1px 1px 1px 1px gray;width:49%;display:inline-block
}

    .past-product-item{display:block
    }.h2_styles{background-color:#f6f6f6};.h4_styles{background-color:whitesmoke}
</style>

<div id="profile-container" style="height:700px;font-family:Raleway"><div id="image-container" style="display:inline-block;padding-right:40px"><img id="profile-picture" style="background-color:red;box-shadow: 0 200px #f55353 inset;border-radius:200px;width:200px;height:200px;opacity:40%;top:0px" src="/pic_1.jpg"><h4 style="text-align:center">John Doe</h4></div><div id="profile-info" style="float:right;display:inline-block">
<div class="profile-data-unit" style="" id="profile-name" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Profile Name</h2><h4 class="h4_styles">John Smith</h4></div>





<div class="profile-data-unit" style="" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Account Created</h2><h4 class="h4_styles">January 15, 2025</h4></div><div class="profile-data-unit" style="" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Email</h2><h4 class="h4_styles" style="">johnsmith@gmail.com</h4></div><div class="profile-data-unit" style="" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Product Purchase History</h2>
</div></div></div><br>`)
  
})
  
}
    
  })
  
}




  

  


  
})

app.use('/.netlify/functions/account-page',router)
module.exports.handler = serverless(app)
