console.log(`=======================Reverse string=========================`);

function reverseString(str) {
    let reversed = "";  // Empty string to store result

    for (let i = str.length - 1; i >= 0; i--) {
        let currentChar = str.charAt(i);  // Get character from end
        if (currentChar !== " ") {        // Ignore spaces
            reversed += currentChar;      // Append to result
        }
    }
    console.log(`Given String is: ${str}`);
    
    console.log(`Reversed string is: ${reversed}`);
}

// Given strings
let string1 = "Hard work always pays back";
let string2 = "Soon I will be Angular IT Champ";

// Function calls
reverseString(string1);
reverseString(string2);
