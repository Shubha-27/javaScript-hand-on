console.log(`=================================================Assignment for string-2=====================================================`);
function stringHandsOn(){
var str="  Hey you are doing good, keep it up  ";
console.log(`The given input string is: ${str}`);
console.log(`The total length of the given string is: ${str.length}`);
var trimmed=str.trim();
console.log(`Removing the leading and trailing extra spaces in the given string then output is: ${trimmed}`);
var trimeLength=trimmed.length;
console.log(`Length after trim: ${trimeLength}`);
console.log(`first character after trim: ${trimmed.charAt(0)} `);
console.log(`last character after trim: ${trimmed.charAt(trimeLength-1)}`);
var split1=trimmed.split(" ");
console.log(`Total number of words: ${split1.length}`);
console.log(`Index of word "good": ${trimmed.indexOf("good")}`);
var substring1=trimmed.substring(22);
console.log(`Substring starting from index 22: ${substring1}`);
var ends=trimmed.endsWith("up");
console.log(`String ends with "up": ${ends}`);
var start=trimmed.startsWith("Hey");
console.log(`String starts with "Hey": ${start}`);
}
stringHandsOn();