// Select the ul element
// Select each list item and assign it to a variable (use children property)
// Remove each list item from the ul element using removeChild


const list = document.querySelector("ul");
let chil = list.children;
let chilLength = chil.length;
let l = chilLength;
    // while(chilLength) {
    //   list.removeChild(list.children.item(chilLength));
    //   console.log(list.children.item(chilLength));
    //   i--;
    // }
    for(let i=chilLength; i>=0; i--) {
      list.removeChild(list.children.item(0));
      console.log(list.children.item(l));
      l--;
    }
