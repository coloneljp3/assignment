'use strict'
var mysql = require('mysql2');
var express = require('express');
var app = express();
var router = express.Router()
var bodyParser = require('body-parser')
var serverless = require('serverless-http')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
router.get('/',(req,res)=>{res.send(`
 
 <form method = "POST" action = "/.netlify/functions/extractdb"><input name = "query" placeholder = "type query"/><button type = "submit"></button></form>
 
 `)})

app.use('/.netlify/functions/extract',router)
module.exports.handler = serverless(app)
