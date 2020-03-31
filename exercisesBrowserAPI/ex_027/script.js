// Select the body element
// Define a numbers array with numbers between 1 and 100
// Create a ul element
// Iterate the numbers array and execute the following task for each item:
// Create a li element
// Set the following text: Item %number% as li element content
// Add color: green as li element style property if it's even number
// Else add color: pink as li element style property
// Insert each list item into the ul element
// Insert the ul element into the body element

const body = document.querySelector("body");

const numbers = [];

const ul = document.createElement("ul");
body.appendChild(ul);

for(i = 0; i <=100; i++){
  numbers[i] = i;
}

numbers.forEach(function(number, aux){
    aux = document.createElement("li");
    aux.innerText = number;
    ul.appendChild(aux);

    if (number%2 == 0){
      aux.style.color ="green";
    } else {
      aux.style.color ="pink";
    }
});
