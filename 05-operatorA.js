console.log(`======================================Task-1============================================`);
function squareOfWordLength(str){
 var Value=str.length;
 var store=str.length*str.length;
 console.log(`given input string is "${str}" || its length is: ${Value} || Square of length: ${store}`);
 

 
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web Developer Smart");
console.log(`======================================Task-2============================================`);
function find(){
    var str="I am MERN Stack Developer";
    console.log(`Given string is: ${str}`);
    var senLen=str.length;
    console.log(`string length is: ${senLen}`);
    var wordlen=str.split(" ").length;
    console.log(`Total word available in the string is: ${wordlen}`);
    var result=senLen%wordlen;
    console.log(`Length % words: ${result}`);
    var result1=wordlen*senLen;
    console.log(`Length * words: ${result1}`);
    
}
find();