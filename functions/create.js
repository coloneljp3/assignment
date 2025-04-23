var mysql = require('mysql2')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = express.Router()
var serverless = require('serverless-http')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',(req,res)=>{var connect = mysql.createConnection('mysql://avnadmin:AVNS_om8uYVTBL50tPl05R_4@mysql-1e9f0822-jpbreaux225-37e4.h.aivencloud.com:25589/defaultdb?ssl-mode=REQUIRED');
connect.query(`Select * from Customer`,(err,results)=>{res.send(results)})


})

app.use('/.netlify/functions/create',router)

module.exports.handler = serverless(app)
