
// Define a hour variable
let hour;
// Asing the hour variable a value between 1 and 24
hour = 19;
if (hour>5 && hour <=12){
  console.log("GOOD MORNING"); // If hour is bettwen 5 to 12 show the following message: Good morning
} else if (hour>12 && hour <=18){
  console.log("GOOD AFTERNOON"); // If hour is bettwen 12 to 18 show the following message: Good afternoon
} if (hour>18 && hour <=22){
  console.log("GOOD EVENING"); // If hour is bettwen 18 to 22 show the following message: Good evening
} else if (hour>22 && hour <=5){
  console.log("GOOD NIGHT"); // If hour is bettwen 22 to 5 show the following message: Good night
} else {
  console.log("Wrong Time");
}



// Change the hour value to test each case
