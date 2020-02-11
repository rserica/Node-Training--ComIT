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
while (i>= 1){
  string = string.slice(0,i);
  console.log(string);
  i--;
}
