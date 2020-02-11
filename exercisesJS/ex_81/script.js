// Create a new index81.js file
// Copy and paste the code from exercise 71
// Refactor the code to use do/while instead of while

// Show the 9 times table from 1 to 10 using while (example 9 times 1 equals 1)

var number = 0;
var result =0;

do{
  number++;
  result = 9*number;
  console.log(`9 x ${number} = ${result}`);
}while (number<=9);
