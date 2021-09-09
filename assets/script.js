// Assignment code here
const specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
];

const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const lowerCasedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

const upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

function criteria() {
    const length = Number(prompt(`How many characters would you like the password to be?\n Between 8-128 characters long`));
    if (length < 8 || length > 128) {
        alert("Please enter a number between 8 and 128.");
        criteria()
    }
    const upperConfirm = confirm("Would you like upper case letters?\n OK for yes, Cancel for no.")
    const lowerConfirm = confirm("Would you like lower case letters?\n OK for yes, Cancel for no.")
    const numericConfirm = confirm("Would you like numbers?\n OK for yes, Cancel for no.")
    const specialConfirm = confirm("Would you like special characters?\n OK for yes, Cancel for no.")
    const input={
        length,
        upperConfirm,
        lowerConfirm,
        numericConfirm,
        specialConfirm,
    }
    return input
}

function generatePassword() {
    const finalPassword =[]
    const guaranteedCharacters = []
    let possibleCharacters = []
    const promptResults = criteria();
    if (promptResults.upperConfirm) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
        guaranteedCharacters.push(upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length-1)])
    }
    if (promptResults.lowerConfirm) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
        guaranteedCharacters.push(lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length-1)])
    }
    if (promptResults.numericConfirm) {
        possibleCharacters = possibleCharacters.concat(numericCharacters)
        guaranteedCharacters.push(numericCharacters[Math.floor(Math.random()*numericCharacters.length-1)])
    }
    if (promptResults.specialConfirm) {
        possibleCharacters = possibleCharacters.concat(specialCharacters)
        guaranteedCharacters.push(specialCharacters[Math.floor(Math.random()*specialCharacters.length-1)])
    }
    console.log(guaranteedCharacters);
    console.log(possibleCharacters)

    for(let i=0; i<guaranteedCharacters.length; i++){
        finalPassword.push(guaranteedCharacters [i])
        promptResults.length--
    }
    for(let i=0; i<promptResults.length; i++){
        finalPassword.push(possibleCharacters [Math.floor(Math.random()*possibleCharacters.length-1)])
    
    }
    console.log(finalPassword);
    return finalPassword.join("")
}

// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
