// Create a basic HTML document
// Create a script tag on the document head element
// Select the form element using any of the JavaScript selectors
// Crete a variable for each form property
// Example define a action variable and assign the form action property
// Show each form property value as div content


const form = document.querySelector("form");

const properties = [form.action,form.method,form.encoding,form.name];
const div = document.querySelector("div");

properties.forEach(function(property, span){
  span = document.createElement("span");
  span.innerHTML = property + "</br>";
  div.appendChild(span);
});
