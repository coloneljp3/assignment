'use strict'
var express = require('express')
var serverless = require('serverless-http')
var app = express()
var router= express.Router()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
    


router.post('/', async (req,res)=>{

async function getDailyDosage(keyword){
    var res = await fetch('https://api.fda.gov/drug/label.json?search='+keyword+'').then(response=>response.json())
    return res['results'][0]['dosage_and_administration']
    
}


var drugs= (String(req.body)).replaceAll('drug_1=','').replace('&',',').replaceAll('drug_2=','').replaceAll('%5B','').replaceAll('%27','').replaceAll('2C',',').replaceAll('5D','').replaceAll('%','').split(',')
let a = await getDailyDosage(drugs[0])
    if(typeof a =="object"){
res.send(a)
}
else{
res.send(typeof a)
    
}
    


});
router.get('/',(req,res)=>{})

app.use('/.netlify/functions/getDosage',router)
module.exports.handler = serverless(app)
