// Exercise 127
// Create a new index127.js file
// Define a iceCreamFlavors array with 10 flavors
// Remove the first 2 elements using shift
// Show the iceCreamFlavors items as output
// Show each removed flavor


let iceCreamFlavors = [];
iceCreamFlavors.unshift(
"Vanilla",
"Chocolate",
"Strawberry",
"Cookies and Cream",
"Strataciela",
"Blackberry",
"Pistachio",
"Cheesecake",
"Dulce de Leche",
"Candy");

let shiftedFlavors = [];
shiftedFlavors.push(iceCreamFlavors.shift());
shiftedFlavors.push(iceCreamFlavors.shift());

console.log(iceCreamFlavors);
console.log(shiftedFlavors);
