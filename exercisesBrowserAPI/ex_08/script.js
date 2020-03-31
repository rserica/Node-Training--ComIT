// Exercise 8
// Create the following folder/file structure:
// /ex_8
//   |-- index.html
// index.html
// Copy and paste the code from the previous exercise
// Refactor the code to math the new requirements:
// Now we need to keep track of how many numbers the user input
// Once the user doesn't want to add any more numbers show the following message:
// The final result is: %result%
// The user input %numbers% numbers
// The average is: %average%


let inputANumber = true;
let result =0;
let partial =0;
let numbers =0;
let average =0;
do{
  console.log(inputANumber);
  inputANumber = confirm('Would you like to put a number?');
  if (inputANumber) {
    partial = Number(window.prompt("Please, input a number"));
    numbers++;
    result= result+ partial;
    console.log(` The result so far is: ${result}`);
  } else {
    break;
  }
} while (inputANumber==true)

average = result/numbers;
console.log(`The final result is ${result}`);
console.log(`The user input ${numbers}`);
console.log(`The average ${average}`);
