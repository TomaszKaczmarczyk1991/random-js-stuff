const array = [1,2,3,4,5];

const sumArray = array.reduce((acc, current) => {
  return acc += current;
}, 0)

console.log(sumArray)