'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));



app.use('/',(req,res)=>{
var customer = req.body
var username = customer.username
var password = customer.lastname

var connect = mysql.createConnection(process.env.DATABASE_URL)

  connect.query(`SELECT * FROM Customers WHERE username == ? AND password = ?`,[username,password],(err,results)=>{
if(results.length>0){continue}
else(throw err; console.log('This account doesnt exist'))
    
  })
  



  
})

app.use('/login',router)
module.exports.handler = serverless(app)

