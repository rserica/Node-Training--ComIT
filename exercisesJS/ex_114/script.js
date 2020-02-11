// Exercise 114
// Create a new index114.js file
// Define a revert function that accepts a string parameter
// This function shows the reverted text parameter
// For example if you call the revert function with 'hello' the function will show: olleh
// Call this function using at least 5 different words :)


const revert = function(word){
  let inverse = " ";
  for (i=word.length; i>=0;i--){
    inverse = inverse+ word.charAt(i);

  }
  console.log(inverse);
  return inverse;
}

revert("hello");
revert("dreams");
revert("canada");
revert("creativity");
revert("chocolate");
revert("coffee")
