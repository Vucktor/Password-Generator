// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Variables for all possible characters

var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to gather user inputs/answers

function getPasswordOptions() {

// Get password length
var length = parseInt(prompt("How many characters in password?")
);

// Check to see if what they entered was a number
if (Number.isNaN(length)) {
  alert("Password lenght must be provided as a number");
  return null;
}

// Check if min 8 characters long
if (length < 8){
  alert("Length must be at least 8 characters");
  return null;
}

// Check if less than 128
if (length > 128) {
  alert("Length must be less than 128 characters");
  return null;
}


// Password options
var hasSpecialCharacters = confirm("Click OK to add special characters");

var hasNumericCharacters = confirm("Click OK to add numeric characters");

var hasLowerCasedCharacters = confirm("Click OK to add lowercase characters");

var hasUpperCasedCharacters = confirm("Click OK to add uppercase characters");

// Have atleast 1 option
if (
  hasSpecialCharacters === false &&
  hasNumericCharacters === false &&
  hasLowerCasedCharacters === false &&
  hasUpperCasedCharacters === false
) {
  alert("Nothing chosen")
  return null;
}

// Store user's info into an object + return it
var passwordOptions = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters
};

return passwordOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length)
  var randElement = arr[randIndex];

  return randElement;
}


// Function to generate the password
function generatePassword() {


  // Grab the user options
  var options = getPasswordOptions();

  // Array to sstore the result
  var result = [];

  // Array to store possible characters
  var possibleCharacters = [];

  // Array to store guaranteed characters
  var guaranteedCharacters = [];

  // Check if the options exist
  if (!options) return null;

  // Add selected chars to an a rray of possible characters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  // Loop over the passwords length, selecting random indicies from the possible chars and adding them to the result array
  for (var i = 0; i < options.length; i++){
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }


  // Mix in at least one of the guaranteed chars in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }


  // Transform the result into a string and pass it to the writePassword
  return result.join('');

}
