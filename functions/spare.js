function getDrugInformation(keyword){
var request = new XMLHttpRequest()
request.onreadystatechange=()=>{
var d = JSON.parse(request.responseText).results[0].patient.drug
for(let i of d){console.log(i.activesubstance.activesubstancename, i.drugindication,i.drugdosagetext)}}


request.open('GET','https://api.fda.gov/drug/event.json?search=patient.drug.medicinalproduct:'+keyword+'','true')
//This will be used to query information about drugs


request.send()

}

function purposeOfDrug(keyword){



}

function getDrugSideEffects(keyword){

var request = new XMLHttpRequest()
request.onreadystatechange=()=>{
var d = request.responseText
}


request.open('GET','https://api.fda.gov/drug/label.json?search=adversereactions='+keyword+'','true')
//This will be used to query information about drugs


request.send()
}

function updateUserTable(){}

function getMedicalConditions(keyword){
var request = new XMLHttpRequest()
request.onreadystatechange=()=>{


}
request.open('GET','https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms='+keyword+','true')

//This will be used to query information about medical conditions

request.send()



}
different tables
Customers - just important account credentials, username, password, email, email_password
Messages - contains all messages and alerts for different users
Records - All customer drug information and medical history
    Medical Forms
    UPDATE Records SET drug_info = "" where id = ""

function getAdverseEffects(keyword){
var request = new XMLHttpRequest()
request.onreadystatechange=()=>{
document.getElementById('root').innerHTML =  JSON.parse(request.responseText)["results"][0]["adverse_reactions"]


}


request.open('GET','https://api.fda.gov/drug/label.json?search='+keyword+'','true')

//This will be used to query information about medical conditions

request.send()


}getAdverseEffects('')

function getDailyDosage(keyword){
var request = new XMLHttpRequest()
request.onreadystatechange=()=>{
var dosage =  JSON.parse(request.responseText)["results"][0]["dosage_and_administration"][0].split(" ")
var index = dosage.indexOf("mg")
var secondhalf = dosage.splice(index,index+5)
var firsthalf = dosage.splice(index-5,index+5)
console.log(firsthalf,secondhalf)

)

}


request.open('GET','https://api.fda.gov/drug/label.json?search=dosage_and_administration='+keyword+'','true')

//This will be used to query information about medical conditions

request.send()


}getDailyDosage('')






Create Table Customer(
username varchar(255),
pasword varchar(255)
date_of_creation varchar(255),
medical_conditions varchar(255),
prescription_drugs varchar(255)
)

Create Table Records(

username varchar(255),
date varchar(255),
medical_info varchar(255)
)

Steps for comparing drugs
Iterate through Medical conditions
    Find the negative side effects of conditions/surgeries
        getMedicalConditions()
     - Use this information to suggest drugs that can handle these problems - treatment options only
Iterate through current prescriptions
    - Find if any of the current prescriptions you have have side effects that you have as medical conditions
        -getDrugSideEffects()
        -getDrugInformation()
Look at queried prescription - compare adverseeffects property with each item in the current prescriptions
        -getDrugInformation()
    -Find side effects of prescription - make sure that none of them cause negative side effects that are related to specific medical conditions you have
        -    -getDrugSideEffects()
    -Make sure that prescription can treat a medical condition - check to see if the positive effect = medical condition


Customers Table
    date of account creation,
    username,
    password,
    medical_conditions/diseases,
    prescription_drugs,

Records Table
    username
    Date of Medical Forms
    key:value pairs for medical forms

INSERT INTO Customers VALUES(date of account creation,
        username,
        password,
        medical_conditions/diseases,
        prescription_drugs,
    )


UPDATE Customers SET medical_conditions = medical_conditions, prescription_drugs = prescription_drugs


INSERT INTO Records VALUES(username,date, key:value pairs)




function suggestionMachine(medical_conditions, prescription_drugs)
{
var drugs = {}
for(let i of prescription_drugs){
var prescriptionAdverse = getAdverseEffects(i)

for(let a of medical_conditions)
if(a==prescriptionAdverse){
drugsToAvoid.prescriptionAdverse == i + " should be avoided as it is linked to" + prescriptionAdverse +", which you currently have. Instead, you should take "+ recommendedDrug + ", which "+ recommededDrugExplanation  

}

}

return drugs

}








