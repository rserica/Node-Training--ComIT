// Exercise 85
// Create a new index85.js file
// Copy and paste the code from exercise 75
// Refactor the code to use do/while instead of while


// Exercise 75
// Create a new index75.js file
// Write a program that will show the first 10 Fibonacci sequence numbers

var x0 = 0;
var x1 = 1;
var xn= 0;
var xn1=1;
var xn2=0;
var i=0;

 do{
   xn = xn1 +xn2;
   console.log(xn);
   xn1 = xn2;
   xn2 = xn;
   i++;
} while (i <=10);
