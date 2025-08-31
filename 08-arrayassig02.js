const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("Original Array:", arrayNumbers);

// 1. Find total elements
console.log("1. Total elements:", arrayNumbers.length);
// Output: 11

// 2. Log first and last element
console.log("2. First element:", arrayNumbers[0], " Last element:", arrayNumbers[arrayNumbers.length - 1]);
// Output: First element: 20  Last element: 11

// 3. Log third last element
console.log("3. Third last element:", arrayNumbers[arrayNumbers.length - 3]);
// Output: 60

// 4. Find all even numbers
let evens = [];
for (let num of arrayNumbers) {
  if (num % 2 === 0) evens.push(num);
}
console.log("4. Even numbers are:", evens.join(", "));
// Output: 20, 40, 60, 2

// 5. Find all odd numbers
let odds = [];
for (let num of arrayNumbers) {
  if (num % 2 !== 0) odds.push(num);
}
console.log("5. Odd numbers are:", odds.join(", "));
// Output: 31, 25, 23, 11, 29, 9, 11

// 6. Find even positioned elements (index 0,2,4,...) and sum
let evenPos = [];
let sumEvenPos = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 === 0) {
    evenPos.push(arrayNumbers[i]);
    sumEvenPos += arrayNumbers[i];
  }
}
console.log("6. Even positioned elements:", evenPos.join(", "), " Sum =", sumEvenPos);
// Output: Even positioned elements: 20, 40, 23, 29, 60, 11  Sum = 183

// 7. Find odd positioned elements (index 1,3,5,...) and sum
let oddPos = [];
let sumOddPos = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 !== 0) {
    oddPos.push(arrayNumbers[i]);
    sumOddPos += arrayNumbers[i];
  }
}
console.log("7. Odd positioned elements:", oddPos.join(", "), " Sum =", sumOddPos);
// Output: Odd positioned elements: 31, 25, 11, 9, 2  Sum = 78

// 8. Find sum of all elements
let sumAll = 0;
for (let num of arrayNumbers) {
  sumAll += num;
}
console.log("8. Sum of all elements:", sumAll);
// Output: 261

// 9. Find numbers which are multiple of 5
let multiplesOf5 = arrayNumbers.filter(num => num % 5 === 0);
console.log("9. Multiples of 5:", multiplesOf5.join(", "));
// Output: 20, 40, 25, 60

// 10. Check if 115 is available
console.log("10. Is 115 available?", arrayNumbers.includes(115));
// Output: false

// 11. Check if 23 is available
console.log("11. Is 23 available?", arrayNumbers.includes(23));
// Output: true

// 12. Insert 55, 66 at index 3
arrayNumbers.splice(3, 0, 55, 66);
console.log("12. After inserting 55,66 at index 3:", arrayNumbers);
// Output: [20, 31, 40, 55, 66, 25, 23, 11, 29, 9, 60, 2, 11]

// 13. Delete 3 elements starting from index 4
arrayNumbers.splice(4, 3);
console.log("13. After deleting 3 elements from index 4:", arrayNumbers);
// Output: [20, 31, 40, 55, 9, 60, 2, 11]



