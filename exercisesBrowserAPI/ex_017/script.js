// Select the first link element
// Add the user selected color as class name to the selected element (first link)
// Avoid adding the class if the user inputs a color that's not an option
// So if the user selects blue as color we need to add the blue class to the first link

const firstLinkSelection = document.querySelector("a");
const userSelection = window.prompt("Choose a color: Red, green or blue");
firstLinkSelection.classList.toggle(userSelection);
console.log(firstLinkSelection);
