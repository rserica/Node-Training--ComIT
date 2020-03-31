// Select the h1 and div element and assign them to a new variable
// If any of these elements has attributes then add the striked class to both of them
// Else add the bold class
// Remove the name attribute from the div element (use the web console elements tab to see the result)


const elementDiv = document.querySelector("div");
const elementH1 = document.querySelector("h1");

if (elementDiv.hasAttributes()){
  elementDiv.classList.add("striked");
} else {
  elementDiv.classList.add("bold");
}

if (elementH1.hasAttributes()){
  elementH1.classList.add("striked");
} else {
  elementH1.classList.add("bold");
}
