// Exercise 113
// Create a new index113.js file
// Define the function getShapePerimiter that accepts 2 parameters: base and height
// If base and height are equal then calculate the perimeter of a square
// If base and height are not equal then calculate the perimeter of a rectangle
// This function returns a number that represents the shape perimiter
// Show the following output: %perimiter% is the shape perimiter
// If the perimeter is bigger than 100 then show the following output: The perimiter is to big
// Else show the following message: The perimiter is fine
// Call this function a couple of times with different values
// Test all posible cases


const getShapePerimiter = function(base, height) {
  let perimeter = 2*base+ 2*height;
  if (base==height && perimeter <=100) {
    console.log(`${perimeter} is a square`);
  } else if (base != height && perimeter <=100) {
      console.log(`${perimeter} is a retangle`);
    }
    else {
      console.log("The perimeter is too big");
    }
}

getShapePerimiter(10,10);
getShapePerimiter(100,10);
getShapePerimiter(1,10);
