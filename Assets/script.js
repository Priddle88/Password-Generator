// Assignment Code
var generateBtn = document.querySelector("#generate");

//List of global variables. Creates the password
var letters = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "&"];
var lowerCase = [];
var upperCase = []
var toUpperCase = [];
var newPassword = [];
var fillIt = [];
var length = 0;

// Write password to the #password input
function writePassword() {
  //resets the console
  reset();
  //the return value of generate password is stored in the variable "password"
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //Sends the value of password to the text box on the webpage
  passwordText.value = password;

}

//Created the generatePassword function to display prompts for the user
function generatePassword() {
  //resets the value of password locally
  newPassword = [];

  //Finds the length the user wants. Also makes sure to be 8 - 128 characters
  function findLength() {
    length = prompt("How long would you like your password? (8 - 128 characters)");
    if (length < 8 || length > 128) {
      confirm("Try Again. You need to choose a number between 8 - 128");
      findLength();
    }
    return length;
  }
  //Call the findLength function
  findLength();

  //Function to show a criteria for the user to choose from
  function createPassword () {
    newPassword = [];
    var lower = confirm("Would you like LOWERCASE letters in your password?");
    var upper = confirm("Would you like UPPERCASE letters in your password?");
    var numbers = confirm("Would you like NUMBERS in your password?");
    var special = confirm("Would you like SPECIAL characters in your password?");

    //If the user wants lowercase letters in the password
    if (lower == true) {
      lowerCase = letters.split(" ");
      for (i = 0; i < lowerCase.length; i++){
      newPassword.push(lowerCase[i]);
      }
    }

    //If the user wants uppercase letters in the password
    if (upper == true) {
      toUpperCase = letters.toUpperCase();
      upperCase = toUpperCase.split(" ");
      for (i = 0; i < upperCase.length; i++){
      newPassword.push(upperCase[i]);
      }
    }

    //If the user wants numbers in the password
    if (numbers == true) {
      for (i = 0; i < number.length; i++){
      newPassword.push(number[i]);
      }
    }

    //If the user wants special characters in the password
    if (special == true) {
      for (i = 0; i < specialChar.length; i++){
        newPassword.push(specialChar[i]);
      }
    }

    //If none of the options are selected. The code will run again
    if (!lower && !upper && !numbers && !special) {
      alert ("Try again. Please make a selection from the criteria to create your password");
      findLength();
      createPassword();
    }
    
    return newPassword;
  }

  //Calls the createPassword function
  createPassword();

  //Function to shuffle an array
  function shuffleArray (array) {
    for (var i = array.length - 1; i > 0; i --) {

      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i]
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  //Converts the password with all the options to a string with the desired length
  var newPass = shuffleArray(newPassword);
  var slicedPass = newPass.slice(0, length);
  var makeString = slicedPass.toString();
  var finalPass = makeString.replace(/,/g, '');

  //Fills an array with repeated characters in case the password requires more
  for (i = 0; i < length; i++){
    fillIt[i] = finalPass[i % finalPass.length];
  }

  //Makes sure the shorter passwords have special characters
  if (fillIt.length < 20 && newPassword.includes('$')){
    fillIt[0] = specialChar[Math.floor(Math.random() * 6)];
  }

  //Makes sure the shorter passwords have numbers
  if (fillIt.length < 20 && newPassword.includes('8')){
    fillIt[1] = number[Math.floor(Math.random() * 10)];
  }

  //Makes sure the shorter passwords have lowercase
  if (fillIt.length < 20 && newPassword.includes('a')){
    var lowerFill = letters.split(" ");
    fillIt[2] = lowerFill[Math.floor(Math.random() * 26)];
  }

  //Makes sure the shorter passwords have uppercase
  if (fillIt.length < 20 && newPassword.includes('A')){
    fillIt[3]= "G";
  }
  
  //The array needed to be shuffled and converted to a string again
  var shuffleAgain = shuffleArray(fillIt);
  var secondString = shuffleAgain.toString();
  var finalFinal = secondString.replace(/,/g, '');
  
  //This is the user's password and what will display on the page
  return finalFinal;
}

//resets the console and fillIt array
function reset() {
  console.clear();
  fillIt = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);