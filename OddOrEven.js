// Array.prototype.filter

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const evenNumbers = arr.filter(n => n%2 === 0);

console.log(evenNumbers);
// [2,4,6,8,10,12,14]

const oddNumbers = arr.filter(n => n%2 !== 0);

console.log(oddNumbers);
// [1,3,5,7,9,11,13,15]