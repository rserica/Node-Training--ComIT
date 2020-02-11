// Exercise 112
// Create a new index112.js file
// Define a showNumbers function that accepts two numeric parameters: start and end
// The showNumbers function will show all the numbers between the start and end numbers
// If start is bigger than the second one show the numbers from higher to lower
// If start is smaller than the second one then show the numbers from lower to higher
// Call the showNumbers function using the following parameters:
// start: 0, end: 1000
// start: 1000, end: 0
// start: 100, end: 100
// start: "100", end: 300
// Find a way to deal with the following scenarios:
// start and end are the same number
// parameters that aren't numbers


const showNumbers = function(start, end){
  if(start<end && !isNaN(start) && !isNaN(end)) {
    for (i=start; i<=end; i++){
      console.log(i);
    }
    }
    else if(end < start && !isNaN(start) && !isNaN(end)) {
     for (i=start; i>=end; i--) {
      console.log(i);
    }
  } else if (start == end && !isNaN(start) && !isNaN(end)) {
    console.log("The numbers are the same");
  }
  else {
    console.log("Invalid argument");
  }

}

//showNumbers(0,100);
showNumbers(20,0);
showNumbers(10, 10);
showNumbers(-10, 20);
showNumbers("oi", "tchau");
