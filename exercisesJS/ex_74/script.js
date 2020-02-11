// Exercise 74
// Create a new index74.js file
// Show the following output using while:
// *
// ***
// *****
// *******
// *********
// ***********
// *************


var i =0;
var string ="*";

while (i<=14) {
  if (i%2 != 0) {
    console.log(string.repeat(i));
  }
}
