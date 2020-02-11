// Exercise 104
// Create a new index104.js file
// Define a fibonacci variable and assign a function value
// When executing the fibonacci function it will print the 10 first fibonacci sequence numbers as output
// Execute this function 3 times


const fibonacci = function(numbers){
  var x0 = 0;
  var x1 = 1;
  var xn= 0;
  var xn1=1;
  var xn2=0;
  var i=0;

   for (i=0; i<=numbers; i++){
      xn = xn1 +xn2;
      console.log(xn);
      xn1 = xn2;
      xn2 = xn;
  }
}

fibonacci(10);
