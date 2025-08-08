function countCharA(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let currentChar = str.charAt(i);
        if (currentChar === 'a' || currentChar === 'A') {
            count++;
        }
    }
   
    
    
    console.log("Total count of 'a' or 'A' is:", count);
}

// Given strings
let string1 = "I AM Learning JavaScript, The Language of internet";
let string2 = "My favourite movie is LAggAn";

 

// Function calls
console.log(`String1 is: ${string1}`);
countCharA(string1);  // Output: 5
console.log(`String2 is: ${string2}`);
countCharA(string2);  // Output: 3