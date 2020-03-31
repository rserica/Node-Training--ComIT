// Exercise 11
// Create the following folder/file structure:
// /ex_11
//   |-- index.html
// index.html
// Create a basic HTML document
// Create a script tag on the document head element
// Ask the user to input his username
// Ask the user to input his password
// Show the following alert message
// Welcome %username%
// After 10 seconds and for one time only show the following message to the user
// Do you still want to be logged?
// If the user confirms that he wants to be logged show the following message:
// %username% your session has been restored
// Else show the following message
// %username% your session has expaired
let username = window.prompt("Please, insert your username");
let password = window.prompt("Please, insert your password");

alert(`Welcome ${username}`);
const logged = function(){
 let loginSession = window.confirm('Do you still want to be logged?');
 if (loginSession){
   alert(`${username} your session has been restored`);
 } else {
   alert(`${username} your session has expired`);
 }

}


setTimeout(logged ,10000);

console.log(logged);
