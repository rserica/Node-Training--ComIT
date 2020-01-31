// Define a text variable with the following value: game of thrones
let text = "game of thrones";
// Define 3 variables with the following names:
// firstChar
// secondChar
// thirdChar
let firstChar;
let secondChar;
let thirdChar;
// Assign the firstChar the first char from the text variable
firstChar = text.charAt(0);
// Assign the secondChar the char at index 5 from the text variable
secondChar = text.charAt(5);
// Assign the thirdChar the char at index 8 from the text variable
thirdChar = text.charAt(8);
// Define a variable with the result name and assign the result value from using concat between firstChar, secondChar and thirdChar
let result = firstChar+secondChar+thirdChar;
// Transform the result variable to uppercase
result = result.toUpperCase();
// Show the result value as output: the final result is: GOT
console.log(result);
// What happens when you use an invalid index number (for example, 1000)? Try it!
console.log(text.charAt(1000));
