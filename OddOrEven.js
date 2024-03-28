// Array.prototype.filter

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const evenNumbers = arr.filter(n => n%2 === 0);

console.log(evenNumbers);

const oddNumbers = arr.filter(n => n%2 !== 0);

console.log(oddNumbers);