// SPREAD OPERATOR USE CASES:

// 1) STRING TO ARRAY:
const str = "Thomas";
const arr = [...str];

console.log(arr); // ["T", "h", "o", "m", "a", "s"]


// 2) MERGING ARRAYS:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];

console.log(mergedArr); // [1, 2, 3, 4, 5, 6]


// 3) CLONING ARRAY:
const originalArr = ['zero', 'one'];
const copy = [...originalArr];

console.log(originalArr); // ['zero', 'one']
console.log(copy); // ['zero', 'one'] 


// 4) GET MIN & MAX VALUE FROM AN ARRAY:
const nums = [1, 2, 3];
Math.min(...nums); // 1
Math.max(...nums); // 3


// 5) SET TO ARRAY:
const set = new Set([1, 2, 3]);

console.log(set); // Set(3) {1, 2, 3}

// converting set into an array
const arr = [...set];
console.log(arr)


// 6) NODELIST TO ARRAY
// create a Nodelist object
const divs = document.querySelectorAll('div');

// convert Nodelist to an array
const divsArr = [...divs];