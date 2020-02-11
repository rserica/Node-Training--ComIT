// Use while structure to only sum odd numbers between 0 and 1000
// Show the partial result as output too
var number=0;
var result= 0;

while (number<=1000){
  if(number%2 !=0){
    result = result + number;
    console.log(result);
  }
  number++;
}
