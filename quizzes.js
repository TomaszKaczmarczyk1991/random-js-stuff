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