console.log(`=======================Finding factorial of string=====================`);

function factorialofWordsCount(str){
    if (str==null||str=="") {
        console.log(`Invalid string: (${str})-->unhappy Scenario`);
        return;
 }
 var v1=str.trim().split(" ").length;
 console.log(`Given input string is: ${str}`);
 console.log(`Total number of words in the given string is: ${v1}`);

var fact=1;
for(i=1;i<=v1;i++){
fact=fact*i;
 }
 console.log(`Factorial is: ${fact}`);
 console.log(`-----------------------------------------------------------------------`);
 
 }
factorialofWordsCount("Revision is the mother of Success");
factorialofWordsCount("We never fail, we always learn, Mind it");
factorialofWordsCount(null);
factorialofWordsCount("");
factorialofWordsCount("Shubhangi Jadhav");