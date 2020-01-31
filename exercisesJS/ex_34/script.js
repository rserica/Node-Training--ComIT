//
// Define the following variables: income, revenue and taxes
var income;
var revenue;
var taxes;
// Assign the following values:
// income: 1000
// revenue: 600
// taxes: 500
income = 1000;
revenue = 600
taxes = 500;
// This months objectives are:
// Income of at least 800 or more
// Spend less than 400 on taxes
// We pay bonus if our revenue is 600
// Show the following output (console.log()):
// Income Objective: true or false (use greater than or equal operator)
console.log("Using only operators:");
let incomeObjective = income >= 800;
console.log (`Income Objective: ${incomeObjective}`);
//Taxes Objective: true or false (use less than operator)
let taxesObjective = taxes < 400;
console.log (`Taxes Objective: ${taxesObjective}`);
// Bonus Objective: true or false (use equality operator)
let bonusObjective = revenue === 600;
console.log (`Taxes Objective: ${bonusObjective}`);


console.log("Using if:");
if (income >= 800 ) {
  console.log ("Income Objective: true");
} else {
  console.log ("Income Objective: false");
}

if (taxes < 400 ) {
  console.log ("Taxes Objective: true");
} else {
  console.log ("Taxes Objective: false");
}

if (revenue === 600 ) {
  console.log ("Bonus Objective: true");
} else {
  console.log ("Bonus Objective: false");
}
