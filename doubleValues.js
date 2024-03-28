// Exercise: Create a function that takes in an array of numbers and a callback function.

// The callback function should be applied to each element of the array, and the result should be stored in a new array.

// Then, log the new array.

// Example usage:
// input: [1, 2, 3, 4, 5], callback: (num) => num * 2
// output: [2, 4, 6, 8, 10]

const arr = [1, 2, 3, 4, 5];

const doubledArr = arr.map(n => n * 2);

console.log(doubledArr);
// [2,4,6,8,10];