// Assignment Code
var generateBtn = document.querySelector("#generate");

// PLEASE ADD ALL YOUR CODE BELOW - asking the user what they want as part of there passowrd, prompts confirms, yes no, capitals, lower case
function generatePassword() {
  //question 1 character length?
  let characters = prompt(
    "What is the length of your password? Please choose between 8 and 128 characters"
  );
  let characters = parseInt(characters);
  if (characters >= 8 && characters <= 128) {
    window.alert = "Input accepted!";
  } else {
    window.alert("Invalid number, please try again within 8 to 128 characters");
    return;
  }
  //question 2 lowercase included?
  const lowerCase = prompt("Would you like to include lowercase characters?");
  //question 3 uppercase uncluded?
  const upperCase = prompt("Would you like to include uppercase characters?");
  //question 4 include numerical?
  const numericals = prompt("Would you like to include numerical characters?");
  //question 5 include special characters?
  const specialCharacters = prompt(
    "Would you like to include special characters?"
  );
}
//
//  Write password to the #password input -
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
