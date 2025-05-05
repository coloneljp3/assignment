'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


router.post('/',(req,res)=>{
var body = (new String(req.body)).replaceAll('username=','').replaceAll('&pasword=',',').split(',')
var username = body[0]
var pasword = body[1]
res.send(username,pasword)

var connect = mysql.createConnection('mysql://avnadmin:AVNS_om8uYVTBL50tPl05R_4@mysql-1e9f0822-jpbreaux225-37e4.h.aivencloud.com:25589/defaultdb?ssl-mode=REQUIRED')

connect.query(`SELECT COUNT(*) FROM Customers where username = ? AND pasword = ?`,[username,pasword],(err,result)=>{
if(result[0]["COUNT(*)"] == 0){res.send(`This account doesn't exist. You need to create an account first`)}

else{
	connect.query(`Select * from Customers where username = ? and pasword = ?`,[username,pasword],(err,results,fields)=>{
var date = new Date();
var newDate = (date.getDay(),date.getMonth(),date.getYear)
	connect.query(`Select * from Records where date = ?`,[newDate],(err,result,fields)=>{
		if(result.length == 0){
			res.send(`window.alert('You haven't taken your prescriptions yet today. This is a reminder to do so.')`)
			
		}
		
	})
  
})
  
}})
  


    
  })
  router.get('/',(req,res)=>{res.send('this is a get request')})



app.use('/.netlify/functions/account-page',router)
module.exports.handler = serverless(app)
