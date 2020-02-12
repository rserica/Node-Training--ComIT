// Exercise 139
// Create a new index139.js file
// Define a numbers array with values between 1000 and 1
// Iterate over the numbers array and filter the following values creating new arrays for each type:
// Even numbers
// Odd numbers
// Show the last 10 odd numbers as output
// Show the first 20 even numbers as output

let numbers =[];

console.log("oioi");
for (let i=1; i<=1000; i++){
   numbers[i-1]= 1000-i+1;
  // console.log(numbers[i]);
}

let evenNumbers = numbers.filter(function(number,index){
  if (index>=980 && index<=1000){
    return number%2==0;
  }
});

let oddNumbers = numbers.filter(function(number,index){
  if (index>=0 && index<=40){
  return number%2!=0; }
});

console.log(evenNumbers);
console.log(oddNumbers);
