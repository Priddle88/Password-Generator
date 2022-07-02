// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "&"];
var lowerCase = [];
var upperCase = []
var toUpperCase = [];
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
    lowerCase = letters.split(" ");
    for (i = 0; i < lowerCase.length; i++){
    newPassword.push(lowerCase[i]);
    }
  }

  if (upper) {
    toUpperCase = letters.toUpperCase();
    upperCase = toUpperCase.split(" ");
    for (i = 0; i < upperCase.length; i++){
    newPassword.push(upperCase[i]);
    }
  }

  if (numbers) {
    for (i = 0; i < number.length; i++){
    newPassword.push(number[i]);
    }
  }

  if (special) {
    for (i = 0; i < specialChar.length; i++){
      newPassword.push(specialChar[i]);
    }
  }

  function shuffleArray (array) {
    for (var i = array.length - 1; i > 0; i --) {

      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i]
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  var newPass = shuffleArray(newPassword);
  var slicedPass = newPass.slice(0, length);
  var makeString = slicedPass.toString();
  var finalPass = makeString.replace(/,/g, '');


  console.log(newPass);
  console.log(number);
  console.log(length);
  console.log(newPassword);
  console.log(finalPass);
  return finalPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);