'use strict'
const express = require('express')
const mysql = require('mysql2')
const app = express()
const router = express.Router()
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

router.get('/',(req,res)=>{res.send(`

<form method = "POST" action = "/.netlify/functions/extractdb"><input name = "query" placeholder = "type query"/><button type = "submit"></button></form>

`)})
app.use('/.netlify/functions/extract',router)
module.exports.handler = serverless(app)
