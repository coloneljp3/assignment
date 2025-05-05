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

var connect = mysql.createConnection('mysql://avnadmin:AVNS_om8uYVTBL50tPl05R_4@mysql-1e9f0822-jpbreaux225-37e4.h.aivencloud.com:25589/defaultdb?ssl-mode=REQUIRED')

connect.query(`SELECT COUNT(*) FROM Customers where username = ? AND pasword = ?`,[username,pasword],(err,result)=>{
if(result[0]["COUNT(*)"] == 0){res.send(``)}

else{
	connect.query(`Select * from Customers where username = ? and pasword = ?`,[username,pasword],(err,result,fields)=>{
var customerInfo = result
var date = new Date();
var newDate = (date.getDay(),date.getMonth(),date.getYear)
	connect.query(`Select * from Records where daily_dosage = ? AND username=?`,[newDate,username],(err,result,fields)=>{
		res.send(result,customerInfo)
		
	})
  
})
  
}})
  


    
  })
  router.get('/',(req,res)=>{res.send('this is a get request')})



app.use('/.netlify/functions/account-page',router)
module.exports.handler = serverless(app)
