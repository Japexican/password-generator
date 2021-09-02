// Assignment code here
var specialCharacters = [
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

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = [
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

var upperCasedCharacters = [
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
var generateBtn = document.querySelector("#generate");

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
    const promptResults = criteria();
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
