// Create a basic HTML document
// Create a style tag
// Add a striked class and add the following css properties:
// Text decoration: striked
// Select all the li elements and change the cursor property and assing pointer as value
// Create a script tag on the document head element
// Dynamically create a ul element
// Define a weeklyChores array and assign 10 chores that you have to do this week
// Create an li element for each item in the weeklyChores array and assign the chore name
// Add a click event handler to each li element
// Toggle the striked class when the user clicks the li element
// Add the li elements to the ul element
// Add the ul element to the body element
// At the end you need to see a list of 10 chores that you can click on to show that it's done

const body = document.querySelector("body");
const list = document.querySelector("li");
const ul = document.createElement("ul");


const weeklyChores = ["Wake up", "Brush my teeth", "Study", "Make art", "Work on my business", "Sleep", "Make the Lunch", "Talk to my family", "Watch TV", "Play videogames"];

body.appendChild(ul);
weeklyChores.forEach(function(task,li) {
  li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = task;

  li.addEventListener("click", function(){
    li.classList.add("striked");
  });
});
