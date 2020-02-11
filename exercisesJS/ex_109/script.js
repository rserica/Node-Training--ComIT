// Exercise 109
// Create a new index109.js file
// Define a validateUser function that accepts the following parameters: username and password
// This function returns true or false if username and password match any of the following values:
// username: nacho, password: Nerd1979
// username: pedro, password: Batman0217
// username: marta, password: Mother2312
// Show the following output if username and password belong to a user: Welcome %username%, nice to see you again
// Show the following output if username and password don't belong to a user: Please input valid credentials
// Try calling the validateUser with valid credentials and also with invalid ones


const validateUser = function(username, password){
  if ((username=="nacho" && password=="Nerd1979") || (username=="pedro" && password=="Batman0217") || (username=="marta" && password=="Mother2312")){
    console.log(`Welcome ${username}, nice to see you again`);
    return true;
  }
  else{
    console.log("Please input valid credentials");
    return false;
  }
}


validateUser("nacho","Nerd1979");
validateUser("pedro","Batman0217");
validateUser("marta", "Mother2312");
validateUser("mart1", "Mother2312");
validateUser("marta", "other2312");
