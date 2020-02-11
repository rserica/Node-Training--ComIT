// Exercise 97
// Create a new index97.js file
// Write the code to show numbers bettwen 10000 and 0 using for
// Show all the numbers as output
// Every 10 numbers show the number but with the following format: ** number **
// Example:
// 10000
// 9999
// 9998
// 9997
// 9996
// 9995
// 9994
// 9993
// 9992
// 9991
// ** 9990 **
// 9989
// and so on...
// 0


for (var i=1; i<=1000; i++) {
  if (i%10==0){
    console.log(`**${i}**`);
  }else {
    console.log(i);
  }
}
