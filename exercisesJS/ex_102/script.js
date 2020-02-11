// Exercise 102
// Create a new index102.js file
// Define a showName variable and assign a function as value
// When the showName function get executed it will print your name with the following output format:
// ===========
// = Nicolás =
// ===========
// Call the showName at least 2 times
const symbol = "=";
function showName(name){
  console.log("=="+symbol.repeat(name.length)+"==");
  console.log(`= ${name} =`);
  console.log("=="+symbol.repeat(name.length)+"==");


}

showName("Erica");
showName("Ed");
