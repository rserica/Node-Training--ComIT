// Exercise 80
// Create a new index80.js file
// Copy and paste the code from exercise 70
// Refactor the code to use do/while instead of while

// Use while structure to only sum odd numbers between 0 and 1000
// Show the partial result as output too
var number=0;
var result= 0;

do{
  if(number%2 !=0){
    result = result + number;
    console.log(result);
  }
  number++;
} while (number<=1000);
