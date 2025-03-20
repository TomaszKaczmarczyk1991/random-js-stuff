const numbersToNames = {
  11: "Didier Drogba",
  8: "Frank Lampard",
  26: "John Terry"
};

const array = Object.entries(numbersToNames)

console.log(array)

const namesToNumbers =    array.reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
    }, {})
    
console.log(namesToNumbers)