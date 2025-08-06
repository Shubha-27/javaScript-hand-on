console.log(`==================================Task-1====================================`);
function greaterNumber(num1,num2){
 const result=num1>num2?num1:num2;
 console.log(`Greater number between ${num1} and ${num2} is: ${result}`);
 
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`==================================Task-2====================================`);
function isEvenOrOddNum(num){
    const result1=num%2==0?true:false;
    console.log(`The given number ${num} is even?--> ${result1} `);
    
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`==================================Task-3====================================`);
function wordLength(str1){
    var strresult=str1.length;
    var possibility=strresult%2==0? "even":"odd";
    console.log(`given string: "${str1}" || its length is: ${strresult} || is it even or odd?: ${possibility}`);
    

}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");