'use strict'
var mysql = require('mysql2');
var express = require('express');
var router = express.Router()
var bodyParser = require('body-parser')
var serverless = require('serverless-http')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
router.get("/",(req,res)=>{
var conn = mysql.createConnection('mysql://avnadmin:AVNS_om8uYVTBL50tPl05R_4@mysql-1e9f0822-jpbreaux225-37e4.h.aivencloud.com:25589/defaultdb?ssl-mode=REQUIRED')
conn.query(`Create Table Customers(
id int NOT NULL,
username varchar(255),
pasword varchar(255)
daily_dosage varchar(255),
medical_conditions varchar(255),
prescription_drugs varchar(255),
PRIMARY KEY (id)
)`,(err,results)=>{res.send([err,results])})
})





