// Define a students variable and assign 5 student names from your class, separated by commas
let students = "Andrew, Erica, Bader, Bruce, Malih";
// Define a result variable and use the students variable split method to get a students name array and assign it as result variable value
let result= [students.substr(0,6), students.substr(8,5),students.substr(15,5),students.substr(22,5),students.substr(29,6)] ;

// Show the result value as output: console.log('Students names:', %result%) (something like this)
console.log(`Students names: ${result} `);
