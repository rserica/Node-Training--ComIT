// Exercise 110
// Create a new index110.js file
// Define the average function that accepts 5 numbers as parameter
// Call the average function with the following values: 2, 4, 10, 20, 30
// After executing the call show the following message: The average is %average%


const average = function(n1,n2,n3,n4,n5){
  return ((n1+n2+n3+n4+n5)/5);
}

console.log(`The average is ${average(2, 4, 10, 20, 30)}`);
console.log(`The average is ${average(10, 10, 10, 20, 30)}`);
