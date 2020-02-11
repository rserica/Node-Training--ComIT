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
var i= 13;
var string ="*************";
do{
  string = string.slice(0,i);
  console.log(string);
  i--;
}while (i>= 1);
