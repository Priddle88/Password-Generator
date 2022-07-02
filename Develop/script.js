// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var newPassword = [];
var length = 0;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  function findLength() {
    length = prompt("How long would you like your password? (8 - 128 characters");
    if (length < 8 || length > 128) {
      confirm("Try Again. You need to choose a number between 8 - 128");
      findLength();
    }
  }

  findLength();

  var lower = confirm("Would you like LOWERCASE letters in your password?");
  var upper = confirm("Would you like UPPERCASE letters in your password?");
  var numbers = confirm("Would you like NUMBERS in your password?");
  var special = confirm("Would you like SPECIAL characters in your password?");

  if (lower) {
    for (i = 0; i < lowerCase.length; i++)
    newPassword.push(lowerCase[i]);
  }

  console.log(length);
  console.log(newPassword);
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);