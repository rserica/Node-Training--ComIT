// Exercise 140
// Create a new index140.js file
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
// Filter the list using the filter method and remove the following mutants:
// Magneto
// Iceman
// Gambit
// Show the filtered list as output

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

let filter = mutants.filter(function(mutant){
  if (mutant!="Magneto" && mutant!="Iceman" && mutant!="Gambit"){
    return mutant;
  }
})

console.log(filter);
