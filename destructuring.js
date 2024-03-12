// https://www.learn-js.org/en/Destructuring

// Get the legs property and get the data inside the third position of numbers using destructuring. Give it the names of myLegs and thirdPosition respectively.

const person = {
    head: {
        eyes: 'x',
        mouth: {
            teeth: 'x',
            tongue: 'x'
        }
    },
    body: {
        shoulders: 'x',
        chest: 'x',
        arms: 'x',
        hands: 'x',
        legs: 'x'
    }   
};

const numbers = ['2', '3', '4'];

// TODO: Destructure here.

let { legs: myLegs } = person.body;
let [ thirdPosition ] = numbers[2];

console.log(myLegs);
console.log(thirdPosition);
