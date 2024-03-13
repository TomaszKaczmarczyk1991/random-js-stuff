// 09.03.2024

// 1) 
for(let i = 1; i < 5; i++){
    if(i === 3) continue;
    console.log(i)
}

// output: 1, 2, 4

// 2)
let x = true === []; // boolean, false
let y = true === ![]; // object, false

console.log(x + y); // false + false = 0


// 10.03.2024

// 1)
let x = +'5';
let y = -'5';

// + and - converts string to number

console.log(x + y); // 0

// 2)
new Set([1,1,2,3,4,4,4]).size; // 4

// Set removes duplicates

// 13.03.2024

// 1) 
console.log('cat' && 'dog'); // dog

// with && operator, it returns the last value if both values are truthy

// 2)
let x = [1,2,3] + [4,5,6];

console.log(x); // 1,2,34,5,6
// arrays turns into strings due to + operator