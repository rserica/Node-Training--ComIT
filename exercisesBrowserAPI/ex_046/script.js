// Select the form element using any of the JavaScript selectors
// Add a submit event handler to prevent the default form behaviour
// Show the following message when the user submits the form:
// %selectedCountry% has been selected and it has %optionValue% as id


const form = document.querySelector("form");
const div = document.querySelector("div");
const select = document.querySelector("select");


form.onsubmit =  function(){
  event.preventDefault();
  let  index = select.selectedIndex;
  let result = select.options[index].text;
  let p = document.createElement("p");
  p.innerHTML =  result +" has been selected and has "+ index + " as id";
  div.appendChild(p);
};
