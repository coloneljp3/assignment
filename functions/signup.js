'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


router.get('/',(req,res)=>{
	
})

router.post('/',(req,res)=>{
var body = (new String(req.body)).replaceAll('username=','').replaceAll('&pasword=',',').replaceAll('&medical_data=',',').replaceAll('&prescription_data=',',').split(',')
var username = body[0]
var pasword = body[1]

var medical_conditions = body[2]

var conditions = [];var z = medical_conditions.replaceAll('%7B','{').replaceAll('%2F','/').replaceAll('%25','"').replaceAll('+','%').replaceAll('%3A',':').replaceAll('%3B',';').replaceAll('%7D','}').replaceAll('%7C',',').replaceAll('%',' ').replaceAll('28','(').replaceAll('29',')')



	
var a = z.split(',');for(let i of a){i=i.replaceAll(';',',');
conditions.push(i)};conditions.pop(conditions[conditions.length-1]);for(let i=0;i<conditions.length;i++){conditions[i] = JSON.parse(conditions[i])};


var date = new Date()

var medication = body[3]
res.send(conditions)
	
	


var connect = mysql.createConnection('mysql://avnadmin:AVNS_om8uYVTBL50tPl05R_4@mysql-1e9f0822-jpbreaux225-37e4.h.aivencloud.com:25589/defaultdb?ssl-mode=REQUIRED')

connect.query(`SELECT COUNT(*) FROM Customer where username = ? AND pasword = ?`,[username,pasword],(err,result)=>{

if(result[0]["COUNT(*)"] != 0){res.send(`This account already exists.`)}

else{

connect.query(`INSERT INTO Customers(username,pasword,medical_conditions,prescription_drugs) VALUES(?,?,?,?)`,[username,pasword,conditions,medication],(err,result)=>{res.send(err,result);
var x = (`<html><head><link href="https://fonts.googleapis.com/css2?family=Varela+Round&amp;display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">

<script>
function getAdverseEffects(drug,element){
var request = new XMLHttpRequest()
request.onreadystatechange=()=>{
var adverse_reactions = JSON.parse(request.responseText)['results'][0]['adverse_reactions']
element.innerHTML = adverse_reactions


}


request.open('GET','https://api.fda.gov/drug/label.json?search='+keyword+'ef=adverse_reactions','true')

//This will be used to query the adverse effects of drugs

request.send()

}

function getDrugComponents(drug,element){
var request = new XMLHttpRequest()
request.onreadystatechange=()=>{
var active_ingredient = JSON.parse(request.responseText)['results'][0]['active_ingredient']
element.innerHTML = active_ingredient
    
}
request.open('GET','https://api.fda.gov/drug/label.json?search='+drug+'','true')
request.send()
}

function getDrugInteractions(drug,element){
var request = new XMLHttpRequest()
request.onreadystatechange=()=>{
var drug_interactions = JSON.parse(request.responseText)['results'][0]['drug_interactions']
element.innerHTML = drug_interactions

}


request.open('GET','https://api.fda.gov/drug/label.json?search='+drug+'','true')

//This will be used to find out the potentially harmful drug/drug and food/drug interactions
request.send()

}

function getIntendedUse(drug,element){
var request = new XMLHttpRequest()
request.onreadystatechange=()=>{
var resp = JSON.parse(request.responseText)["results"][0]["indications_and_usage"]
element.innerHTML = resp
}


request.open('GET','https://api.fda.gov/drug/label.json?search='+drug+'','true')

//This will be used to query information the intended use of drugs

request.send()


}


function getDailyDosage(drug,element){
var request = new XMLHttpRequest()
request.onreadystatechange=()=>{
var daily_dosage = JSON.parse(request.responseText)['results'][0]['daily_dosage']
element.innerHTML = daily_dosage
    
}
request.open('GET','https://api.fda.gov/drug/label.json?search='+drug+'','true')
request.send()
    
}for(let drug of `+medication+`){
var tr = document.createElement('tr')
var tdName = document.createElement('td')
var tdComp = document.createElement('td')
var tdAdvEff = document.createElement('td')
var tdDrInt = document.createElement('td')
var tdIntUse = document.createElement('td')
var DD = document.createElement('td')
tr.className = "drug"
tr.appendChild(tdName)
tr.appendChild(tdComp)
tr.appendChild(tdAdvEff)
tr.appendChild(tdDrInt)
tr.appendChild(tdIntUse)
tr.appendCHuld(DD)
tdName.className = 'prescription_drugs'
tdComp.className = 'drug_components'
tdAdvEff.className = 'adverse_effects'
tdDrInt.className = 'drug_interactions'
tdIntUse.className = 'intended_use'
DD.className = 'daily_dosage'
tdName.innerHTML = drug

getAdverseEffects(drug,tdAdvEff)
getDrugComponents(drug,tdComp)
getDrugInteractions(drug,tdDrInt)
getIntendedUse(drug,tdIntUse)
getDailyDosage(drug,DD)
    prescription_drugs_table.appendChild(tr)}
</script>
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
</svg><input placeholder="Find Out More About Us" onkeyup="" id="search" type="search" style="width: 350px; float: left;"></div>

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
<input name="username" value="undefined" style="display:none">
<input name="pasword" value="undefined" style="display:none">
<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">Medical Forms</button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span>




<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-7')" style="background-color:transparent">

<form action="" method="POST" class="main-nav-bar-form" style="background-color:transparent">
<input name="username" value="undefined" style="display:none">
<input name="pasword" value="undefined" style="display:none">
<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">Accounts</button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span><span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-8')" style="background-color:transparent">

<form action="" method="POST" class="main-nav-bar-form" style="background-color:transparent">
<input name="username" value="undefined" style="display:none">
<input name="pasword" value="undefined" style="display:none">
<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">APIs</button>

</form>
<div class="main-nav-bar-dropdown-container" style="background-color:transparent">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span><span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-9')" style="background-color:transparent">

<form action="" method="POST" class="main-nav-bar-form" style="background-color:transparent">
<input name="username" value="undefined" style="display:none">
<input name="pasword" value="undefined" style="display:none">
<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">About</button>

</form>
<div style="background-color:transparent" class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span></div>



</nav>

</div></header>
</body><body><header id="main-header" style="height:600px;background-color:#0b4ecc"><div style="z-index:-1;background-color: #35e8fe;"><div style="z-index:1;position:absolute;top:50%;background-color:transparent;margin:auto;width:100%;height:100px"><div style="font-weight:bold;font-family:Raleway;opacity:100%;color:white;background-color:transparent"><p style="font-family:'Varela Round';top:-450px;font-size:120px;position:absolute;left:100px;width:50%"><br>The<br>Medicator</p><p style="position:absolute;right:20px;width:50%">The premier healthcare app in managing your prescriptions, writing new ones, and staying safe on medication<br></p></div></div><img style="opacity:60%;width:100%;height:100%;" src="https://harcourthealth.com/wp-content/uploads/2019/10/technology-in-healthcare.jpg"></div>
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
</svg><input placeholder="Find Out More About Us" onkeyup="" id="search" type="search" style="width: 350px; float: left;"></div>

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
<input name="username" value="undefined" style="display:none">
<input name="pasword" value="undefined" style="display:none">
<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">Medical Forms</button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span>




<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-7')" style="background-color:transparent">

<form action="" method="POST" class="main-nav-bar-form" style="background-color:transparent">
<input name="username" value="undefined" style="display:none">
<input name="pasword" value="undefined" style="display:none">
<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">Accounts</button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span><span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-8')" style="background-color:transparent">

<form action="" method="POST" class="main-nav-bar-form" style="background-color:transparent">
<input name="username" value="undefined" style="display:none">
<input name="pasword" value="undefined" style="display:none">
<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">APIs</button>

</form>
<div class="main-nav-bar-dropdown-container" style="background-color:transparent">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span><span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-9')" style="background-color:transparent">

<form action="" method="POST" class="main-nav-bar-form" style="background-color:transparent">
<input name="username" value="undefined" style="display:none">
<input name="pasword" value="undefined" style="display:none">
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

<div id="profile-container" style="height:700px;font-family:Raleway"><div id="image-container" style="display:inline-block;padding-right:40px"><img id="profile-picture" style="background-color:red;box-shadow: 0 200px #f55353 inset;border-radius:200px;width:200px;height:200px;opacity:40%;top:0px" src="/pic_1.jpg"><h4 style="text-align:center">John Doe</h4></div><div id="profile-info" style="float:right;display:inline-block">
<div class="profile-data-unit" style="" id="profile-name" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Profile Name</h2><h4 class="h4_styles">John Smith</h4></div>





<div class="profile-data-unit" style="" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Account Created</h2><h4 class="h4_styles">January 15, 2025</h4></div><div class="profile-data-unit" style="" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Current Prescriptions</h2><div id = "current_prescriptions"></div></div><div class="profile-data-unit" style="" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Medical Conditions</h2><div><div id = "medical_conditions"></div>



</div>
</div></div></div><body><script>

function getDrugsFromAPI(id){
var request = new XMLHttpRequest();
request.onreadystatechange=()=>{
var alldrugs = JSON.parse(request.responseText)["results"]
var alldrugs2 = []
for(let i of alldrugs){
alldrugs2.push(i['term'])
    
}
    document.getElementById(id).innerHTML = alldrugs2

}

request.open('GET','https://api.fda.gov/drug/label.json?count=openfda.brand_name.exact&limit=1000','true')

//This will be used to query information about medical conditions
request.send()
 
}getDrugsFromAPI('alldrugs')
function createDrugInfoRow(drug_name,root_element){
var tr = document.createElement('tr')
var tdName = document.createElement('input')
var tdComp = document.createElement('input')
var tdAdvEff = document.createElement('input')
var tdDrInt = document.createElement('input')
var tdIntUse = document.createElement('input')
tr.className = "drug"
tr.appendChild(tdName)
tr.appendChild(tdComp)
tr.appendChild(tdAdvEff)
tr.appendChild(tdDrInt)
tr.appendChild(tdIntUse)
tdName.className = 'prescription_drugs'
tdComp.className = 'drug_components'
tdAdvEff.className = 'adverse_effects'
tdDrInt.className = 'drug_interactions'
tdIntUse.className = 'intended_use'
tdName.value = drug_name

getAdverseEffects(drug_name,tdAdvEff)
getDrugComponents(drug_name,tdComp)
getDrugInteractions(drug_name,tdDrInt)
getIntendedUse(drug_name,tdIntUse)
}

function getMedicalInfo(medical_condition){
var request = new XMLHttpRequest()
var synonyms;
request.onreadystatechange=()=>{
synonyms = JSON.parse(request.responseText)
}
request.open('GET','https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms='+keyword+'','true')

//This will be used to query information about medical conditions

request.send()


}

function getAdverseEffects(drug,element){
var request = new XMLHttpRequest()
request.onreadystatechange=()=>{
var adverse_reactions = JSON.parse(request.responseText)['results'][0]['adverse_reactions']
element.innerHTML = adverse_reactions


}


request.open('GET','https://api.fda.gov/drug/label.json?search='+drug+'ef=adverse_reactions','true')

//This will be used to query the adverse effects of drugs

request.send()

}

function getDrugComponents(drug,element){
var request = new XMLHttpRequest()
request.onreadystatechange=()=>{
var active_ingredient = JSON.parse(request.responseText)['results'][0]['active_ingredient']
element.innerHTML = active_ingredient
    
}
request.open('GET','https://api.fda.gov/drug/label.json?search='+drug+'','true')
request.send()
}

function getDrugInteractions(drug,element){
var request = new XMLHttpRequest()
request.onreadystatechange=()=>{
var drug_interactions = JSON.parse(request.responseText)['results'][0]['drug_interactions']
element.innerHTML = drug_interactions

}


request.open('GET','https://api.fda.gov/drug/label.json?search='+drug+'','true')

//This will be used to find out the potentially harmful drug/drug and food/drug interactions
request.send()

}

function getIntendedUse(drug,element){
var request = new XMLHttpRequest()
request.onreadystatechange=()=>{
var resp = JSON.parse(request.responseText)["results"][0]["indications_and_usage"]
element.innerHTML = resp
}


request.open('GET','https://api.fda.gov/drug/label.json?search='+drug+'','true')

//This will be used to query information the intended use of drugs

request.send()


}

var prescription_drugs_table = document.getElementById('prescription_drugs_table');
for(let drug of ['naltrexone']){
var tr = document.createElement('tr')
var tdName = document.createElement('td')
var tdComp = document.createElement('td')
var tdAdvEff = document.createElement('td')
var tdDrInt = document.createElement('td')
var tdIntUse = document.createElement('td')
tr.className = "drug"
tr.appendChild(tdName)
tr.appendChild(tdComp)
tr.appendChild(tdAdvEff)
tr.appendChild(tdDrInt)
tr.appendChild(tdIntUse)
tdName.className = 'prescription_drugs'
tdComp.className = 'drug_components'
tdAdvEff.className = 'adverse_effects'
tdDrInt.className = 'drug_interactions'
tdIntUse.className = 'intended_use'
tdName.innerHTML = drug

getAdverseEffects(drug,tdAdvEff)
getDrugComponents(drug,tdComp)
getDrugInteractions(drug,tdDrInt)
getIntendedUse(drug,tdIntUse)
    prescription_drugs_table.appendChild(tr)}

function miniComp(arg1,arg2){
var res=false;
var keywords = ['this','these','the','an','a','am',
'may','is','are','was','were','be','being','been','seem','appear','become','look','sound','feel','taste','remain','stay','grow','turn','prove','get','come','go','sound','look','prove']
arg1 = arg1.split(' ')
arg2=arg2.split(' ')
console.log(arg1,arg2)
    for(let i of arg1){
        if(keywords.includes(i.toLowerCase())||keywords.includes(i.toUpperCase())){
                        arg1.splice(arg1.indexOf(i))         
        }
        
    }

    for(let i of arg2){
        if(keywords.includes(i)){
            arg2.slice(arg2.indexOf(i))
            
        }
        
    }
for(let i of arg1){
if(arg2.includes(i)){
    res = true
    break
}
else{continue}
    
    
}
    return res
};

function recommendationDrug(id_of_element_for_total_drugs,negative_interactions,og_intended_use,negative_drug_components){
var drugs = document.getElementById(id_of_element_for_total_drugs).innerHTML.split('  ')
var new_drug;
for(let i of drugs){
let interactions = document.getElementById('total_drug_interactions')
let intended_use = document.getElementById('total_intended_use')
let drug_components = document.getElementById('total_drug_components')
getDrugInteractions(i,interactions)
getIntendedUse(i,intended_use)
getDrugComponents(i,drug_components)
//set all of the positional arguments to lists separated using periods and use keywords such as warning, hazard, etc. to associate values 

if(!(miniComp(interactions.innerHTML,negative_interactions))&& miniComp(intended_use.innerHTML,og_intended_use.innerHTML) && !(miniComp(drug_components.innerHTML,negative_drug_components.innerHTML))){
    new_drug = i
    break
}
else{continue}

    
}
return new_drug    
}
function compareDrugs(medical_conditions){
var drugs = []
for(let i of document.getElementsByClassName('prescription_drugs')){
    drugs.push(i.innerHTML)
}
let issues = {}
for(i=0;i<=drugs.length;i++){
let interactions = document.getElementsByClassName('drug_interactions')[i]
let intended_use = document.getElementsByClassName('intended_use')[i]
let drug_components = document.getElementsByClassName('drug_components')[i]
for(let drug of drugs.slice(i+1,drugs.length)){
if((drug_components.innerHTML).includes(drug.toUpperCase())|| (drug_components.innerHTML).includes(drug.toLowerCase()) || (interactions.innerHTML).includes(drug.toUpperCase())||(interactions.innerHTML).includes(drug.toLowerCase())){

issues[i] = "This prescription may cause harm if combined with " +drug+". Instead, you should use this drug, "+recommendationDrug('alldrugs',interactions,intended_use,drug_components)
}

for(let a of medical_conditions){
var a_list = []
var adverseEffects = document.getElementById('adverse_effects').innerHTML
if(adverseEffects.includes(a)){
a_list.push(a)
}
issues[i]+=",This  prescription may worsen the following medical conditions" + a

}
    
}


}

if(a_list.length ==0){
issues = "No issues with any of the drugs."
    
}
document.getElementById('drug_issues').innerHTML = issues
};
compareDrugs(['cancer'])
displayAllPersonalDrugInformation(['Ibuprofen','Naltrexone'],'prescription_drugs_table')

</script>

    <p id="alldrugs"></p>
    <p id="adverse_effects"></p>
    <table id="medical_conditions_table">
      

        
    </table>
    <table id="prescription_drugs_table"></table>
    <p id="total_drug_interactions">undefined</p><p id="total_drug_components">ACTIVE INGREDIENT SILICEA HPUS 2X and higher</p><p id="total_intended_use">INDICATIONS Condition listed above or as directed by the physician</p><p id="issues"></p>
    <input style="font-size:20px;border-style:none;border-bottom-style:solid;font-family:Helvetica
    " placeholder="Enter your prescription" id="input_drug">
<button style="width:200px;height:40px;font-size:20px;border-style:none;border-bottom-style:solid;font-family:Helvetica" onclick="createDrugInfoRow(document.getElementById('input_drug').value,'prescription_drugs_table');function miniComp(arg1,arg2){
var res=false;
var keywords = ['this','these','the','an','a','am',
'may','is','are','was','were','be','being','been','seem','appear','become','look','sound','feel','taste','remain','stay','grow','turn','prove','get','come','go','sound','look','prove']
arg1 = arg1.split(' ');
arg2= new String(arg2).split(' ')
    for(let i of arg1){
        if(keywords.includes(i.toLowerCase())||keywords.includes(i.toUpperCase())){
                        arg1.splice(arg1.indexOf(i))         
        }
        
    }

    for(let i of arg2){
        if(keywords.includes(i)){
            arg2.slice(arg2.indexOf(i))
            
        }
        
    }
for(let i of arg1){
if(arg2.includes(i)){
    res = true
    break
}
else{continue}
    
    
};console.log(arg1,arg2)
    return res
};

function recommendationDrug(id_of_element_for_total_drugs,negative_interactions,og_intended_use,negative_drug_components){
var drugs = document.getElementById(id_of_element_for_total_drugs).innerHTML.split('  ')
var new_drug;
for(let i of drugs){
let interactions = document.getElementById('total_drug_interactions')
let intended_use = document.getElementById('total_intended_use')
let drug_components = document.getElementById('total_drug_components')
getDrugInteractions(i,interactions)
getIntendedUse(i,intended_use)
getDrugComponents(i,drug_components)
//set all of the positional arguments to lists separated using periods and use keywords such as warning, hazard, etc. to associate values 

if(!(miniComp(interactions.innerHTML,negative_interactions))&amp;&amp; miniComp(intended_use.innerHTML,og_intended_use.innerHTML) &amp;&amp; !(miniComp(drug_components.innerHTML,negative_drug_components.innerHTML))){
    new_drug = i
    break
}
else{continue}

    
}
return new_drug    
};
function compareDrugs(medical_conditions){
var drugs = []
for(let i of document.getElementsByClassName('prescription_drugs')){
    drugs.push(i.innerHTML)
}
let issues = {}
for(i=0;i<=drugs.length;i++){
let interactions = document.getElementsByClassName('drug_interactions')[i]
let intended_use = document.getElementsByClassName('intended_use')[i]
let drug_components = document.getElementsByClassName('drug_components')[i]
for(let drug of drugs.slice(i+1,drugs.length)){
if((drug_components.innerHTML).includes(drug.toUpperCase())|| (drug_components.innerHTML).includes(drug.toLowerCase()) || (interactions.innerHTML).includes(drug.toUpperCase())||(interactions.innerHTML).includes(drug.toLowerCase())){

issues[i] = 'this prescription may cause  harm  if  combined with='+drug' ">Enter
</button>
<div>
    <h1>Drug Issues</h1>
    <p id="drug_issues">No issues with any of the drugs.</p>
    <h1 style="font-family:Helvetica">Look at the recommendations below
</h1><p id="drug_suggestions"></p></div>
</body>
    <br><style>
.profile-data-unit{
    display:block;border-radius:25px;height:200px;box-shadow: 1px 1px 1px 1px gray;width:49%;display:inline-block
}

    .past-product-item{display:block
    }.h2_styles{background-color:#f6f6f6};.h4_styles{background-color:whitesmoke}
</style>

<br>
</body></html>`)})}})})

app.use('/.netlify/functions/signup',router)
module.exports.handler = serverless(app)
