// https://www.learn-js.org/en/Loops
// In this exercise, you must write a for loop that iterates on the myArray variable and prints out all of its members.

var myArray = ["What is the meaning of life?", "The meaning of life is", 42];

// TODO: modify this code
for (let item in myArray){
    console.log(myArray[item])
}


// while statement:
var i = 99;

while (i > 0) {
  console.log(i + " bottles of beer on the wall"); i -= 1;
}