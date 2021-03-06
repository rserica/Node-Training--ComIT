// Exercise 141
// Create a new index141.js file
// Define a tripExpenses array with the following values:
// The first item is hotel fee, it's a number, type a value that you like
// The second item is trip fee, it's a number, type a value that you like
// The third item is meals fee, it's a number, type a value that you like
// Define a budget variable and assign the sum of all the tripExpenses using reduce
// Show the tripExpenses items as output with the following format:
// hotel: %tripExpenses first item%, trip: %tripExpenses second item%, meals: %tripExpenses third item%
// Show the final budget items as output with the following format
// Total trip budget: %budget%

tripExpenses = {
  hotelFee: 1500,
  tripFee: 4500,
  mealsFee: 700
}

let budget = tripExpenses.hotelFee + tripExpenses.tripFee + tripExpenses.mealsFee;

console.log(`Hotel: ${tripExpenses.hotelFee}, Trip: ${tripExpenses.tripFee}, Meals: ${tripExpenses.mealsFee}`);
console.log("Total trip budget: ", budget);
