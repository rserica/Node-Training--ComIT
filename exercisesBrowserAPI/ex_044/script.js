// Create a basic HTML document
// Create a script tag on the document head element
// Select the form element using any of the JavaScript selectors
// Define a variable for each form element
// Using the form elements property set each variable the right element reference
// Example: define a username variable and assign the first form element using form elements property
// Set the username to morty
// Set the password to 12345
// Add the button a click event handler to show an alert with the username and passord values
// Change the username and password values using the browser and click the button again to check that it's working


const form = document.querySelector("form");
let usernameValue = form.elements[0].value;
let passwordValue = form.elements[1].value;
const submit = document.querySelector("button");

// usernameValue = "morty";
// passwordValue ="123";

form.addEventListener("submit", function(){
  alert ("Username: "+ usernameValue + " Password: "+ passwordValue);
})
