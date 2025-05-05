'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

router.get('/',(req,res)=>{res.send('this is a get request')})

router.post('/',(req,res)=>{
var body = (new String(req.body)).replaceAll('username=','').replaceAll('&pasword=',',').split(',')
var username = body[0]
var pasword = body[1]




var connect = mysql.createConnection('mysql://avnadmin:AVNS_om8uYVTBL50tPl05R_4@mysql-1e9f0822-jpbreaux225-37e4.h.aivencloud.com:25589/defaultdb?ssl-mode=REQUIRED')

connect.query(`SELECT COUNT(*) FROM Customers where username = ? AND pasword = ?`,[username,pasword],(err,results)=>{
if(results.length == 0){res.send(`This account doesn't exist. You need to create an account first`)}

else{
	connect.query(`Select * from Customers where username = ? and pasword = ?`,[username,pasword],(err,results,fields)=>{

		res.send(results)
  
})
  
}})
  


    
  })
  


app.use('/.netlify/functions/account-page',router)
module.exports.handler = serverless(app)
