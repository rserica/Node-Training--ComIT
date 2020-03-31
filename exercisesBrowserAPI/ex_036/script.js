// Create a basic HTML document
// Create a script tag on the document head element
// Copy and paste the all the code (html and js) from exercise 35
// Select the html element using querySelector method
// Add a click event handler to the html element using addEventListener
// When the user clicks on any position we need to show the folloing console message
//  Click possition: x-axis: %xposition%, y-axis: %yposition%


const html = document.querySelector("html");

html.addEventListener("click", function(event){
  console.log( `Click possition: x-axis: ${event.clientX} , y-axis: ${event.clientY}`);
});
