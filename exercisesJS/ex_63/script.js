// Define year variable and assign a number between 2006 and 2017
var year = 2015;
// Define champion variable and assing a value between 2006 and 2017
var champion = null;
// Show the following output depending the selected year: %champion% was the %year% NHL Champion
// If the value it's not bettwen 2006 and 2017 show the following error: Sorry, please try a differnt year
// Use a switch statement to check for the selected year value
// 2017 - Pittsburgh Penguins
// 2016 - Pittsburgh Penguins
// 2015 - Chicago Blackhawks
// 2014 - Los Angeles Kings
// 2013 - Chicago Blackhawks
// 2012 - Los Angeles Kings
// 2011 - Boston Bruins
// 2010 - Chicago Blackhawks
// 2009 - Pittsburgh Penguinas
// 2008 - Detroit Red Wings
// 2007 - Anaheim Ducks
// 2006 - Carolina Hurricanes
switch (year) {
  case 2017:
    champion= "Pittsburgh Penguins";
    break;
  case 2016:
    champion= "Pittsburgh Penguins";
    break;
  case 2015:
    champion= "Chicago Blackhawks";
    break;
  case 2014:
    champion= "Los Angeles Kings";
    break;
  case 2013:
    champion= "Chicago Blackhawks";
    break;
  case 2012:
    champion= "Los Angeles Kings";
    break;
  case 2011:
    champion= "Boston Bruins";
    break;
  case 2010:
    champion= "Chicago Blackhawks";
    break;
  case 2009:
    champion= "Pittsburgh Penguinas";
    break;
  case 2008:
    champion= "Detroit Red Wings";
    break;
  case 2007:
    champion= "Anaheim Ducks";
    break;
  case 2006:
    champion= "Carolina Hurricanes";
    break;
  default:
    const message = 'Sorry, please try a differnt year';
}

if (year >= 2006 && year <= 2017) {
  console.log(`${champion} was the ${year} NHL Champion`);
} else {
  console.log(message);
}
