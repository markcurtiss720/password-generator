// Assignment Code
var generateBtn = document.querySelector("#generate");
 //establish variables to checked later in the code
var passwordLength;
var inputUpper;
var inputLower;
var inputSpecial;
var inputNumber;
var userInput;


//create arrays for the specific variabales
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var blankPassword = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();


  
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
passwordText.value = "";

//set the length of the password
function generatePassword() {
  passwordLength = prompt("Please choose a length for your password. Password length must be a number between 8 and 128.");

  //No input then alert user to include a value
  if(passwordLength === false) {
    alert("Please choose a length for your password.")
    //make sure number is between 8 and 128
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt ("Length must be between 8 and 128");
    //set boolean values for lower, upper, number, and special characters
  } else {
    inputUpper = confirm("Include upper case letters?");
    inputLower = confirm("Include lower case letters?");
    inputSpecial = confirm("Include special characters?");
    inputNumber = confirm("Include numbers?");
  }

  if (inputUpper === false && inputLower === false && inputSpecial === false && inputNumber === false) {
    userInput = alert("Please select a criteria");
//need to check all combinations of input criteria
  } else if (inputUpper && inputLower && inputSpecial && inputNumber) {
    userInput = upperCase.concat(lowerCase, special, numbers);
// All posible combinations of 3 choices
  } else if (inputUpper && inputLower && inputSpecial) {
    userInput = upperCase.concat(lowerCase, special);
  } else if (inputLower && inputSpecial && inputNumber) {
    userInput = lowerCase.concat(special, number); 
  } else if (inputSpecial && inputNumber && inputUpper) {
    userInput = special.concat(number, upperCase);
  } else if (inputNumber && inputUpper && inputLower) {
    userInput = numbers.concat(upperCase, lowerCase)
// All posible combinatiosn of 2 choices
  } else if (inputUpper && inputLower) {
    userInput = upperCase.concat(lowerCase); 
  } else if (inputLower && inputSpecial) {
    userInput = lowerCase.concat(special);
  } else if (inputSpecial && inputNumber) {
    userInput = special.concat(numbers);
  } else if (inputNumber && inputUpper) {
    userInput = numbers.concat(upperCase);
  } else if (inputUpper && inputSpecial) {
    userInput = upperCase.concat(special);
  } else if (inputLower && inputNumber) {
    userInput = lowerCase.concat(numbers);
// All 1 choices
  } else if (inputUpper) {
    userInput = upperCase
  } else if (inputLower) {
    userInput = lowerCase;
  } else if (inputSpecial) {
    userInput = special;
  } else if (inputNumber) {
    userInput = numbers;
  }


  for (var i = 0; i < passwordLength; i++) {
    var combinedInputs = userInput[Math.floor(Math.random() * userInput.length)];
    blankPassword.push(combinedInputs);
  }

  password = blankPassword.join("");
  return password;


}