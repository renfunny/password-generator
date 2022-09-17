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

    //Functions that take in the different character arrays, concatenates them and uses that new mixed array to pull random characters into the password array. The first indexes of the paswword array are set to follow the criterias given, while the rest are randomly pulled. This all ensures there is always atleast one character from each criteria while the rest are random.
    var fourCriterias = function (arr1, arr2, arr3, arr4) {
      //Here we dont concatenate the arrays since we can use the array containing all character types
      password[0] = arr1[getRandomIndex(arr1)];
      password[1] = arr2[getRandomIndex(arr2)];
      password[2] = arr3[getRandomIndex(arr3)];
      password[3] = arr4[getRandomIndex(arr4)];
      for (let i = 4; i < characterLength; i++) {
        password[i] = allCharacters[getRandomIndex(allCharacters)];
      }
      return password;
    };
    var threeCriterias = function (arr1, arr2, arr3) {
      var mixedCharacters = arr1.concat(arr2.concat(arr3));
      password[0] = arr1[getRandomIndex(arr1)];
      password[1] = arr2[getRandomIndex(arr2)];
      password[2] = arr3[getRandomIndex(arr3)];
      for (let i = 3; i < characterLength; i++) {
        password[i] = mixedCharacters[getRandomIndex(mixedCharacters)];
      }
      return password;
    };
    var twoCriterias = function (arr1, arr2) {
      var mixedCharacters = arr1.concat(arr2);
      password[0] = arr1[getRandomIndex(arr1)];
      password[1] = arr2[getRandomIndex(arr2)];
      for (let i = 2; i < characterLength; i++) {
        password[i] = mixedCharacters[getRandomIndex(mixedCharacters)];
      }
      return password;
    };
    var oneCriteria = function (arr) {
      for (let i = 0; i < characterLength; i++) {
        password[i] = arr[getRandomIndex(arr)];
      }
      return password;
    };

    //All possible password criteria combinations in order
    if (isLower && isUpper && isNumber && isSpecial) {
      fourCriterias(
        lowerCharacters,
        upperCharacters,
        numericCharacters,
        specialCharacters
      );
    } else if (isUpper && isNumber && isSpecial) {
      threeCriterias(upperCharacters, numericCharacters, specialCharacters);
    } else if (isLower && isNumber && isSpecial) {
      threeCriterias(lowerCharacters, numericCharacters, specialCharacters);
    } else if (isLower && isUpper && isSpecial) {
      threeCriterias(lowerCharacters, upperCharacters, specialCharacters);
    } else if (isLower && isUpper && isNumber) {
      threeCriterias(lowerCharacters, upperCharacters, numericCharacters);
    } else if (isLower && isUpper) {
      twoCriterias(lowerCharacters, upperCharacters);
    } else if (isLower && isNumber) {
      twoCriterias(lowerCharacters, numericCharacters);
    } else if (isLower && isSpecial) {
      twoCriterias(lowerCharacters, specialCharacters);
    } else if (isUpper && isNumber) {
      twoCriterias(upperCharacters, numericCharacters);
    } else if (isUpper && isSpecial) {
      twoCriterias(upperCharacters, specialCharacters);
    } else if (isNumber && isSpecial) {
      twoCriterias(numericCharacters, specialCharacters);
    } else if (isLower) {
      oneCriteria(lowerCharacters);
    } else if (isUpper) {
      oneCriteria(upperCharacters);
    } else if (isNumber) {
      oneCriteria(numericCharacters);
    } else if (isSpecial) {
      oneCriteria(specialCharacters);
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
