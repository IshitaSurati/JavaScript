// Math :
// Math.round() to round numbers to the nearest integer.
// Math.floor() to round numbers down to the nearest integer.
// Math.ceil() to round numbers up to the nearest integer.
// Math.abs() to get the absolute value of numbers.
// Math.max() to find the maximum value among a set of numbers.
// Math.min() to find the minimum value among a set of numbers.
// Math.random() to generate a random number between 0 (inclusive) and 1 (exclusive).

// Finding the maximum value
let max = Math.max(10, 20, 4, 15);
console.log("Max:", max); // Max: 20

// Finding the minimum value
let min = Math.min(10, 20, 4, 15);
console.log("Min:", min); // Min: 4

// Generating a random number between 0 (inclusive) and 1 (exclusive)
let randomNum = Math.random();
console.log("Random number:", randomNum);

// Calculating the sum of the numbers
let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum:", sum); // Sum: 150

// Calculating the average of the numbers
let average = sum / numbers.length;
console.log("Average:", average); // Average: 30

// Rounding to the nearest integer
let rounded1 = Math.round(4.5);
let rounded2 = Math.round(4.4);
console.log("Math.round(4.5):", rounded1); // 5
console.log("Math.round(4.4):", rounded2); // 4

// Rounding down to the nearest integer
let floored1 = Math.floor(4.9);
let floored2 = Math.floor(4.1);
console.log("Math.floor(4.9):", floored1); // 4
console.log("Math.floor(4.1):", floored2); // 4

// Rounding up to the nearest integer
let ceiled1 = Math.ceil(4.1);
let ceiled2 = Math.ceil(4.9);
console.log("Math.ceil(4.1):", ceiled1); // 5
console.log("Math.ceil(4.9):", ceiled2); // 5

// Getting the absolute value of a number
let absolute1 = Math.abs(-4.5);
let absolute2 = Math.abs(4.5);
console.log("Math.abs(-4.5):", absolute1); // 4.5
console.log("Math.abs(4.5):", absolute2); // 4.5


