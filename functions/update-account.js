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
//This will be used for medical conditions
var conditions = [];var z = (medical_conditions).replaceAll('%7B','{').replaceAll('%2F','/').replaceAll('%25','"').replaceAll('+','%').replaceAll('%3A',':').replaceAll('%3B',';').replaceAll('%7D','}').replaceAll('%7C',',').replaceAll('%',' ').replaceAll('%','"').replaceAll('28','(').replaceAll('29',')').replaceAll('|',',').split(',')
z.pop(z.length-1)
for(let i = 0;i<z.length;i++){z[i] = z[i].replaceAll(';',',')}
var disease_list = [];var start_list = []; var end_list = [];for(let i of z){i=JSON.parse(i);disease_list.push(i.disease);start_list.push(i.start);end_list.push(i.end)}
//This will be used for medical conditions
var medication = body[3]
var new_medication = medication.replaceAll("%3B",",").split(',');
var drug_list = []
for(let i of new_medication){
drug_list.push(i)};drug_list.pop()
for(let i of disease_list){
	i = JSON.stringify(i)
}
for(let i of start_list){
	i = JSON.stringify(i)
}
for(let i of end_list){
	i = JSON.stringify(i)
}
var connect = mysql.createConnection('mysql://avnadmin:AVNS_om8uYVTBL50tPl05R_4@mysql-1e9f0822-jpbreaux225-37e4.h.aivencloud.com:25589/defaultdb?ssl-mode=REQUIRED')

connect.query(`SELECT COUNT(*) FROM Customer where username = ? AND pasword = ?`,[username,pasword],(err,result)=>{
if(result[0]["COUNT(*)"] != 0){res.send(`This account already exists.`)}

else{

connect.query(`UPDATE Customers SET pasword=?, medical_conditions=?,prescription_drugs=? WHERE username =?`,[pasword,medical_conditions,medication,username],(err,result)=>{
res.send(`<html><head><link href="https://fonts.googleapis.com/css2?family=Varela+Round&amp;display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>.drug_components,.adverse_effects,.drug_interactions,.intended_use{font-size:0px};.prescription_drugs{font-family:Helvetica;font-size:20px;}</style>
<script>window.onload=>(event)=>{
window.alert('test')
var disease_list = [`+disease_list+`];
var start_list = [`+start_list+`];
var end_list = [`+end_list+`];    
var element = document.getElementById('medical_info_table')
;for(let i=1;i< disease_list.length,i++){
var tr = document.createElement('tr')
var disease = document.createElement('td')
var start = document.createElement('td')
var end = document.createElement('td')
disease.innerHTML = disease_list[i]
start.innerHTML = start_list[i]
end.innerHTML = end_list[i]
disease.className = 'diseases'
start.className = 'starts'
end.className = 'ends'

tr.appendChild(disease)
tr.appendChild(start)
tr.appendChild(end)
element.appendChild(tr)

}}</script>
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
<input name="username" value="`+username+`"style="display:none">
<input name="pasword" value="`+pasword+`" style="display:none">
<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">Medical Forms</button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span>




<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-7')" style="background-color:transparent">

<form action="/.netlify/functions/account-page" method="POST" class="main-nav-bar-form" style="background-color:transparent">
<input name="username" value="`+username+`"style="display:none">
<input name="pasword" value="`+pasword+`" style="display:none">
<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">Accounts</button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span><span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-9')" style="background-color:transparent">

<form action="/.netlify/functions/home" method="POST" class="main-nav-bar-form" style="background-color:transparent">
<input name="username" value="`+username+`"style="display:none">
<input name="pasword" value="`+pasword+`" style="display:none">
<button onmouseover="" type="submit" id="home-button" class="main-nav-bar-form-button" style="background-color:transparent;font-family:Helvetica;font-weight:lighter;color:whitesmoke">About</button>

</form>
<div style="background-color:transparent" class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">





</div>

</div>
</span></div>



</nav>

</div></header>
</body><body>


<style>
.profile-data-unit{
    display:block;border-radius:25px;height:200px;box-shadow: 1px 1px 1px 1px gray;width:49%;display:inline-block
}

    .past-product-item{display:block
    }.h2_styles{background-color:#f6f6f6};.h4_styles{background-color:whitesmoke}
</style>

<div id="profile-container" style="height:700px;font-family:Raleway"><div id="image-container" style="display:inline-block;padding-right:40px"><img id="profile-picture" style="background-color:red;box-shadow: 0 200px #f55353 inset;border-radius:200px;width:200px;height:200px;opacity:40%;top:0px" src="/pic_1.jpg"><h4 style="text-align:center">`+username+`</h4></div><div id="profile-info" style="float:right;display:inline-block">
<div class="profile-data-unit" style="" id="profile-name" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Profile Name</h2><h4 class="h4_styles">`+username+`</h4></div>




<div class="profile-data-unit" style="" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Current Prescriptions</h2><div id = "current_prescriptions">`+drug_list+`</div></div><div class="profile-data-unit" style="" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')">
<h2 class="h2_styles">Medical Conditions</h2><div><div id = "conditions">`+disease_list+`</div>



</div>
</div></div></div><body>

    
    <table id="medical_info_table">
      

        
    </table>
    <table id="prescription_drugs_table">
    
    </table>
    <p id="total_drug_interactions"></p><p id="total_drug_components"></p><p id="total_intended_use"></p><p id="issues"></p>
     <input style="font-size:20px;border-style:none;border-bottom-style:solid;font-family:Helvetica" placeholder="Enter your prescription" id="drug_1"><input style="font-size:20px;border-style:none;border-bottom-style:solid;font-family:Helvetica
    " placeholder="Enter a prescription" id="drug_2">
<button style="width:200px;height:40px;font-size:20px;border-style:none;border-bottom-style:solid;font-family:Helvetica" onclick=" var drug_1 = document.getElementById('drug_1').value
    var drug_2 = document.getElementById('drug_2').value
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = ()=>{
    document.getElementById('prediction').innerHTML = xml.responseText        

    }
        xml.open('POST','/.netlify/functions/comparison','true')
        xml.send('drug_1='+drug_1+'&amp;drug_2='+drug_2)">Enter<div id='prediction'></div>
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
