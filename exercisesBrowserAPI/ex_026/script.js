// Select the body element
// Create a name array and add 10 names as items
// Create a ul element
// Iterate the name array and execute the following task for each item:
// Create an li element
// Set the name value as li element content
// Insert the li element into the ul element
// Finally insert the ul element into the body

const body = document.querySelector("body");

const names = ["Coraline", "Greta", "Malala", "Ana", "Elsa", "Mari", "Antonia", "Fernanda", "Lu","Chris"]

const ul = document.createElement("ul");
body.appendChild(ul);

names.forEach(function(name,aux){
 aux = document.createElement("li");
 aux.innerText = name;
  ul.appendChild(aux);
});
