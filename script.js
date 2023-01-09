// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// This is the array to use to generate the random characters for the password.  New options (such as special characters) are added to this if the user clicks "ok" when promtpted if they want to include the option in  their generated password 
includedArrays = []
var psLength  //!! *** HARD CODED FOR TEST - REMOVE NUMBER***
var Newpass 

// FUNCTION 1 -----------------------------------------------Function to prompt user for password options --------------------------------------------------------------------------------------------------------------------------------------
function getPasswordOptions() {

  psLength = prompt("Testing - How many Characters do you want your password to be(betweeen 10 and 64");
  if (psLength.length ){
    if(psLength < 10 || psLength  > 64 || psLength === " "){
      pslength = prompt("That is not a valid password length - please pick a number between 10 and 64")
  }}
  console.log(psLength) // Check to seee if user input is collected 22
  
  
  var lower = false
  var result = confirm("Do you want the password to include lowercase charaters?")
  
  if (result) {
  var lower = true
  includedArrays = includedArrays.concat(lowerCasedCharacters)
  }
  console.log(includedArrays) // check the arrays have been added to the included arrays or not depending on user choice 
  
  // checking if user wants their password to include Upper case charaters - if the array is added to the incluidedArrays array
  
  
  var upper = false
  var result = confirm("Do you want the password to include uppercase charaters?")
  
  if (result) {
  var upper = true
  includedArrays = includedArrays.concat(upperCasedCharacters)
  }
  console.log(includedArrays) // check the arrays have been added to the included arrays or not depending on user choice 
  
  
  // checking if user wants their password to include nummeric charaters - if the numeric array is added to the incluidedArrays array
  var numeric = false
  var result = confirm("Do you want the password to include numeric charaters?")
  
  if (result) {
  var numeric = true
   includedArrays= includedArrays.concat(numericCharacters)
  }
  console.log(includedArrays) // check the arrays have been added to the included arrays or not depending on user choice 
  
  
  // checking if user wants their password to include special charaters - if so the array is added to the incluidedArrays array
  
  
  var special = false
  var result = confirm("Do you want the password to special charaters?")
  
  if (result) {
  var special = true
  includedArrays = includedArrays.concat(specialCharacters)
  }
  console.log(includedArrays) // check the arrays have been added to the included arrays or not depending on user choice 
  
  console.log(" The final chosen characterset by user is " + includedArrays)
  }
  



//----------------------Second function --------------------------------------------------- get random element--------------------------------------------

// Function for getting a random element from an array33
 function getRandom() {
    arr =   includedArrays                   //upperCasedCharacters
    let x = Math.floor(Math.random() * arr.length); // Testing with uppercase array
    let randomLetter = arr[x]
    console.log("The array to chose your passwords from is " + arr)
    console.log("the chosen character " + randomLetter )
    return randomLetter
  }


  
// Function to generate password with user input

function GeneratePssword(funct){
  var chosenpass = []
  console.log(chosenpass)
  
  for(let i = 0; i < psLength ; i++){
      
      x = funct()
      chosenpass.push(x) 
      console.log(chosenpass)
  }
  Newpass = chosenpass.join("")
  console.log("Your chosen password is " + Newpass)
  }


//-------------------------prewritten coce - Do not touch-----------------------------------------------------

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//--------------------------RUN FUNCTIONS-----------------------------

getPasswordOptions();
GeneratePssword(getRandom)