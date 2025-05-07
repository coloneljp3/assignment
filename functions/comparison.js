'use strict'
var express = require('express')
var serverless = require('serverless-http')
var app = express()
var router= express.Router()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
    


router.post('/',(req,res)=>{
var drugs= (String(req.body)).replaceAll('drugs=','').replaceAll('%5B','[').replaceAll('%27',"'").replaceAll('2C',',').replaceAll('5D',']').replaceAll('%','')
res.send(JSON.parse(drugs))

});
router.get('/',(req,res)=>{})

app.use('/.netlify/functions/comparison',router)
module.exports.handler = serverless(app)
