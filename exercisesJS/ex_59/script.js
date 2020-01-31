// Define firstNumber and secondNumber variables
let firstNumber;
let secondNumber;
// Assign a numeric value to previous defined variables
firstNumber = 33;
secondNumber = 33;
// If the first number equals the second number then show the following message: They are the same number
if (firstNumber===secondNumber){
  console.log("They are the same number");
}
// If the first number is bigger than the second number then show the following message: %firstNumber% is bigger than %secondNumber%
else if (firstNumber>secondNumber) {
  console.log(`${firstNumber} is bigger than ${secondNumber}`);
}
// If the second number is bigger than the first number then show the following message: %secondNumber% is bigger than %firstNumber%
else if (firstNumber<secondNumber) {
  console.log(`${secondNumber} is bigger than ${firstNumber}`);
}
