// Exercise 10
// Create the following folder/file structure:
// /ex_10
//   |-- index.html
// index.html
// Create a basic HTML document
// Create a script tag on the document head element
// Show the user the following message using alert
// Welcome to this site
// After 5 seconds show the user the following message (only 1 time)
// You have been in this site for 5 seconds

alert("Welcome to this site");

setTimeout(function(){
  alert("You have been in this site for 5 seconds");
}, 5000);