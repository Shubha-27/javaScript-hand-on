const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`-----------------------------Task-1------------------------------------`);

// 1. Log the array element with its index using forEach() with arrow function
console.log("Array elements with index:");
arrayNumbers.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
});
console.log(`-----------------------------Task-2------------------------------------`);
// 2. Find the positive numbers and log on console in one line
let positiveArray = [];
arrayNumbers.forEach(num => {
    if (num > 0) {
        positiveArray.push(num);
    }
});
console.log("Positive Numbers:", positiveArray.join(", "));
console.log(`-----------------------------Task-3------------------------------------`);
// 3. Find the negative numbers, add into new array and log new array in one line
let negativeArray = [];
arrayNumbers.forEach(num => {
    if (num < 0) {
        negativeArray.push(num);
    }
});
console.log("Negative Numbers:", negativeArray.join(", "));
console.log(`-----------------------------Task-4------------------------------------`);
// 4. Find the even numbers and log on console
console.log("Even Numbers:");
arrayNumbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(num);
    }
});
console.log(`-----------------------------Task-5------------------------------------`);
// 5. Find the sum of all elements
let sum = 0;
arrayNumbers.forEach(num => {
    sum += num;
});
console.log("Sum of all elements:", sum);
console.log(`-----------------------------Task-6------------------------------------`);
// 6. Log only even indexed array values
console.log("Even indexed elements:");
arrayNumbers.forEach((num, index) => {
    if (index % 2 === 0) {
        console.log(`Index: ${index}, Value: ${num}`);
    }
});
