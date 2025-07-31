console.log("====== Primitive DT ======");
console.log("====== 1. Number Data Type ========");

var age = 20;
console.log("Age: "+ age);

var ageTypeOf = typeof age;
console.log("Type of age: "+ ageTypeOf);

var weight = 67.89;
console.log("Weight: "+weight);
console.log("Type of weight is: " + typeof weight);

var v1=true;
console.log(typeof(true));

console.log("====== 2. Boolean Data Type ========");
var isMarried = true;
console.log(`Is Married: ${isMarried}  and it's data type is: ${typeof isMarried}`);

console.log("======= String Template =======");

var isBachelor = false;
// ES 6 Feature --> String Template
console.log(`Is Bachelor:  ${isBachelor} and it's datatype is: ${typeof isBachelor}`);