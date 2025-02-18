const nums = [1, 2, 3, 4, 5, 6, 7];

const evenDoubled = nums
  .filter(num => num % 2 === 0)
  .map(num => num * 2);

console.log(evenDoubled);
