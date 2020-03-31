// Create a program that ask the user to input names and show them inside an order list
// If the number of items is even the text must be #ddd
// If the number of items is odd the text must be #eee
// The user must be able to insert all the user names that he wants
// Each time the user inputs a name we need to show it on the list/document


const body = document.querySelector("body");

let number = 0;
let aux =0;
const ol = document.createElement("ol");
body.appendChild(ol);

let inputANumber = confirm('Would you like to put a number?');

while(inputANumber){
     number = window.prompt("Insert a number");
     aux = document.createElement("li");
     aux.innerText = number;
     if (number%2==0) {
        aux.style.color= "pink";
     } else {
       aux.style.color="blue";
     }
     ol.appendChild(aux);
  inputANumber = confirm('Would you like to put a number?');
}
