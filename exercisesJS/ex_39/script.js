// Define a firstName variable and assign your name as it's value
firstName = "Coraline";
// Define a lastName variable and assign your last name as it's value
lastName = "Gail"
// Show the following output:
// My first name is %firstName% and it is %nameCharacters% characters long
console.log(`My first name is ${firstName} and it is ${firstName.length} characters long`);
// My last name is %lastName% and it is %lastNameCharacters% characters long
console.log(`My first name is ${lastName} and it is ${lastName.length} characters long`);
// The character difference between my first name and last name is %charsDiff%
let charsDiff = firstName.length - lastName.length;
// My first name is longer than my last name: true or false
console.log(`My first name is longer than my last name:${firstName.length > lastName.length && charsDiff >=0}`);
