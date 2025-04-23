var mysql = require('mysql2')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = express.Router()
var serverless = require('serverless-http')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',(req,res)=>{var connect = mysql.createConnection('mysql://avnadmin:AVNS_om8uYVTBL50tPl05R_4@mysql-1e9f0822-jpbreaux225-37e4.h.aivencloud.com:25589/defaultdb?ssl-mode=REQUIRED')
 connect.query(`USE defaultdb;Create Table Customer(
 PRIMARY KEY id varchar(255),
 ID int NOT NULL,
 username varchar(255),
 pasword varchar(255)
 date_of_creation varchar(255),
 medical_conditions varchar(255),
 prescription_drugs varchar(255)
 prescription_drugs varchar(255),
 PRIMARY KEY(ID)
 )`,(err,results)=>{connect.query(`USE defaultdb;Create Table Records(
 PRIMARY KEY id varchar(255),
 ID int NOT NULL,
 username varchar(255),
 date varchar(255),
 medical_info varchar(255)
 medical_info varchar(255),
 PRIMARY KEY(ID)
 
 )`)})

app.use('/.netlify/functions/create',router)

module.exports.handler = serverless(app)
