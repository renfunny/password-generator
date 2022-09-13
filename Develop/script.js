// Assignment Code
var generateBtn = document.querySelector("#generate");

//All characters on the keyboard
var allCharacters = [];
for (let i = 32; i < 127; i++) allCharacters.push(String.fromCharCode(i));
console.log(allCharacters);

//We start by breaking down the allCharacters array into the different types of characters it holds

var specialCharacters = allCharacters
  .slice(0, 16)
  .concat(
    allCharacters
      .slice(26, 33)
      .concat(allCharacters.slice(59, 65).concat(allCharacters.slice(91, 95)))
  );
var numericCharacters = allCharacters.slice(17, 26);
var lowerCharacters = allCharacters.slice(65, 91);
var upperCharacters = allCharacters.slice(33, 59);

function generatePassword() {
  //Password Length
  var characterLength = Number(
    window.prompt(
      "How many characters would you like the password to be? \n(Must choose between 8-128 characters)"
    )
  );

  //To cancel
  if (!characterLength) {
    return;
  }

  if (characterLength >= 8 && characterLength <= 128) {
    var isLower = window.confirm(
      `Would you like to include lower case characters?`
    );
    var isUpper = window.confirm(
      `Would you like to include upper case characters?`
    );
    var isNumber = window.confirm(`Would you like to include numbers?`);
    var isSpecial = window.confirm(
      `Would you like to include special characters?`
    );

    var password = [];

    function getRandomIndex(arr) {
      var randomIndex = Math.floor(Math.random() * arr.length);
      return randomIndex;
    }

    if (isLower) {
      for (let i = 0; i < characterLength; i++) {
        password[i] = lowerCharacters[getRandomIndex(lowerCharacters)];
      }
    }
    return password.toString().replaceAll(`,`, ``);
  } else {
    //So we can restart the funtion right away if the length of characters wasnt valid
    var restart = function () {
      var tryAgain = window.confirm(
        `Not a valid character length, please try again!`
      );
      if (!tryAgain) {
        return;
      } else {
        generatePassword();
      }
    };
    restart();
  }
}

// Write pasword to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
writePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
