// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt("How long would you like your password? (8 - 128 characters");

  if (length < 8 || length > 128) {
    length = prompt("Try Again. How long would you like your password? (8 - 128 characters");
  }
  
  var lower = confirm("Would you like LOWERCASE letters in your password?");
  var upper = confirm("Would you like UPPERCASE letters in your password?");
  var numbers = confirm("Would you like NUMBERS in your password?");
  var special = confirm("Would you like SPECIAL characters in your password?");

  

  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);