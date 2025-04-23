'use strict'
const express = require('express')
const mysql = require('mysql2')
const app = express()
const router = express.Router()
const serverless = require('serverless-http')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',(req,res)=>{
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



























<div><h1 style="text-align:center;font-family:Varela Round;color:rgb(159, 0, 255)">Medical Patient Information Form</h1></div><div id="post-header-body-div-3" class="body-div">

<form style="font-family:Varela Round">
    

<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">First Name</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div>

















 























<div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Last Name</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div><div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Middle Initial</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div><div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Email Address</label><input class="sub-parent-form-inputs" placeholder="Type an answer"></div><div class="parent-form"><h2 class="sub-parent-form">Medical History</h2><label class="sub-parent-form-label"></label></div><table>
<tbody><tr>
    <td>Illness</td>
    <td>Date of Diagnosis</td>
    <td>Date of Recovery(if no, type N/A)</td>
    <td>Comments</td>

</tr>
    <tr>
    <td>Alcoholism/Drug Abuse</td>
    <td><input name="alc_drug_start" class="" placeholder="Type date of diagnosis"></td>
    <td><input name="alc_drug_end" class="" placeholder="Type in date of recovery"></td>
	<td><input name = "alc_drug_comments" class = ""></td>
</tr>
<tr>
    <td>Asthma</td>
    <td><input name="asthma_start" class="" placeholder="Type date of diagnosis"></td>
    <td><input name="asthma_end" class="" placeholder="Type in date of recovery"></td>
<td><input name = "asthma_comments" class = ""></td>

</tr>
<tr>
    <td>Cancer(type:)</td>
    <td><input name="cancer_start" class="" placeholder="Type date of diagnosis"></td>
    <td><input name="cancer_end" class="" placeholder="Type in date of recovery"></td>
<td><input name = "cancer_comments" class = ""></td>

</tr>
<tr>
    <td>Depression/Anxiety/Bipolar/Suicidal</td>
    <td><input name="dep_anx_start" class="" placeholder="Type date of diagnosis"></td>
    <td><input name="dep_anx_end" class="" placeholder="Type in date of recovery"></td>
	<td><input name = "dep_anx_comments" class = ""></td>

</tr>
    <tr>
    <td>Diabetes</td>
    <td><input name="diab_start" class="" placeholder="Type date of diagnosis"></td>
    <td><input name="diab_end" class="" placeholder="Type in date of recovery"></td>
    <td><input name = "diab_comments" class = ""></td>

</tr>
    <tr>
    <td>Emphysema(COPD)</td>
    <td><input name="copd_start" class="" placeholder="Type date of diagnosis"></td>
    <td><input name="copd_end" class="" placeholder="Type in date of recovery"></td>
    <td><input name = "copd_comments" class = ""></td>

</tr>
    <tr>
    <td>Heart Disease</td>
    <td><input name="heart_d_start" class="" placeholder="Type date of diagnosis"></td>
    <td><input name="heart_d_end" class="" placeholder="Type in date of recovery"></td>
    <td><input name = "heart_d_comments" class = ""></td>

</tr>
    <tr>
    <td>Hypertension(High Blood Pressure)</td>
    <td><input name="HBP_start" class="" placeholder="Type date of diagnosis"></td>
    <td><input name="HBP_end" class="" placeholder="Type in date of recovery"></td>
	<td><input name = "HBP_comments" class = ""></td>

</tr>
    <tr>
    <td>High Cholesterol</td>
    <td><input name="hcholesterol_start" class="" placeholder="Type date of diagnosis"></td>
    <td><input name="hcholesterol_end" class="" placeholder="Type in date of recovery"></td>
    <td><input name = "hcholesterol_comments" class = ""></td>

</tr>
    <tr>
    <td>Hypothyroidism/Thyroid Disease</td>
    <td><input name="thy_d_start" class="" placeholder="Type date of diagnosis"></td>
    <td><input name="thy_d_end" class="" placeholder="Type in date of recovery"></td>
<td><input name = "thy_d_comments" class = ""></td>

</tr>
    <tr>
    <td>Renal(kidney) Disease</td>
    <td><input name="ren_d_start" class="" placeholder="Type date of diagnosis"></td>
    <td><input name="ren_d_end" class="" placeholder="Type in date of recovery"></td>
     <td><input name = "ren_d_comments" class = ""></td>

</tr>
    <tr>
    <td>Migraine Headaches</td>
    <td><input name="migraine_start" class="" placeholder="Type date of diagnosis"></td>
    <td><input name="migraine_end" class="" placeholder="Type in date of recovery"></td>
    <td><input name = "migraine_comments" class = ""></td>

</tr>
   
</tbody></table><button onclick="function addField(form_id,input_clas,name_of_field){
    var elem = document.getElementById(form_id)
    var inp = document.createElement('input');console.log(inp.class);inp.class = input_clas;
  	var total_inp = document.getElementsByClassName(input_clas);
    ;inp.name = name_of_field +(total_inp.length+1);
    elem.appendChild(inp)
    };addField('form','form_inputs','pasword')">Add another illness</button><div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Symptoms</label><input class="sub-parent-form-inputs" placeholder="enter symptoms" name="symptoms"></div><div class="parent-form"><h2 class="sub-parent-form"></h2><label class="sub-parent-form-label">Current Medication:</label><input class="sub-parent-form-inputs" placeholder="Type an answer" style="display:block" name="drug_1"><input class="sub-parent-form-inputs" placeholder="Type an answer" style="display:block" name="drug_2"><input class="sub-parent-form-inputs" placeholder="Type an answer" style="display:block" name="drug_3"><input class="sub-parent-form-inputs" placeholder="Type an answer" style="display:block" name="drug_4"></div><button onclick="function addField(form_id,input_clas,name_of_field){
    var elem = document.getElementById(form_id)
    var inp = document.createElement('input');console.log(inp.class);inp.class = input_clas;
  	var total_inp = document.getElementsByClassName(input_clas);
    ;inp.name = name_of_field +(total_inp.length+1);
    elem.appendChild(inp)
    };addField('form','form_inputs','pasword')">Add another drug</button></form>
    
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








</body></html>
`)
	
})

app.use('/medical-forms',router)
module.exports.handler = serverless(app)
