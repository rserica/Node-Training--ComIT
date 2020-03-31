// Create a basic HTML document
// Create a script tag on the document head element
// Select the firstButton id element and add a ondblclick event handler
// Define a counter numberic variable and set the value to 0
// Increment the counter variable When the user double clicks the firstButton element
// Show the counter value using the div element

const firstButton = document.getElementById("firstButton");
let counter =0;

firstButton.addEventListener("dblclick", function(){
  counter = counter+ 1;
  console.log(counter);
});
