console.log(`===============================Task-1===============================`);

var square = function(num){
      var sq=num*num;
      console.log(`square of ${num} is: ${sq}`);    
    }
    square(5);
    square(6);
    square(25);
    square(100);
    square(67);
    square(89);
    square(59);
    console.log(`Type of square function is: ${typeof square}`);
    console.log(`===============================Task-2===============================`);

    var rect= function(length,width){
       area=length*width;
       console.log(`Given length is: ${length} and width is: ${width}`);
       
       console.log(`Area of rectangle is: ${area}`);
       
    }
    rect(499,917);
    
    console.log(`===============================Task-3===============================`);
    var swapValues=function(v1,v2){
        console.log(`Before swapping: ${v1} ,${v2}`);
        var temp=v2;
        v2=v1;
        v1=temp;
        console.log(`After swapping: ${v1}, ${v2}`);
    }
    swapValues("Mahi","Raina");
    swapValues(55,77);
    console.log(`===============================Task-4===============================`);
    var strBlock=function(){
        var str="JS the most popular language of internet";
        console.log(`Given string is: ${str}`);
        console.log(`Total character available in the string is: ${str.length}`);
        console.log(`character at index 6 is: ${str.charAt(6)}`);
        console.log(`character at index 11 is: ${str.charAt(11)}`);
        console.log(`last character in the given string is: ${str.charAt(str.length-1)}`);
        console.log("First character:", str.charAt(0));             // E
        console.log("Third last character:", str.charAt(str.length - 3)); // F
        var words = str.split(" ");
        var wordCount = words.length;
        console.log("Total words:", wordCount);                     // G
        console.log("Square of word count:", wordCount * wordCount);       
 }
strBlock();