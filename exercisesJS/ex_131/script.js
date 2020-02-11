// Exercise 131
// Create a new index131.js file
// Define a femaleStudents array and assign 5 students
// Define a maleStudents array and assign 5 students
// Define a students array and assign all students name using the femaleStudents and maleStudents arrays
// Sort the students list
// Show the following output:
// Each femaleStudents name using numeric indexes
// Each maleStudents name using while
// Each students name using for

let femaleStudents = ["Ariana","Mariah","Beyonce","Rosalia","Billy"];
let maleStudents = ["Harry","Frodo","Gandalf","Dublendore","Sam"];

let students= [];

// Define a students array and assign all students name using the femaleStudents and maleStudents arrays
femaleStudents.forEach(function(student){
  students.push(student);
});
maleStudents.forEach(function(student){
  students.push(student);
});

// Sort the students list
console.log("*****Sort Students List:*****");
students = students.sort();
console.log(students);


// Each femaleStudents name using numeric indexes
let i=1;
console.log("*****Each femaleStudents name using numeric indexes: *****");
femaleStudents.forEach(function(student){
  console.log(`${i} - ${student}`);
  i++;
});

// Each maleStudents name using while
let j =0;
console.log("*****Each maleStudents name using while*****");
while (j <maleStudents.length){
console.log(`${maleStudents[j]}`);
j++;
}

// Each students name using for
console.log("*****Each students name using for*****");
for (let k=0; k<students.length; k++) {
  console.log(students[k]);
}
