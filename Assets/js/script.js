// Assignment Code
var generateBtn = document.querySelector("#generate");

// PLEASE ADD ALL YOUR CODE BELOW -
function generatePassword() {
  const lower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  //  const special = [" ","!","\"","#","$","%","&","'","(",")","\","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\","]","^","\","_","`","{","|","}","~"];

  combinedCriteria = [];
  combinedCriteria = combinedCriteria.concat(lower, upper);

  console.log(combinedCriteria);

  passwordLength = 15;

  const randomElement =
    combinedCriteria[Math.floor(Math.random() * combinedCriteria.length)];

  console.log(randomElement);
  /*
  myPassword = "";
  for (let i=0; i < passwordLength; i++) {
    myPassword = myPassword + combinedCriteria[Math.floor(Math.random() * combinedCriteria.length)];
  }

  console.log(myPassword);
*/
}

//  Write password to the #password input -
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*  Write password to the #password input - 
taking value of generate password, 
whatever comes out of generate password function above gets put into the password variable, 
putting the generated password value into the password box on the html side so users can see it.
need to use some sort of alert, prompt, confirm boxes apprently */

// function generatePassword() {
// //   //question 1 character length?
// //   let characters = prompt(
// //     "What is the length of your password? Please choose between 8 and 128 characters"
// //   );
// //   let characters = parseInt(characters);
// //   if (characters >= 8 && characters <= 128) {
// //     window.alert = "Input accepted!";
// //   } else {
// //     window.alert("Invalid number, please try again within 8 to 128 characters");
// //     return;
// //   }
// //   //question 2 lowercase included?
// //   const lowerCase = prompt("Would you like to include lowercase characters?");
// //   //question 3 uppercase uncluded?
// //   const upperCase = prompt("Would you like to include uppercase characters?");
// //   //question 4 include numerical?
// //   const numericals = prompt("Would you like to include numerical characters?");
// //   //question 5 include special characters?
// //   const specialCharacters = prompt(
// //     "Would you like to include special characters?"
// //   );
// // }
