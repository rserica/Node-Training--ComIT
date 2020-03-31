// Exercise 7
// Create the following folder/file structure:
// /ex_7
//   |-- index.html
// index.html
// Create a basic HTML document
// Create a script tag on the document head element
// Show the user the following message using the alert method:
// This program adds all the numbers you input
// While the user confirms that he wants to input another number execute the following acctions
// Using the prompt method ask the user to input a number
// Add the number
// Show the partial result with the following message:
// The result so far is: %result%



let inputANumber = true;
let result =0;
let partial =0;
do{
  console.log(inputANumber);
  inputANumber = confirm('Would you like to put a number?');
  if (inputANumber) {
    partial = Number(window.prompt("Please, input a number"));
    result= result+ partial;
    console.log(` The result so far is: ${result}`);
  } else {
    console.log(` The result so far is: ${result}`);
    break;
  }
} while (inputANumber==true)
