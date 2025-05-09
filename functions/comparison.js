'use strict'
var express = require('express')
var serverless = require('serverless-http')
var app = express()
var router= express.Router()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
    


router.post('/', async (req,res)=>{
async function getDrugsFromAPI(){
var alldrugs = await fetch("https://api.fda.gov/drug/label.json?count=openfda.brand_name.exact&limit=100000").then(response=>response.json())
let a = await alldrugs;
    var alldrugs2 = []
for(let i of a["results"]){
alldrugs2.push(i['term'])
    
}
return alldrugs2
};
    
async function getDrugInteractions(keyword){
    var res = await fetch('https://api.fda.gov/drug/label.json?search='+keyword+'').then(response=>response.json());
    var x=res['results'][0]['drug_interactions'];return x
}

async function getDailyDosage(keyword){
    var res = await fetch('https://api.fda.gov/drug/label.json?search='+keyword+'').then(response=>response.json())
    return res['results'][0]['dosage_and_administration']
    
}

async function getDrugComponents(keyword){
var res = await fetch('https://api.fda.gov/drug/label.json?search='+keyword+'').then(response=>response.json())
return res['results'][0]['active_ingredient']
    
}

async function getIntendedUse(keyword){
var res = await fetch('https://api.fda.gov/drug/label.json?search='+keyword+'').then(response=>response.json())
return res['results'][0]['indications_and_usage']
};async function convertComp(drug_1){;
    let a = await getDrugComponents(drug_1);
        if(a===undefined){return false}
if(typeof a == "object"){a=a[0]};
let d = a.split(' ').indexOf('mg',0)
let v = a.split(' ').slice(d-4,d);
let z = a.split(' ').slice(d,d+4);
for(let i of v){z.push(i)};
return z

}

async function determineIfDrugComp(drug_1,drug_2){
let a = await convertComp(drug_1)
let d = await convertComp(drug_2)
if(!a||!d){return false}
let ad = await getDrugInteractions(drug_1)
let da = await getDrugInteractions(drug_2)
if(da === undefined||ad ===undefined){return false}
for(let i of a){
if(da.includes(i)){return true}else{continue}
}
for(let i of d){if(ad.includes(i)){return true}else{continue}
}

return false
}
async function determineIfIntendedUse(drug_1,drug_2){
let a =  await getIntendedUse(drug_1);
let d = await getIntendedUse(drug_2)
if(typeof a == 'object'){
    a = a[0]
}
    if(typeof d == 'object'){
    d = d[0]
};
    d= d.split(' ');a=a.split(' ');console.log()
for(let i of d){
if(i=='.'){d.splice(d.indexOf(i),10)}
if(i=='•'){d.splice(d.indexOf(i),10)}
if(i=='and'){d.splice(d.indexOf(i),10)}
};
for(let i of a){
if(i=='.'){a.splice(a.indexOf(i),10)}
if(i=='•'){a.splice(a.indexOf(i),10)}
if(i=='and'){a.splice(a.indexOf(i),10)}
}
    var dReturnString = ""
var aReturnString =""
for(let i of a){
if(i=='.'||i=="•"||i=="and"){continue}else{
            aReturnString+=i
            }
}
for(let i of d){
if(i=='.'||i=="•"||i=="and"){continue}else{
            dReturnString+=i
            }
};
var returnDScore = 0
var returnAScore = 0
console.log(dReturnString)
for(let i of d){
if(aReturnString.includes(i)){
returnAScore+=1
}else{returnDScore+=0}}
for(let i of a){
if(dReturnString.includes(i)){
returnDScore+=1
    
}else{returnAScore+=0}
    
}
    
;
console.log(returnDScore/d.length,returnAScore/a.length)
var ds = returnDScore/d.length
var as = returnAScore/a.length
var w;
if(ds<as){w=ds}
else{w=as}
    console.log(w)
 if(w>=.30){return true};
    return false
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
if(res1){return drug_1 +" and "+drug_2 +" share negative interactions and are unsafe to use together."} 
if(res2){return drug_1 +" and "+drug_2 +" share negative adverse effects and are unsafe to use together."}


    return "These two drugs are safe to use together"
}    
async function recDrug(drug_1){
let z = await getDrugsFromAPI();
for(let i of z){
    let cd = await compareDrugs(drug_1,i)
    let du = await determineIfIntendedUse(drug_1,i)
    if(cd=="These two drugs are safe to use together"&& du==true ){
return i+" is an alternative drug for "+drug_1+"."
}
else{
    continue
}
    return ""
}
    
}


var drugs= (String(req.body)).replaceAll('drug_1=','').replace('&',',').replaceAll('drug_2=','').replaceAll('%5B','').replaceAll('%27','').replaceAll('2C',',').replaceAll('5D','').replaceAll('%','').split(',')
let rd = await recDrug(drug[0]);
let a = await compareDrugs(drugs[0],drugs[1])
    if(typeof drugs =="object"){
res.send(a+rd)
}
else{
res.send(typeof drugs)
    
}
    


});
router.get('/',(req,res)=>{})

app.use('/.netlify/functions/comparison',router)
module.exports.handler = serverless(app)
