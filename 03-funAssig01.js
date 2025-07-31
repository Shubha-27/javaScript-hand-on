console.log(`=========================================Assignment of Function=======================================`);
console.log(`========================Function with no arg and no return type===========================`);


function show(){
console.log(`Function-1 Show()`);
console.log(` Good morning, Gajanan Sir. You are the best teacher, and your teaching is excellent.`);
console.log(`I will do my best and put in sincere efforts in your subject.`);
}
show();

function display(){
console.log(`function-2 display()`);
console.log(`Function:- function is a block of code designed for particular task and you can reuse the function.`);
console.log(`Function can be Written in 4 ways : 
i.Function with no argument and no return value
ii.Function with Argument but no return value
iii.Function with no arguments but return value
iv.Function with argument and return value function`);
}
display();
console.log(`===========================Function with arg but no return type==========================`);
function personalDetails(firstName,lastName,collegeName){
    console.log(`My name is: ${firstName}`);
    console.log(`My Surname is: ${lastName}`);
    console.log(`My College name is: ${collegeName}`);
    }
personalDetails("Shubhangi","Jadhav","Sangameshwar College Solapur(Autonomous)");


console.log(`=========================Function with arg and return type===============================`);
function addThreeValues(num1,num2,num3){
    var result=num1+num2+num3;
    console.log(`The Given input is: num1-${num1}, num2-${num2}, num3-${num3}`);
    
    return result
 }
var v1=addThreeValues(10.23,600,40);
console.log("The addition of number is: "+v1);
var v2=addThreeValues("Hello","Good","Morning");
console.log("The addition of string is: "+v2);

    
    
