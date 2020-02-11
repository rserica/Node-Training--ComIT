// Exercise 130
// Create a new index130.js file
// Define a mutants array with the following values:
// Professor X
// Cyclops
// Iceman
// Angel
// Beast
// Phoenix
// Sort the list
// Reverse the sorted list
// Join all mutants name using the following text: '* '
// Show the following output:
// Original mutants list
// Sorted mutants list
// Reversed mutants list
// Mutants name separated by *

let mutants = [
  "Professor X",
  "Cyclops",
  "Iceman",
  "Angel",
  "Beast",
  "Phoenix"
];

let sortmutants = mutants.sort();
let revmutants = mutants.reverse();
let mutantStr = "";
mutants.forEach( function(mutant){
  mutantStr= mutantStr+"*"+mutant;
});

console.log(mutants);
console.log(sortmutants);
console.log(revmutants);
console.log(mutantStr);
