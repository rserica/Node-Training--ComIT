// Exercise 115
// Create a new index115.js file
// Define a getLongerText that accepts two string values
// This function returns the longer text
// After calling the function show the longer word as output
// Call this function 3 times with different words


function getLongerText(text1, text2){
  let longer = "";
  if(text1.length> text2.length){
    longer = text1;
  } else if(text1.length == text2.length) {
    longer = "Same size";
  }  else {
    longer = text2;
  }
  console.log(longer);
  return longer;
}

getLongerText("chocolate","coffee");
getLongerText("dust", "perimeter");
getLongerText("onion", "leeks");
getLongerText("Portuguese", "English");
