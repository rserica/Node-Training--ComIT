// Select the first list item element and add the orange class
// Using the selected element select the following element using nextElementSibling and add the orange class
// Keep doing this until there's no more siblings
// At the end all elements must have the orange class
// Once you acomplish this task:
// Now we need to go back using previousElementSibling
// Add red class to Item 3
// Add green class to Item 1
// Final result on the browser must be:


const li = document.querySelector("li");
console.log(li);
li.classList.add("orange");
let liEl = li.nextElementSibling;
do {
  liEl.classList.add("orange");
  liEl = liEl.nextElementSibling;
  console.log(liEl);
} while (liEl);

// part II
const li2 = document.querySelectorAll("li");
li2[3].className = "red";
li2[0].className = "green"
