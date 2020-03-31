// Select the form element using any of the JavaScript selectors
// Add a form submit event handler and prevent the default behaviour
// Show the following message when the user submits the form:
// Show the following message if the user doesn't select any superheroes:
// Please at least select a superheroe
// Show the following message if the user only selects one superheroe
// The best superheroe is: %selectedSuperhero%
// Show the following message if the user selects many superheroes
// The best superheores are: %listOfSuperheroesNames%

const form = document.querySelector("form");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let checkedHeroes = [];

form.onsubmit =  function(){
  event.preventDefault();
      checkboxes.forEach(function(checkbox){
      //  console.log(checkbox);
        if (checkbox.checked == true) {
          checkedHeroes.push(checkbox);
          console.log(checkbox);
        }
      });
      if(checkedHeroes.length == 1) {
        console.log("somente um");
        alert( "The best superheroe is "+ checkedHeroes[0].value);
      } else if(checkedHeroes.length > 1) {
        let superheroesnames = ""; checkedHeroes.forEach(function(heroes){
        superheroesnames= superheroesnames + "," + heroes.value;
        });
        alert("The best superheroes are: "+ superheroesnames);
      } else if(checkedHeroes.length<1) {
        alert("Please, select at least one superheroe")
      }

};
