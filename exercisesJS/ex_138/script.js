// Exercise 138
// Create a new index138.js file
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
// Iterate over the mutants array
// Add <3 symbol before the mutant name if the iterated name is one of the following:
// Professor X
// Logan
// Phoenix
// Gambit
// Show the original mutant array items as output
// Show the updated mutant array items as output

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

console.log(mutants);
var newMutants = mutants.map(function(mutant,index){
   if (index==0 || index==7 || index==6|| index==8){
     return "<3"+ mutant;
   } else {
     return mutant;
   }

});
console.log(newMutants);
