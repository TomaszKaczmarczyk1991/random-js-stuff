const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]
