// Exercise 93
// Create a new index93.js file
// Copy and paste the code from exercise 83
// Refactor the code to use for instead of do/while


// Exercise 83
// Create a new index83.js file
// Copy and paste the code from exercise 73
// Refactor the code to use do/while instead of while

// Exercise 73
// Create a new index73.js file
// Show the following output using while:
// *************
// ************
// ***********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

var string ="*************";
for (i=13;i>=0; i--){
  string = string.slice(0,i);
  console.log(string);
  i--;
}
