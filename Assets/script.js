// Assignment Code
var generateBtn = document.querySelector("#generate");

//All characters on the keyboard
var allCharacters = [];
for (let i = 32; i < 127; i++) allCharacters.push(String.fromCharCode(i));

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
  //Password criteria
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
    //Sets password array to the specified length
    var password = [];
    password.length = characterLength;
    //Gets a random number
    function getRandomIndex(arr) {
      var randomIndex = Math.floor(Math.random() * arr.length);
      return randomIndex;
    }
    //All possible password criteria combinations in order
    if (isLower && isUpper && isNumber && isSpecial) {
      password[0] = lowerCharacters[getRandomIndex(lowerCharacters)];
      password[1] = upperCharacters[getRandomIndex(upperCharacters)];
      password[2] = numericCharacters[getRandomIndex(numericCharacters)];
      password[3] = specialCharacters[getRandomIndex(specialCharacters)];
      for (let i = 4; i < characterLength; i++) {
        password[i] = allCharacters[getRandomIndex(allCharacters)];
      }
    } else if (isUpper && isNumber && isSpecial) {
      var mixedCharacters = upperCharacters.concat(
        numericCharacters.concat(specialCharacters)
      );
      password[0] = upperCharacters[getRandomIndex(upperCharacters)];
      password[1] = numericCharacters[getRandomIndex(numericCharacters)];
      password[2] = specialCharacters[getRandomIndex(specialCharacters)];
      for (let i = 3; i < characterLength; i++) {
        password[i] = mixedCharacters[getRandomIndex(mixedCharacters)];
      }
    } else if (isLower && isNumber && isSpecial) {
      var mixedCharacters = lowerCharacters.concat(
        numericCharacters.concat(specialCharacters)
      );
      password[0] = lowerCharacters[getRandomIndex(lowerCharacters)];
      password[1] = numericCharacters[getRandomIndex(numericCharacters)];
      password[2] = specialCharacters[getRandomIndex(specialCharacters)];
      for (let i = 3; i < characterLength; i++) {
        password[i] = mixedCharacters[getRandomIndex(mixedCharacters)];
      }
    } else if (isLower && isUpper && isSpecial) {
      var mixedCharacters = lowerCharacters.concat(
        upperCharacters.concat(specialCharacters)
      );
      password[0] = lowerCharacters[getRandomIndex(lowerCharacters)];
      password[1] = upperCharacters[getRandomIndex(upperCharacters)];
      password[2] = specialCharacters[getRandomIndex(specialCharacters)];
      for (let i = 3; i < characterLength; i++) {
        password[i] = mixedCharacters[getRandomIndex(mixedCharacters)];
      }
    } else if (isLower && isUpper && isNumber) {
      var mixedCharacters = lowerCharacters.concat(
        upperCharacters.concat(numericCharacters)
      );
      password[0] = lowerCharacters[getRandomIndex(lowerCharacters)];
      password[1] = upperCharacters[getRandomIndex(upperCharacters)];
      password[2] = numericCharacters[getRandomIndex(numericCharacters)];
      for (let i = 3; i < characterLength; i++) {
        password[i] = mixedCharacters[getRandomIndex(mixedCharacters)];
      }
    } else if (isLower && isUpper) {
      var mixedCharacters = lowerCharacters.concat(upperCharacters);
      password[0] = lowerCharacters[getRandomIndex(lowerCharacters)];
      password[1] = upperCharacters[getRandomIndex(upperCharacters)];
      for (let i = 2; i < characterLength; i++) {
        password[i] = mixedCharacters[getRandomIndex(mixedCharacters)];
      }
    } else if (isLower && isNumber) {
      var mixedCharacters = lowerCharacters.concat(numericCharacters);
      password[0] = lowerCharacters[getRandomIndex(lowerCharacters)];
      password[1] = numericCharacters[getRandomIndex(numericCharacters)];
      for (let i = 2; i < characterLength; i++) {
        password[i] = mixedCharacters[getRandomIndex(mixedCharacters)];
      }
    } else if (isLower && isSpecial) {
      var mixedCharacters = lowerCharacters.concat(specialCharacters);
      password[0] = lowerCharacters[getRandomIndex(lowerCharacters)];
      password[1] = specialCharacters[getRandomIndex(specialCharacters)];
      for (let i = 2; i < characterLength; i++) {
        password[i] = mixedCharacters[getRandomIndex(mixedCharacters)];
      }
    } else if (isUpper && isNumber) {
      var mixedCharacters = upperCharacters.concat(numericCharacters);
      password[0] = upperCharacters[getRandomIndex(upperCharacters)];
      password[1] = numericCharacters[getRandomIndex(numericCharacters)];
      for (let i = 2; i < characterLength; i++) {
        password[i] = mixedCharacters[getRandomIndex(mixedCharacters)];
      }
    } else if (isUpper && isSpecial) {
      var mixedCharacters = upperCharacters.concat(specialCharacters);
      password[0] = upperCharacters[getRandomIndex(upperCharacters)];
      password[1] = specialCharacters[getRandomIndex(specialCharacters)];
      for (let i = 2; i < characterLength; i++) {
        password[i] = mixedCharacters[getRandomIndex(mixedCharacters)];
      }
    } else if (isNumber && isSpecial) {
      var mixedCharacters = numericCharacters.concat(specialCharacters);
      password[0] = numericCharacters[getRandomIndex(numericCharacters)];
      password[1] = specialCharacters[getRandomIndex(specialCharacters)];
      for (let i = 2; i < characterLength; i++) {
        password[i] = mixedCharacters[getRandomIndex(mixedCharacters)];
      }
    } else if (isLower) {
      for (let i = 0; i < characterLength; i++) {
        password[i] = lowerCharacters[getRandomIndex(lowerCharacters)];
      }
    } else if (isUpper) {
      for (let i = 0; i < characterLength; i++) {
        password[i] = upperCharacters[getRandomIndex(upperCharacters)];
      }
    } else if (isNumber) {
      for (let i = 0; i < characterLength; i++) {
        password[i] = numericCharacters[getRandomIndex(numericCharacters)];
      }
    } else if (isSpecial) {
      for (let i = 0; i < characterLength; i++) {
        password[i] = specialCharacters[getRandomIndex(specialCharacters)];
      }
    }
    console.log(password);
    //converts the passwork array into a string
    return password.join("");
  } else {
    //So we can restart the function right away if the length of characters wasnt valid
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
