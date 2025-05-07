'use strict'
var express = require('express')
var serverless = require('serverless-http')
var app = express()
var router= express.Router()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
    


router.post('/', async (req,res)=>{
    async function getDrugInteractions(keyword){
    var res = await fetch('https://api.fda.gov/drug/label.json?search='+keyword+'').then(response=>response.json());
    var x=res['results'][0]['drug_interactions'];return x
}

async function getDailyDosage(keyword){
    var res = await fetch('https://api.fda.gov/drug/label.json?search='+keyword+'').then(response=>response.json())
    return res['results'][0]['daily_dosage']
    
}

async function getDrugComponents(keyword){
var res = await fetch('https://api.fda.gov/drug/label.json?search='+keyword+'').then(response=>response.json())
return res['results'][0]['active_ingredient']
    
}

async function getDailyDosage(keyword){
    var res = await fetch('https://api.fda.gov/drug/label.json?search='+drug+'').then(response=>response.json())
    return res['results'][0]['dosage_and_administration']
}

async function getIntendedUse(keyword){
var res = await fetch('https://api.fda.gov/drug/label.json?search='+keyword+'').then(response=>response.json())
return res['results'][0]['indications_and_usage']
}

async function getDrugInfo(drug_name){
let a,b,c,d;
let z = []
a = await getDrugComponents(drug_name)
b = await getAdverseEffects(drug_name)
c = await getDrugInteractions(drug_name)
d = await getIntendedUse(drug_name)
v = [a,b,c,d]
for(let a of v){if(typeof a == 'object'){z.push(a[0])}else{z.push(a)}};
return z
}

//These
async function determineIfDrugInteract(drug_1,drug_2){
//If drug_1 or drug_1 components is mentioned in the drug_interactions of drug_2 and if drug_2 or drug_2 components is mentioned in the interactions od drug_1; either one, the functions will return true
let fd = await getDrugInteractions(drug_1)
let sd = await getDrugInteractions(drug_2)
if(typeof fd == 'object'){fd  =fd[0]};
if(typeof sd == 'object'){sd = sd[0]};

if(typeof sd !="string"||typeof fd!="string"){return false};sd = sd.toLowerCase();fd = fd.toLowerCase();
if(fd.includes(drug_2)){return true}
    console.log(sd)
if(sd.includes(drug_1)){return true}
return false
}

async function determineIfDrugIsAdverse(drug_1,drug_2){
//If drug_1 or drug_1 components is mentioned in the drug_interactions of drug_2 and if drug_2 or drug_2 components is mentioned in the interactions od drug_1; either one, the functions will return true
let fd = await getDrugInteractions(drug_1)
let sd = await getDrugInteractions(drug_2)
if(typeof fd == 'object'){fd  =fd[0]};
if(typeof sd == 'object'){sd = sd[0]};


if(typeof sd !="string"||typeof fd!="string"){return false};sd = sd.toLowerCase();fd = fd.toLowerCase();
if(fd.includes(drug_2)){return true}
    console.log(sd)
if(sd.includes(drug_1)){return true}
return false
}



async function compareDrugs(drug_1,drug_2){
let res1 = await determineIfDrugInteract(drug_1,drug_2);
let res2 = await determineIfDrugIsAdverse(drug_1,drug_2)
if(res1){return drug_1 +"and"+drug_2 +" share negative interactions and are unsafe to use together."} 
if(res2){return drug_1 +"and"+drug_2 +" share negative adverse effects and are unsafe to use together."}


    return "These two drugs are safe to use together"
}    

var drugs= (String(req.body)).replaceAll('drug_1=','').replaceAll('&drug_2=').replaceAll('%5B','').replaceAll('%27','').replaceAll('2C',',').replaceAll('5D','').replaceAll('%','').split(',')
if(typeof drugs =="object"){
let d = await compareDrugs(drugs[0],drugs[1]);
res.send([drugs[0],drugs[1]])
}
else{
res.send(typeof drugs)
    
}
    


});
router.get('/',(req,res)=>{})

app.use('/.netlify/functions/comparison',router)
module.exports.handler = serverless(app)
