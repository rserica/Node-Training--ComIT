// Select the form element using any of the JavaScript selectors
// Add a form submit handler and prevent the default form behaviour
// When the user submits the form validate that the username and password are not empty
// If the fields are empty then add the error class to the error's id element
// Also add the following messages:
// Please input a username and password
// If everything is ok then make sure that you don't show the error message
// Then allow the form to be submitted

const form = document.querySelector("form");
const username = form.elements[0];
const password = form.elements[1];
const error = document.getElementById("errors");
let span = document.createElement("span");

console.log(username.value);
form.onsubmit  =  function(){
  event.preventDefault();
  if (username.value == "" || password.value ==""){
    error.appendChild(span);
    span.innerHTML = "Please input a username and password"
  }
  if (username.value != "" && password.value !="") {
    error.removeChild(span);
  }

}
