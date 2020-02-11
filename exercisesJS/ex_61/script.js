// Define weekdayNumber and assign a numeric value between 1 and 7
var weekdayNumber = 0;
// If weekday number is 1 show the following message: Today it's Monday
if (weekdayNumber==1) {
  console.log("Today it´s Monday");
}
// If weekday number is 2 show the following message: Today it's Tuesday
else if (weekdayNumber==2) {
  console.log("Today it´s Tuesday");
}
// If weekday number is 3 show the following message: Today it's Wednesday
else if (weekdayNumber==3) {
  console.log("Today it´s Wednesday");
}
// If weekday number is 4 show the following message: Today it's Thursday
else if (weekdayNumber==4) {
  console.log("Today it´s Thursday");
}
// If weekday number is 5 show the following message: Today it's Friday
else if (weekdayNumber==5) {
  console.log("Today it´s Friday");
}
// If weekday number is 6 show the following message: Today it's Saturday
else if (weekdayNumber==6) {
  console.log("Today it´s Saturday");
}
// If weekday number is 7 show the following message: Today it's Sunday
else if (weekdayNumber==7) {
  console.log("Today it´s Sunday");
}
// If weekday number it's not bettwen 1 and 7 show an error message: Error: Please input a number bettwen 1 and 7
else if (weekdayNumber<1 || weekdayNumber > 7) {
  console.log("Error: Please input a number bettwen 1 and 7");
}
