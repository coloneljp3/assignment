'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
router.post('/',(req,res)=>{
var body = (new String(req.body)).replaceAll('username=','').replaceAll('&daily_dosage=',',').split(',')
var username = body[0]
var daily_dosage = body[1]
var conn = mysql.createConnection('mysql://avnadmin:AVNS_om8uYVTBL50tPl05R_4@mysql-1e9f0822-jpbreaux225-37e4.h.aivencloud.com:25589/defaultdb?ssl-mode=REQUIRED')
conn.query(`INSERT INTO Records(username,daily_dosage) VALUES(?,?)`,[username,daily_dosage],(err,result)=>{
res.send(err)
  
}) 
})

app.use('/.netlify/functions/form_sub',router)
module.exports.handler = serverless(app)
