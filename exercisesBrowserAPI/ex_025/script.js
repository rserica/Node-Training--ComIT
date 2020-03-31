// Select the body element
// Create a h1 element
// Add the h1 element the following content:
// Create Dynamic content!!!
// Create a paragraph element
// Add the p element the following content:
// This elements were created using JavaScript
// Inster the h1 element into the body element
// Inster the paragraph element into the body element

const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.innerText = "Create Dynamic content!!!";

const p = document.createElement("p");
p.innerText = "This elements were created using JavaScript";
body.appendChild(h1);
body.appendChild(p);
