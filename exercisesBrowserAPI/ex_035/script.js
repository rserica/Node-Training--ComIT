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

secondButton.addEventListener("click", function(){
  alert("Removing Event Listener from the First Button")
  button.removeEventListener("click", clickHandler );
});


link.addEventListener("click", function(){
  alert("This link doesn't send us to a differen page as we're preventing the default behaviour")
});
