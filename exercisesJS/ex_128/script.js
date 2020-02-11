// Exercise 128
// Create a new index128.js file
// Define a iceCreamFlavors array with 10 flavors
// Remove the last 4 elements using pop
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


let popFlavors = [];
popFlavors.push(iceCreamFlavors.pop());
popFlavors.push(iceCreamFlavors.pop());
popFlavors.push(iceCreamFlavors.pop());
popFlavors.push(iceCreamFlavors.pop());

console.log(iceCreamFlavors);
console.log(popFlavors);
