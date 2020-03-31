// Create a basic HTML document
// Create a script tag on the document head element
// Select the div element using querySelector
// Refactor the body keypress event handler to show the pressed key and code as div content instead of using the console
// This means that we'll have to remove the console.log call
// Show the text inside the div
// Once you have this feature working add the following styles to the div:
// Font size: 20px
// Font Color: red
// Font Family: Arial
// Bottom padding: 20px

body = document.querySelector("body");
const div = document.querySelector("div");


body.addEventListener("keypress", function(event){
  const charCode = event.charCode;
  const key = String.fromCharCode(charCode);
  console.log(` You pressed the ${key} with the ${charCode} code `);

  node = document.createElement("p");
  node.innerHTML = `You pressed the ${key} with the ${charCode} code `;
  div.appendChild(node);

  node.style.fontSize = "20px";
  node.style.color = "red";
  node.style.fontFamily = "Arial";
  node.style.bottomPadding = "20px";

});
