// Exercise 154
// Create a new index154.js
// Define a player variable and assign a literal object with the following properties and methods:
// property: name, value: null
// property: energy, value: 100
// property: lives, value: 3
// method: loseEnergy
// method: recoverEnergy
// method: loseLife
// method: recoverLife
// Methods
// The loseEnergy accepts a damage numeric parameter and reduces the player object energy property value
// The recoveryEnergy accepts a energyUp numeric parameter and restores the player object energy property value
// The loseLife doesn't accept parameters and just subtract one player life every time you call it
// The recoverLife doesn't accept parameters and just adds one player life every time you call it
// Rules
// The player energy can't be negative
// The player energy can't be more than 100
// The player lives can't be bigger thant 99
// If the player energy is equal or lees than 0 then the player will lose a life
let player = {
  name: null,
  energy: 100,
  lives: 3,
  loseEnergy: function(damage){
    this.energy = this.energy - damage;
    if(this.energy<=0) {
        this.loseLife();
        this.energy =0;
    }
  },
  recoverEnergy: function(energyUp){
    if(this.energy<=100) {
    this.energy = this.energy + energyUp;
    }
  },
  loseLife: function (){
      this.lives--;

  },
  recoverLife: function (){
    if (this.lives<=99){
    this.lives++; }
  },
}

// Play Time!!!
// Set the player name
player.name = "Ed";
console.log(`Player name: ${player.name}`);
// Player lose a life
console.log("Lives: " +player.lives);
player.loseLife();
console.log("Lives: " +player.lives);
// Player lose 10 energy value
console.log("Energy: " +player.energy);
player.loseEnergy(10);
console.log("Energy: " +player.energy);
// Player lose 5 energy value
player.loseEnergy(5);
console.log("Energy: " +player.energy);
// Player lose 15 energy value
player.loseEnergy(15);
console.log("Energy: " +player.energy);
// Player lose 20 energy value
player.loseEnergy(20);
console.log("Energy: " +player.energy);
// Player earn 10 energy value
player.loseEnergy(10);
console.log("Energy: " +player.energy);
// Player lose 30 energy value
player.loseEnergy(30);
console.log("Energy: " +player.energy);
// Player lose 40 energy value
player.loseEnergy(40);
console.log("Energy: " +player.energy);
console.log("Lives: " +player.lives);
// Player lose a life
console.log("Lives: " +player.lives);
player.loseLife();
console.log("Lives: " +player.lives);
// Player wins a life
player.recoverLife();
console.log("Lives: " +player.lives);
// Player wins a life
player.recoverLife();
console.log("Lives: " +player.lives);
// Simulate each game play using the players object methods
// Show the following output after doing all the object methods calls
// The %player name% has %energy% energy % and  %lifes% lifes
console.log(`The ${player.name} has ${player.energy}% energy and ${player.lives} lifes`);
