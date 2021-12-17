// My Criteria Arrays
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

const myPasswordFail = "Try again!";

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  combinedCriteria = [];

  const characters = prompt(
    "What is the length of your password? Please choose between 8 and 128 characters"
  );
  const charactersInt = parseInt(characters);
  if (charactersInt >= 8 && charactersInt <= 128) {
    passwordLength = charactersInt;
  } else {
    window.alert("Invalid number, please try again within 8 to 128 characters");
    return myPasswordFail;
  }

  let userSelectedCharOption = false;
  const lowerCase = confirm("Would you like to include lowercase characters?");
  if (lowerCase) {
    userSelectedCharOption = true;
    combinedCriteria = combinedCriteria.concat(lower);
  }

  const upperCase = confirm("Would you like to include uppercase characters?");
  if (upperCase) {
    userSelectedCharOption = true;
    combinedCriteria = combinedCriteria.concat(upper);
  }
  const numericals = confirm("Would you like to include numerical characters?");
  if (numericals) {
    userSelectedCharOption = true;
    combinedCriteria = combinedCriteria.concat(number);
  }

  const specialCharacters = confirm(
    "Would you like to include special characters?"
  );
  if (specialCharacters) {
    userSelectedCharOption = true;
    combinedCriteria = combinedCriteria.concat(special);
  }

  if (!userSelectedCharOption) {
    return "Try selecting a character option next time...";
  }

  myPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    myPassword =
      myPassword +
      combinedCriteria[Math.floor(Math.random() * combinedCriteria.length)]; // return a single random character everytime
  }
  return myPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
