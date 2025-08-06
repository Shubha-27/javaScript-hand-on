console.log(`==============================Task-1================================`);

var checkEvenOrOdd=function(num){
  if(num%2==0){
    console.log(`Given number ${num} is even`);
    
  }else{
    console.log(`Given number ${num} is odd`);
    
  }
}
checkEvenOrOdd(45);
checkEvenOrOdd(70);
checkEvenOrOdd(67);
checkEvenOrOdd(98);

console.log(`==============================Task-2================================`);
var isEligible=function(age){
if(age>=18)
{
    console.log(`Age ${age}- person is eligible for vote`);
    
}else{
    console.log(`Age ${age}- person is not eligible for vote`);
}
}
isEligible(18);
isEligible(20);
isEligible(17);
isEligible(40);

console.log(`==============================Task-3================================`);
const checkStringLength = function (str) {
  if (str.length > 10) {
    console.log(`"${str}" has more than 10 characters`);
  } else {
    console.log(`"${str}" has 10 or fewer characters`);
  }
}
checkStringLength("JavaScript - ES6");

console.log(`==============================Task-4================================`);
const checkStartsWithJava = function (str) {
  if (str.startsWith("Java")) {
    console.log(`"${str}" starts with "Java"`);
  } else {
    console.log(`"${str}" does NOT start with "Java"`);
  }
}
checkStartsWithJava("JavaScript Language");
checkStartsWithJava("Programming Language");