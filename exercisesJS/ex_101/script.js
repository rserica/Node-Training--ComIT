// Exercise 101
// Create a new index101.js file
// Define a function named showUser that will output the following data:
// Your name
// Your age
// Your phone number
// Your street
// Your postal code
// If you're married or not (boolean)



function showUser (name, age, phonenumber, street, postalcode, married){
  console.log(`${name}`);
  console.log(`${age}`);
  console.log(`${phonenumber}`);
  console.log(`${street}`);
  console.log(`${postalcode}`);
  if (married) {
    console.log(`${married}`);
  }
  else {
    console.log(`${married}`);
  }
}

showUser("Babu","44",77373773,"kakariko street","v9v9v9",true);
