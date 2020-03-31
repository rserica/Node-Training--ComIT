// Select the h1 element
// Define a new variable and store the h1 element content using innerText
// Select the p element
// Define a new variable and store the p element content using textContent
// Replace the h1 element content for the paragraph one
// Replace the p element content for the title one
// Once this code gets executed we get the following result:
//   <h1>This is a paragraph</h1>
//   <p>Main Title</p>

let h1 = document.querySelector('h1');
let p = document.querySelector("p");


h1.innerText = p;
p.textContent =h1;
