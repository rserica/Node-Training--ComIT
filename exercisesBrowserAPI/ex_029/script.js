// Select the ul element
// Select each list item and assign it to a variable (use children property)
// Remove each list item from the ul element using removeChild


const list = document.querySelector("ul");
let chil = list.children;
let chilLength = chil.length;

// // list.removeChild(list.childNodes[0]);
// // list.removeChild(list.childNodes[1]);
// // list.removeChild(list.childNodes[2]);
// // list.removeChild(list.childNodes[3]);
// list.removeChild(list.children.item(4));
// list.removeChild(list.children.item(5));
// list.removeChild(list.children.item(6));




for(let i=0; i<=chilLength; i++) {
  list.removeChild(list.children.item(0));
  console.log(list.children.item(0));
}
