function sortEvenOdd(numbers) {
  return numbers.reduce((acc, current) => { const key = current % 2 === 0 ? 'even' : 'odd';
  acc[key].push(current);
  return acc;  
  }, {even: [], odd: []});
};

const numbers = [1, 44, 23, 2, 11]

console.log(sortEvenOdd(numbers));