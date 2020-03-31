// Create a basic HTML document
// Create a script tag on the document head element
// Select the body element and add the keypress event handler
// When the user press a key we'll show the following message on the console
// You pressed the %pressedKey% key with the %charCode% code
// Use event.charCode & String.fromCharCode() to get the key and code

body = document.querySelector("body");

body.addEventListener("keypress", function(event){
  const charCode = event.charCode;
  const key = String.fromCharCode(charCode);

  console.log(` You pressed the ${key} with the ${charCode} code `);
});
