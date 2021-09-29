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
const special = [
  " ",
  "!",
  "\\",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// PLEASE ADD ALL YOUR CODE BELOW -
function generatePassword() {
  combinedCriteria = []; //my empty array to fill up
  // example of user saying yes to lower and upper and no to rest below
  // make this, for each of the proimpt I have gotten from user, i need to adjust this array(add more to it) if the user has said yes to any of them.
  // if user has said yes to prompts, it gets added to array.
  // concanate will combine the two strings together.
  // combinedCriteria = combinedCriteria.concat(upper); //can get rid of this when sorted above array.

  // console.log(combinedCriteria);
  const characters = prompt(
    "What is the length of your password? Please choose between 8 and 128 characters"
  );
  const charactersInt = parseInt(characters);
  if (charactersInt >= 8 && charactersInt <= 128) {
    passwordLength = charactersInt;

    //question 2 lowercase included?
    const lowerCase = confirm(
      "Would you like to include lowercase characters?"
    );
    if (lowerCase) {
      combinedCriteria = combinedCriteria.concat(lower);
    }
    //question 3 uppercase uncluded?
    const upperCase = confirm(
      "Would you like to include uppercase characters?"
    );
    if (upperCase) {
      combinedCriteria = combinedCriteria.concat(upper);
    }
    //question 4 include numerical?
    const numericals = confirm(
      "Would you like to include numerical characters?"
    );
    if (numericals) {
      combinedCriteria = combinedCriteria.concat(number);
    }
    //question 5 include special characters?
    const specialCharacters = confirm(
      "Would you like to include special characters?"
    );
    if (specialCharacters) {
      combinedCriteria = combinedCriteria.concat(special);
    }
  } else {
    window.alert("Invalid number, please try again within 8 to 128 characters");
  }

  //plan selections above, true or false if yes or no etc. or check if I am using confirm prompts intead.

  // passwordLength = 15;

  // const randomElement =
  //   combinedCriteria[Math.floor(Math.random() * combinedCriteria.length)];

  // console.log(randomElement);

  // I want to define a new variable to my password as empty string
  // enter into for loop which will iterate untill the index has hit that password length.
  // for each iteration, the string my password will have a new character added onto it.
  myPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    myPassword =
      myPassword +
      combinedCriteria[Math.floor(Math.random() * combinedCriteria.length)]; // return a single random character everytime
  }
  // once the loop completed the variable will be (password length)characters long.
  // console.log(myPassword);
  // output of the function is below
  return myPassword;
}

//  Write password to the #password input -
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// how can i move stuff from one array to another.
