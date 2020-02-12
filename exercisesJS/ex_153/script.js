// Exercise 153
// Create a new index153.js
// Define a arithmetic variable and assing a literal value with the following methods:
// add
// subtract
// multiply
// divide
// remainder
// Each method accepts 2 numeric parameters and shows the operation result
// So, add will add both numbers together and log the result (the rest of the methods work in the same way)
// Show an error if the parameters values are not numbers
// Call the methods:
// add(2, 10)
// subtract(10, 5)
// multiply(3, 100)
// divide(40, 2)
// remainder(20, 2)

let arithmetic = {
  add: function(n1,n2){
    return n1+n2;
  },
  subtract: function(n1,n2){
    return n1-n2;
  },
  multiply: function(n1,n2){
    return n1*n2;
  },
  divide: function(n1,n2){
    return n1/n2;
  },
  remainder:function(n1,n2){
    return n1%n2;
  }
};

console.log(arithmetic.add(2, 10));
console.log(arithmetic.subtract(10, 5));
console.log(arithmetic.multiply(3, 100));
console.log(arithmetic.divide(40, 2));
console.log(arithmetic.remainder(20, 2));
