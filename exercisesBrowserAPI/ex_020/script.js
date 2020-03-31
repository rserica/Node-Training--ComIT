// Select the ul element
// Show the ul children elements as output
// Select the 2nd child element, assign it to a variable and assign the green class to it
// Select the 4th child element, assign it to a variable and assign the red class to it
// Use the selected child elements to show the parent one as output
// Using one of the child elements get a reference to the parent and add the orange class to it

const ul = document.querySelector("ul");
const ulChildren = ul.children;
  console.log(ul);
ulChildren[2].classList.add("green");
ulChildren[4].classList.add("red");

const parent = ulChildren[2].parentElement;

console.log(parent);
parent.classList.add("orange");
