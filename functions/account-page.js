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
<ul><il class="past-product-item"><a>Warm Sherpa Coat White</a></il><il class="past-product-item"><a>Kids Block Set 40 Piece</a></il><il class="past-product-item"><a>Warm Sherpa Coat White</a></il></ul></div></div></div><br>`)
  
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

app.use('/account-page',router)
module.exports.handler = serverless(app)
