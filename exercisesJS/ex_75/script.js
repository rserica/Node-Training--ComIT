// Exercise 75
// Create a new index75.js file
// Write a program that will show the first 10 Fibonacci sequence numbers

var x0 = 0;
var x1 = 1;
var xn= 0;
var xn1=0;
var xn2=0;
var i=0;

while ( i <=10) {
  if (i==0){
    console.log(x0);
    xn2= 0;
    i++;
  }
  else if(i==1) {
    console.log(x1);
    xn1 = 1;
    i++
  } else {
    xn = xn1 +xn2;
    console.log(xn);
    xn1 = xn2;
    xn2 = xn;
    i++;
  }


}
