// Exercise 12
// Create the following folder/file structure:
// /ex_12
//   |-- index.html
// index.html
// Create a basic HTML document
// Create a script tag on the document head element
// Add a timer to show the user how many seconds has passed sinse he opened the site (every second)
// Use console.log() to show the seconds


let i =0;
const showTime = function(){
  console.log("Passou " + i + " segundos");
  i++;
}

setInterval(showTime, 1000);
