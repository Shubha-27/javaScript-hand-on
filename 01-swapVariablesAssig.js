console.log(`======================Swapping Program========================`);
console.log(`====================Swap using third variable=================`);
var v1="Sweety";
var v2="Cutie";
console.log(`Before swapping sweety is: ${v1} || and cutie is: ${v2}`);
var v3=v1;
v1=v2;
v2=v3;
console.log(`After Swapping sweety is: ${v1} || and cutie is: ${v2}`);

console.log(`===============Swap without using third variable==============`);
var num1=100;
var num2=200;
var num3=300;
console.log(`Before Swapping the number is: num1-${num1}, num2-${num2}, num3-${num3}`);
num1=num2;
num2=num3;
num3=num1;
console.log(`After Swapping the number is: num1-${num1}, num2-${num2}, num3-${num3}`);



