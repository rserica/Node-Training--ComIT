// Select the form element using any of the JavaScript selectors
// Add the element a box shadow when the user sets focus on the inputs
// Remove the box shadow when the user removes input focus
// Add a form submit handler and prevent the default form behaivour
// Show an alert message with the username and password values

const form = document.querySelector("form");
const element1 = form.elements[0];
const element2 = form.elements[1];

element1.onfocus = function(){
  console.log("oi");
  element1.style.background = "pink";
}

element2.onfocus = function(){
    element2.style.background = "pink";
}

form.onsubmit  =  function(){
  event.preventDefault();
  alert("Username: "+ element1.value + " Password: "+ element2.value);
}
