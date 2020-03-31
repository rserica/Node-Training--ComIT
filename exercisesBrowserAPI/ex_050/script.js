// Select the form element using any of the JavaScript selectors
// Add a form submit handler and prevent the default form behaviour
// When the user submits the form validate that the username and password are not empty
// If the fields are empty then add the error class to the error's id element
// Also add the following messages:
// Please input a username and password
// If everything is ok then make sure that you don't show the error message
// Then allow the form to be submitted
// Add one more validation to make sure that username and password only contains numbers and letters (alphanumeric)
// Validate that the email is correct using an email regex
// Show an error message if the username, password and email values are not valid

const form = document.querySelector("form");
const error = document.getElementById("errors");

const validateUser = function(username) {
  // we check if the username value (string) has alphabumeric characters only
  const regex = /^[a-z0-9]+$/i;

  return regex.test(username);
}

const validateEmail = function(email) {
  // this is a simple email validation regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // this text method will return a true/false value depending if the string matches the regex or not
  return emailRegex.test(email);
}

form.onsubmit  =  function(){

  const username = form.elements[0];
  const password = form.elements[1];
  const email = form.elements[2];
  let span = document.createElement("span");


  event.preventDefault();
  if (username.value == "" || password.value ==""){
    error.appendChild(span);
    span.innerHTML = "Please input a username and password";
    return false;
  }
   if (username.value != "" && password.value !="") {

     if (!validateUser(username.value)) {
       error.appendChild(span);
       console.log("login errado");
       span.innerHTML =   "  Please input a valid username";
       return false;
     }
     if (!validateEmail(email.value)) {
       error.appendChild(span);
       console.log("email errado");
       span.innerHTML = "   Please input a valid email";
       return false;
     }
   }
   if (span){
     error.removeChild(span);
   }

return true;

}
