// Select the firstButton id element using querySelector method
// When the user clicks this button will see an alert message with the following message:
// You clicked an event listened element
// Use addEventListener to add this functionality
// Add other event listener to this button reading the doc and using your imagination!

const button = document.getElementById("firstButton");
const secondButton = document.getElementById("secondButton");
const link = document.querySelector("a");

const clickHandler = function(){
  console.log("Oi");
  alert("You clicked an event listened element");
}

const mouseoverHandler = function() {
  this.style.backgroundColor = 'red';
}

const mouseoutHandler = function() {
  this.style.backgroundColor = 'pink';
}


button.addEventListener("click", clickHandler );
button.addEventListener("mouseover", mouseoverHandler );
button.addEventListener("mouseout", mouseoutHandler );

secondButton.addEventListener("click", clickHandler );
secondButton.addEventListener("mouseover", mouseoverHandler );
secondButton.addEventListener("mouseout", mouseoutHandler );

link.addEventListener("click", clickHandler );
link.addEventListener("mouseover", mouseoverHandler );
link.addEventListener("mouseout", mouseoutHandler );
