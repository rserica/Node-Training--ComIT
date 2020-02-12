// Exercise 142
// Create a new index142.js
// Define a firstPerson variable
// Define a secondPerson variable
// Assign a new array to each defined variable with the following structure
// The first item is the person first name (string)
// The second item is the person last name (string)
// The third item is the person address (string)
// The fourth item is the person age (number)
// Use the reduce function over the firstPerson & secondPerson to get a string value back from each of them
// Compare the strings result to see if they are the same person (if they are they should match)
// Try using the same person (with different variables) and also try different people

firstPerson = ["Ed","Lake","222, Nothing Hill","35"];
secondPerson = ["Ed","LakeR","222, Nothing Hill","35"];


let fpReduce = firstPerson.reduce(function(total, currentValue){
  return total + currentValue;
});



let spReduce = secondPerson.reduce(function(total, currentValue){
  return total + currentValue;
});
;

if (fpReduce=== spReduce) {
  console.log( "Same Person");
} else {
  console.log("Different Person");
}
