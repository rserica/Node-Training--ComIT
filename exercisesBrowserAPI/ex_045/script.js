// Select the form element using any of the JavaScript selectors
// Show the inputs values (same as previous exercise) when the user submits the form
// You'll have to prevent the form default behaviour
// Also, you can use the previous code as starting point
// You need to handle the submit event and not the input type submit click event (just in case!)



const form = document.querySelector("form");
const submit = document.querySelector("button");

form.onsubmit =  function(){
  event.preventDefault();
  let usernameValue = form.elements[0].value;
  let passwordValue = form.elements[1].value;
  alert ("Username: "+ usernameValue + " Password: "+ passwordValue);

}
