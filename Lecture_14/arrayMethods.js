// Array methods in JavaScript are powerful tools that allow for efficient manipulation and handling of arrays. Here are some common and useful array methods:

// 1. push() :
// Adds one or more elements to the end of an array and returns the new length of the array.

let fruits = ["Banana", "Orange", "Apple"];
fruits.push("Mango");
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]

// 2. pop()
// Removes the last element from an array and returns that element.
let last = fruits.pop();
console.log(fruits); // ["Banana", "Orange"]
console.log(last);   // "Apple"

// 3. shift()
// Removes the first element from an array and returns that element. This method changes the length of the array.
let first = fruits.shift();
console.log(fruits); // ["Orange", "Apple"]
console.log(first);  // "Banana"

// 4. unshift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift("Mango");
console.log(fruits); // ["Mango", "Banana", "Orange", "Apple"]

// 5. splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
fruits.splice(1, 1, "Lemon", "Kiwi"); // removes 1 element at index 1, adds "Lemon" and "Kiwi"
console.log(fruits); // ["Banana", "Lemon", "Kiwi", "Apple"]

// 6. slice()
// Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
let citrus = fruits.slice(1, 3);
console.log(citrus); // ["Orange", "Lemon"]

// 7. concat()
// Merges two or more arrays. This method does not change the existing arrays but returns a new array.
let array1 = ["Cecilie", "Lone"];
let array2 = ["Emil", "Tobias", "Linus"];
let children = array1.concat(array2);
console.log(children); // ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

// 8. join()
// Joins all elements of an array into a string.
let text = fruits.join(", ");
console.log(text); // "Banana, Orange, Apple, Mango"

// 9. reverse()
// Reverses the order of the elements in an array.
fruits.reverse();
console.log(fruits); // ["Mango", "Apple", "Orange", "Banana"]

// 10. sort()
// Sorts the elements of an array in place and returns the array.
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// 11. map()
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers1 = [1, 4, 9, 16];
let roots = numbers1.map(Math.sqrt);
console.log(roots); // [1, 2, 3, 4]

// 12. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
let evens = numbers1.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]

// 13. reduce()
// Executes a reducer function on each element of the array, resulting in a single output value.
let sum1 = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum1); // 10

// 14. forEach()
// Executes a provided function once for each array element.
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.forEach(fruit => console.log(fruit));
// Output: "Banana", "Orange", "Apple", "Mango"

// 15. find()
// Returns the value of the first element in the array that satisfies the provided testing function.
let numbers2 = [4, 9, 16, 25];
let first1 = numbers2.find(num => num > 10);
console.log(first1); // 16

// 16. findIndex()
// Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
let index = numbers1.findIndex(num => num > 10);
console.log(index); // 2

// 17. includes()
// Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let hasApple = fruits.includes("Apple");
console.log(hasApple); // true

// 18. some()
// Tests whether at least one element in the array passes the test implemented by the provided function.
let number = [1, 2, 3, 4, 5];
let hasEven = number.some(num => num % 2 === 0);
console.log(hasEven); // true

// 19. every()
// Tests whether all elements in the array pass the test implemented by the provided function.
let allEven = number.every(num => num % 2 === 0);
console.log(allEven); // false

// 20. indexOf()
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index2 = fruits.indexOf("Apple");
console.log(index2); // 2

// 21. fill()
// Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
numbers1.fill(0, 2, 4);
console.log(number); // [1, 2, 0, 0]

// 22. flat()
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nested = [1, [2, 3], [4, [5, 6]]];
let flatArray = nested.flat(2);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]

// 23. flatMap()
// First maps each element using a mapping function, then flattens the result into a new array.
let arr = [1, 2, 3, 4];
let result = arr.flatMap(x => [x, x * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6, 4, 8]

// 24. reduceRight()
// Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
let numbers = [1, 2, 3, 4];
let sum = numbers.reduceRight((acc, val) => acc + val);
console.log(sum); // 10