// Create a basic HTML document
// Create a script tag on the document head element
// Select the link element and add a onmouseover event handler
// Change the link style (background color) when the user hovers the link element using JavaScript
// The background color must be:
// First time: red
// Second time: blue
// Third time: green
// Fourth time: gray
// After four times: white
// Add the link element a onmouseout event handler and show the following alert:
// The link background color is: %backgroundColor%

const link = document.querySelector("a");
let counter = 0;

link.addEventListener("mouseover",function(){
  if(counter ==1){
    link.style.background = "red";
  }
  if(counter ==2){
    link.style.background = "blue";
  }
  if(counter ==3){
    link.style.background = "green";
  }
  if(counter ==4){
    link.style.background = "gray";
  }
  if(counter> 4){
    link.style.background = "white";
  }
  counter++;
});

link.addEventListener("mouseout", function(){
  console.log("background: " + link.style.background);
});
