// Define a playerName variable with the following value: Patrik Laine is lame
let playerName = "Patrik Laine is lame";
// Define a teams variable with the following value: New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins
let teams = "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";
// Define a message variable with the following value: Winnipeg is the best Canadian city, Go Winnipeg
let message = "Winnipeg is the best Canadian city, Go Winnipeg"
// Use the slice method to get the following words or phrases from the previous variables:
// Patrik Laine is
let template1= playerName.slice(0,16);
console.log(template1);
//change Patrick Laine to uppercase
template1 = template1.slice(0,12).toUpperCase() + template1.slice(12);
// jets
let template2= teams.slice(46,50);
// Change the first jets character to be Capitalized
template2= template2.charAt(0).toUpperCase()+template2.slice(1);
console.log(template2);
// the best
let template3= message.slice(12,21);
console.log(template3);
// , Go
let template4= message.slice(34,38);
console.log(template4);
// Use a template variable to create the final result
let template = template1 + template3+ template2 +" player " + template4 +" " + template2 + "!!";
console.log(template);



// Create all the variables that you might need to accomplish this objective
// The final output must be: PATRIK LAINE is the best Jets player, Go Jets!!
