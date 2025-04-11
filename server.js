'use strict'

var mysql = require('mysql2')
var express = require('express')
var app = express()
var router = express.Router()
var serverless = require('serverless-http')
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use('/',(req,res)=>{
var conn = mysql.createConnection('mysql://avnadmin:AVNS_om8uYVTBL50tPl05R_4@mysql-1e9f0822-jpbreaux225-37e4.h.aivencloud.com:25589/defaultdb?ssl-mode=REQUIRED')
conn.query(`CREATE TABLE Customers(id INT(255) PRIMARY KEY,
name varchar(255))`,(err,results)=>{if(err){res.send(err)} res.send(results)})
})

app.use('/.netlify/functions/server',router)
module.exports.handler = serverless(app)

`SELECT * FROM CUSTOMERS WHERE username = ? OR pasword = ?` if(results.length==1){an account with these credentials already exists } FOR SIGNUP
`INSERT INTO Customers(username, pasword, full_name,insurance_company ,[prescriptions:doses], medical_history) VALUES(?,?,?,?,?)` 
`SELECT * FROM CUSTOMERS where username = ? and pasword = ?` if(results.length==0){create new account }else{signin} FOR LOGIN 
`SELECT prescriptions from Customers where username = ?` Account page drug dosages
`INSERT INTO Customers(prescriptions) VALUES(?) WHERE username = ?` drug prescriptions Account Page
<input name = "username" style = "display:none"/>
<input name = "pasword" style = "display:none"/>
