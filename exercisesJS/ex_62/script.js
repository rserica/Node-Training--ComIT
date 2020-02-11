// Define monthNumber variable and assign a number between 1 and 12
var monthNumber = 2;
// Define monthName variable and assign null as value
var monthName = null;
// define monthDays variable and assign null as value
var monthDays = null;
// Use a switch statement
// Depending the monthNumber value assign the corresponding monthName and monthDays values
// January - 31 days
// February - 28 days in a common year and 29 days in leap years
// March - 31 days
// April - 30 days
// May - 31 days
// June - 30 days
// July - 31 days
// August - 31 days
// September - 30 days
// October - 31 days
// November - 30 days
// December - 31 days

switch (monthNumber) {
  case 01:
    monthName = "January";
    monthDays = 31;
    break;
    case 02:
    monthName = "February";
    monthDays = "28 days in a common year and 29 days in leap years";
      break;
    case 03:
      monthName = "March";
      monthDays = "31 days";
      break;
    case 04:
      monthName = "April";
      monthDays = "30 days";
      break;
    case 05:
    monthName = "May";
    monthDays = "31 days";
    break;
    case 06:
      monthName = "June";
      monthDays = "30 days";
      break;
    case 07:
      monthName = "July";
      monthDays = "31 days";
      break;
    case 08:
      monthName = "August";
      monthDays = "31 days";
      break;
    case 09:
      monthName = "September";
      monthDays = "30 days";
      break;
    case 10:
      monthName = "October";
      monthDays = "31 days";
      break;
    case 11:
      monthName = "November";
      monthDays = "30 days";
      break;
    case 12:
      monthName = "December";
      monthDays = "30 days";
      break;
    default:
     message = 'Error';
}

// If monthName & monthDays are null then show an error message
// Else show the following message: %monthName% is the selected month and has %monthDays%
// Try all the posible cases/scenarios (even the error message) by changing the weekdayNumber value
  if (monthName==null && monthDays==null) {
    console.log("Error");
  } else{
    console.log(`${monthName} is the selected month and has ${monthDays} `);
  }
