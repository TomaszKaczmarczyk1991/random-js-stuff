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


// 14.03.2024
// 1)
let x = 3 > 2 > 1;

console.log(x); // false
// 3 > 2 evaluates to true and true is coerced to 1. so 1 > 1 is false.

// 2)
let a = 1;
a = a + (a += 2);

console.log(a); // 4


// 15.03.2024
// 1)
let x = 0;
let y = [];
console.log(typeof x)

console.log(x == y) //true
// type coercion so 0 == 0

console.log(x === y) // false
// without type coercion, it checks for strict equality
