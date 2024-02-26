
// Assignment Code

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var symbols ="!@#$%^&*()?.<\>|=+:;,[-_]"
var numericList ="0123456789"

var generateBtn = document.querySelector("#generate");
function generatePassword() 
{

var keyLength = prompt("Please type how many characters you want your password to be:");
console.log(" the user wants this : ", keyLength)
if (keyLength < 8 || keyLength > 128) {
  alert("Your password does not meet the critia");
  return"Try again";
}
var possibleCharacters="";

var uppercaseABC = confirm("Do you want an uppercase letter?");
console.log(uppercaseABC);
var lowercaseABC = confirm("Do you want lowercase letter?");
console.log(lowercaseABC);
var specialSymbols = confirm("Do you want a symbol?");
console.log(specialSymbols);
var numeric = confirm("Do you want a number?");
console.log(numeric);
if (uppercaseABC === false && lowercaseABC === false && specialSymbols === false && numeric === false) {
  alert("You password should meet at least one of criterias!");
  return"Try again!"
  };
  if (uppercaseABC===true){
possibleCharacters += uppercase};
if (lowercaseABC===true){possibleCharacters+= lowercase};
if (specialSymbols===true){possibleCharacters+=uppercase};
if (numeric===true){possibleCharacters+=numericList}


let finalPassword = ""
for (let i = 0; i < keyLength; i++) {
  let rng =[Math.floor(Math.random() * possibleCharacters.length)];
  // or finalPassword += possibleCharacters[rng];
  finalPassword = finalPassword + possibleCharacters[rng];
}
return finalPassword;

}

// Write password to the #password input
function writePassword() {

var password = generatePassword();

var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);
