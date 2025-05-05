'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
router.post('/',(req,res)=>{
var query = (new String(req.body)).replaceAll('query=','').replaceAll('+',' ')
var conn = mysql.createConnection('mysql://avnadmin:AVNS_om8uYVTBL50tPl05R_4@mysql-1e9f0822-jpbreaux225-37e4.h.aivencloud.com:25589/defaultdb?ssl-mode=REQUIRED')
conn.query(query,(err,result)=>{res.send(`Query executed: `+query+`.<br>`+result)})
})

app.use('/.netlify/functions/extractdb',router)
module.exports.handler = serverless(app)
