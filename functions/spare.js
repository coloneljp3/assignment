'use strict'
var mysql = require('mysql2');
var express = require('express');
var app = express();
var router = express.Router()
var bodyParser = require('body-parser')
var serverless = require('serverless-http')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
router.get("/",(req,res)=>{
var conn = mysql.createConnection('mysql://avnadmin:AVNS_om8uYVTBL50tPl05R_4@mysql-1e9f0822-jpbreaux225-37e4.h.aivencloud.com:25589/defaultdb?ssl-mode=REQUIRED')
conn.query(`ALTER TABLE Customers AUTO_INCREMENT=1;
`,(err,result)=>{res.send(err,result)})})

app.use('/.netlify/functions/spare',router)
module.exports.handler = serverless(app)



