// Select the element with the important id using getElementById selector

const importantSelect = document.getElementById("important");
console.log(importantSelect);
// Select all elements that are inside a list item element using querySelectorAll
const listSelect = document.querySelectorAll("li");

console.log("Select all elements that are inside a list item element using querySelectorAll");
listSelect.forEach(function(element){
  console.log(element);
});

// Select the ul element using querySelector
const ulSelect = document.querySelector("ul");
console.log("Select the ul element using querySelector");
console.log(ulSelect);

// Select the element with the blue class use the proper selector
const classSelect = document.querySelector(".blue");
console.log("Select the element with the blue class use the proper selector")
console.log(classSelect);

// Show all selected elements using console.log as output
