// Exercise 99
// Create a new index99.js file
// Add all even numbers bettwen 0 and 1000 using for statement
// The iteration must break after finding the first 20 even numbers
// Show the result as output

var counter =0;
for (var i=1; i<=1000; i++) {
  if ((i%2!=0) && (counter<=20)){
    counter++;
    console.log(i);
  }
  }
