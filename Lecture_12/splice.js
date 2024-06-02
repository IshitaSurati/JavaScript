//Splice is a method used to add or remove elements from an array
// Syntax:
// javascript
// array.splice(start, deleteCount, item1, item2, ...);
// start: Index at which to start changing the array.
// deleteCount: Number of elements to remove.
// item1, item2, ...: Elements to add to the array.

// index value , and count how much you want to remove
let arr=[1,2,3,4]
console.log(...arr);
arr.splice(3,1) 
console.log(...arr);
arr.splice(2,1)
console.log(...arr);
arr.splice(1,1)
console.log(...arr);

// index value , and count how much you want to add , add values you want
arr.splice(0,1,0)
console.log(...arr);
arr.splice(0,1,1,2)
console.log(...arr);
arr.splice(1,1,2,3)
console.log(...arr);
arr.splice(2,1,3,4)
console.log(...arr);


//example
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(...fruits);
// Remove 1 element at index 2
let removed = fruits.splice(2, 1); // removed = ["Apple"], fruits = ["Banana", "Orange", "Mango"]
console.log(...fruits);
// Add elements at index 2
fruits.splice(2, 0, "Lemon", "Kiwi"); // fruits = ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]
console.log(...fruits);
// Replace 1 element at index 1
fruits.splice(1, 1, "Grapes"); // fruits = ["Banana", "Grapes", "Lemon", "Kiwi", "Mango"]
console.log(...fruits);