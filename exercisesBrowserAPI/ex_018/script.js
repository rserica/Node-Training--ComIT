// Select the first link element
// Add the blue class if the element has the class attribute
// If not, then add the red class


const linkSelector = document.querySelector("a");

if (linkSelector.hasAttribute("class")){
  linkSelector.classList.toggle("azul");
} else {
  linkSelector.classList.toggle("rojo");
}
