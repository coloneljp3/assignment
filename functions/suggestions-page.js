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

  


  
})

app.use('/suggestions-page',router)
module.exports.handler = serverless(app)
