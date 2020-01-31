
// Define the variable series name (camel case) and assign the string value: Game of Thrones
var seriesName = "Game of Thrones";

// Define the following variables and assign the corresponding values
// variable name: dragon1, value: Drogon
var dragon1 = "Drogon";
// variable name: dragon2, value: Rhaegal
var dragon2 = "Rhaegal";
// variable name: dragon3, value: Viserion
var dragon3 = "Viserion";
// Create a template variable with the following value: In %seriesName% the dragons name are: %dragon1%, %dragon2% & %dragon3%
var template = ` In ${seriesName} the dragons name are: ${dragon1}, ${dragon2} & ${dragon3}`;
// Use console.log to output the interpolated template value
console.log(template);
// The final result must be: In Game of Thrones the dragons name are: Drogon, Rhaegal & Viserion
