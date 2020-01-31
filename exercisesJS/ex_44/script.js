// Define a text variable and assign the following value: HELLO
let text = "HELLO";
// Define a result variable
let result="";
// Get each char from the text variable and revert the text assigning it to the result variable
let j = text.length;
for (let i=0; i<= text.length; i++) {
  result= result+text.charAt(j);
  j--;
}
// At the end you should be able to show the following text: OLLEH
// Once you reverted the text, transform it to lowercase
// Show the final output: the final result is: olleh
console.log(`The final result is: ${result.toLowerCase()}`);
// It kind of sound spanish, right?.. ole!!! (lol)
