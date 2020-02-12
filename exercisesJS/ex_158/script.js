// Exercise 158
// Create a new index158.js
// Copy and paste the code from the previous exercise ()
// Refactor the code to match new requirements
// Define a budget variable
// Add all PS4 games price and assign it to the budget variable
// Show the following message as output:
// I need %budget% CAD to get all this PS$ great games!!
// Define a new gameNames array and assign all the games names (all strings)
// Define a new gamePrices array and assign all the games prices (all numbers)
// Show the gameNames items as output
// Show the gamePrices items as output

let budget = 0
let cons = ["XBOX","PS4"];
let games = [
  {
    name:"Crash Bandicoot N. Sane Trilogy",
    price: 1060,
    sold: 20,
    console: "PS4",
    showDetail: function (){
      console.log("****************************");
      console.log("Name: "+ this.name);
      console.log("Price: $"+ this.price);
      console.log("Sold: $"+ this.sold);
      console.log("Console: "+ this.console);
    }
  },
  {
    name:"Lego Marvel Super Heroes",
    price: 700,
    sold: 25,
    console: "XBOX",
    showDetail: function (){
      console.log("****************************");
      console.log("Name: "+ this.name);
      console.log("Price: $"+ this.price);
      console.log("Sold: $"+ this.sold);
      console.log("Console: "+ this.console);
    }
  },
  {
    name:"Gta V",
    price: 1449,
    sold: 30,
    console: "PS4",
    showDetail: function (){
      console.log("****************************");
      console.log("Name: "+ this.name);
      console.log("Price: $"+ this.price);
      console.log("Sold: $"+ this.sold);
      console.log("Console: "+ this.console);
    }
  },
  {
    name:"Mortal Kombat Xl",
    price: 1190,
    sold: 34,
    console: "PS4",
    showDetail: function (){
      console.log("****************************");
      console.log("Name: "+ this.name);
      console.log("Price: $"+ this.price);
      console.log("Sold: $"+ this.sold);
      console.log("Console: "+ this.console);
    }
  },
  {
    name:"Gta V",
    price: 1250,
    sold: 60,
    console: "XBOX",
    showDetail: function (){
      console.log("****************************");
      console.log("Name: "+ this.name);
      console.log("Price: $"+ this.price);
      console.log("Sold: $"+ this.sold);
      console.log("Console: "+ this.console);
    }
  },
  {
    name: "Fifa 2017",
    price: 890,
    sold: 15,
    console: "PS4",
    showDetail: function (){
      console.log("****************************");
      console.log("Name: "+ this.name);
      console.log("Price: $"+ this.price);
      console.log("Sold: $"+ this.sold);
      console.log("Console: "+ this.console);
    }
  },
  {
    name: "Uncharted 4",
    price: 950,
    sold: 30,
    console: "PS4",
    showDetail: function (){
      console.log("****************************");
      console.log("Name: "+ this.name);
      console.log("Price: $"+ this.price);
      console.log("Sold: $"+ this.sold);
      console.log("Console: "+ this.console);
    }
  },
  {
    name: "Mortal Kombat Xl",
    price: 940,
    sold: 30,
    console: "XBOX",
    showDetail: function (){
      console.log("****************************");
      console.log("Name: "+ this.name);
      console.log("Price: $"+ this.price);
      console.log("Sold: $"+ this.sold);
      console.log("Console: "+ this.console);
    }
  },
  {
    name: "Need For Speed",
    price: 790,
    sold: 10,
    console: "PS4",
    showDetail: function (){
      console.log("****************************");
      console.log("Name: "+ this.name);
      console.log("Price: $"+ this.price);
      console.log("Sold: $"+ this.sold);
      console.log("Console: "+ this.console);
    }
  },
  {
    name: "Fifa 17",
    price: 1290,
    sold: 12,
    console: "PS4",
    showDetail: function (){
      console.log("****************************");
      console.log("Name: "+ this.name);
      console.log("Price: $"+ this.price);
      console.log("Sold: $"+ this.sold);
      console.log("Console: "+ this.console);
    }
  },
  {
    name: "Resident Evil 7",
    price: 1390,
    sold: 10,
    console:"PS4",
    showDetail: function (){
      console.log("****************************");
      console.log("Name: "+ this.name);
      console.log("Price: $"+ this.price);
      console.log("Sold: $"+ this.sold);
      console.log("Console: "+ this.console);
    }
  },
  {
    name: "Dragon Ball XX",
    price: 1390,
    sold: 25,
    console: "XBOX",
    showDetail: function (){
      console.log("****************************");
      console.log("Name: "+ this.name);
      console.log("Price: $"+ this.price);
      console.log("Sold: $"+ this.sold);
      console.log("Console: "+ this.console);
    }
  }
];

let gameFilter = games.filter(function (game){
  return game.console==cons[1];
});

// Add all PS4 games price and assign it to the budget variable
gameFilter.forEach( function(game){
  budget = budget + game.price;
  game.showDetail();
});

// Show the following message as output:

console.log(`I need ${budget} CAD to get all this PS4 Great Games`);

//Define a new gameNames array and assign all the games names (all strings)
let gameNames = [];
games.forEach(function(game){
  gameNames.push(game.name);
});
console.log("******Game Names ******");
console.log(gameNames);

//Define a new gamePrices array and assign all the games prices (all numbers)
let gamePricing = [];
games.forEach(function(game){
  gamePricing.push(game.price);
});
console.log("******Game Prices ******");
console.log(gamePricing);
