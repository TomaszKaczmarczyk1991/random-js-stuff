// Spread Operator Use Cases:

// 1)
const str = "Thomas";
const arr = [...str];

console.log(arr); // ["T", "h", "o", "m", "a", "s"]

// 2)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];

console.log(mergedArr); // [1, 2, 3, 4, 5, 6]

// 3)
const originalArr = ['zero', 'one'];
const copy = [...originalArr];

console.log(originalArr); // ['zero', 'one']
console.log(copy); // ['zero', 'one'] 