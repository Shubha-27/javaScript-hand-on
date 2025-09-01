console.log(`------------------------------------------------------------------Task-1----------------------------------------------------------------`);

var arr=() => {
    console.log(`Good Morning, Today is Friday`);
    
    
}
arr();
console.log(`------------------------------------------------------------------Task-2----------------------------------------------------------------`);
var mul=(v1,v2,v3=1)=>{
 var l1=v1*v2*v3;
 console.log(`Multiplication of this given input ${v1},${v2},${v3} is: ${l1}`);
 
}
mul(5,5,2);
mul(10,4);
console.log(`------------------------------------------------------------------Task-3----------------------------------------------------------------`);
// 3. Arrow function with 5 arguments (addition/concatenation)
let addNumbers = (a, b, c, d, e) => {
    return a + b + c + d + e;
};

// 👉 Case 1: Numbers
let result = addNumbers(100, 100, 200, 349, 756);
console.log(`The addition of given input 100, 100, 200, 349, 756 is: ${result}`);

// 👉 Case 2: Strings
let resultStr = addNumbers("I am ", "learning ", "ES6 ", "features ", "in depth");
console.log(`The concatenation of given input string("I am ", "learning ", "ES6 ", "features ", "in depth") is: ${resultStr}`);
