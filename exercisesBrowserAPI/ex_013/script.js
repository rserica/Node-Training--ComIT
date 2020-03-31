// Exercise 13
// Create the following folder/file structure:
// /ex_13
//   |-- index.html
// index.html
// Create a basic HTML document
// Create a script tag on the document head element
// Ask the user to input the number of seconds that he would like to stay in our site
// Show how many seconds left he has using console.log()
// Once the session is over show the following message:
// Your session has expired, come again soon!


let time = window.prompt("How many seconds would you like to stay?");

let i =time;

  const showTime = function(){
      console.log("Faltam " + i + " segundos para o fim da sessão");
      i--;

      if(i==0){
        alert("Your session has expired, come again soon!");
        clearInterval(interval);
      }
  }

    setInterval(showTime, 1000);
