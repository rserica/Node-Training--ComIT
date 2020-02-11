// Exercise 133
// Create a new index133.js file
// Define a mutants array with the following values:
// Professor X
// Cyclops
// Iceman
// Angel
// Magneto
// Beast
// Phoenix
// Logan
// Gambit
// First part
// Iterate over the mutants items
// Show each mutant name
// Break the execution in case Magneto is part of the mutants list
// Second part
// Fin out Magneto position and remove it from the mutants array
// Iterate over the array without Magento on it and show each mutant name in upper case and the item position

let mutants = [
  "Professor X",
  "Cyclops",
  "Iceman",
  "Angel",
  "Magneto",
  "Beast",
  "Phoenix",
  "Logan",
  "Gambit"
];

console.log("*****Iterate over the mutants items and show each mutant name*****");
// Array.prototype.some
// Array.prototype.some is pretty much the same as forEach but it break when the callback returns true.
mutants.some(function(mutant){
  console.log(mutant);
  if(mutant=="Magneto"){
    return true;
  }
});

console.log("*****Fin out Magneto position and remove it from the mutants array*****");
mutants.splice(mutants.indexOf("Magneto"),1);
console.log(mutants);

console.log("*****Iterate over the array without Magento on it and show each mutant name in upper case and the item position*****");

mutants.some(function(mutant){
  console.log(mutant.toUpperCase());
});
