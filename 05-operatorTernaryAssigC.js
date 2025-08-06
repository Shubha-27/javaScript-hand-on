console.log(`============================================Task-1==========================================`);
function maleMarriageEligibility(gender,age,boyName){
console.log(`Given function arg is: gender,age,boyName`);
console.log(`Given arg value is: ${gender}, ${age}, ${boyName}`);


 var result= (gender==="Male" && age>=21)?`Hey ${boyName},you are eligible for Marriage`:`Hey ${boyName},you are eligible for Marriage`
console.log(`Check they are eligible for marriage or not-->${result}`);
  
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log(`============================================Task-2==========================================`);
function femaleMarriageEligibility(gender,age,girlName){
console.log(`Given function arg is: gender,age,girlName`);
console.log(`Given arg value is: ${gender}, ${age}, ${girlName}`);
 var result= (gender==="Female" && age>=18)?`Hey ${girlName},you are eligible for Marriage`:`Hey ${girlName},you are eligible for Marriage`
console.log(`Check they are eligible for marriage or not-->${result}`);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");
