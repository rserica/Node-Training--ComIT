// Exercise 5
// Create the following folder/file structure:
// /ex_5
//   |-- index.html
// index.html
// Create a basic HTML document
// Create a script tag on the document head element
// Using the prompt method ask the user tu input a number
// Using the alert method show if the number is even or odd
// Your number is even/odd

let userNumber = window.prompt("Please enter a number:");
numberCheck();
function numberCheck(){
if(userNumber%2 == 0)
{
    alert("Your number is even!");
}
else
{
    alert("Your number is odd. Very strange indeed...");
}
}
