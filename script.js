// Lowercase alpha array
var LowerChara = [
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

// Uppercase alpha array
var UpperChara = [
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

// Numbers array
var NumChara = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Special characters array
var SpChara = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "&",
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
  "|",
  "'",
];

// Function for password Settings
function passGenSettings() {
  // Password Length
  var length = parseInt(
    prompt("Password character length?"),
    10
    );
    
    // Condition for valid length entry
    if (Number.isNaN(length)) {
      alert("Password length can only be numbers.");
      return null;
    }
    
    // Condition for length min.
    if (length < 8) {
      alert("Password length must be 8 or more.");
      return null;
    }

  // Condition for length max.
  if (length > 128) {
    alert("Password length must be 128 or less.");
    return null;
  }

  // Adds lowercase alpha
  var hasLowerChara = confirm(
    "Click OK to add lowercase characters."
  );

  // Adds uppercase alpha
  var hasUpperChara = confirm(
    "Click OK to add uppercase characters."
  );

  // Adds special characters
  var hasSpChara = confirm(
    "Click OK to add special characters."
  );

  // Adds numbers
  var hasNumChara = confirm(
    "Click OK to add numeric characters."
  );


  // Condition incase user selects nothing
  if (
    hasSpChara === false &&
    hasNumChara === false &&
    hasLowerChara === false &&
    hasUpperChara === false
  ) {
    alert("Need one option selected.");
    return null;
  }

  // Password object with data
  var passwordOptions = {
    length: length,
    hasSpChara: hasSpChara,
    hasNumChara: hasNumChara,
    hasLowerChara: hasLowerChara,
    hasUpperChara: hasUpperChara,
  };
  return passwordOptions;
}

// Math function for random generation
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Function to generate password
function generatePassword() {
  var options = passGenSettings();
  // Variable for combined password
  var result = [];

  // Optional password character array
  var optionalChara = [];

  // Mandatory password character array
  var mandatoryChara = [];

  // Checks option function is active
  if (!options) return null;
  
  // Adds random lower-cased character to mandatoryChara
  if (options.hasLowerChara) {
    optionalChara = optionalChara.concat(LowerChara);
    mandatoryChara.push(getRandom(LowerChara));
  }

  // Adds random upper-cased character to mandatoryChara
  if (options.hasUpperChara) {
    optionalChara = optionalChara.concat(UpperChara);
    mandatoryChara.push(getRandom(UpperChara));
  }
  
  // Adds random special character to mandatoryChara
  if (options.hasSpChara) {
    optionalChara = optionalChara.concat(SpChara);
    mandatoryChara.push(getRandom(SpChara));
  }

  // Adds random special character to mandatoryChara
  if (options.hasNumChara) {
    optionalChara = optionalChara.concat(NumChara);
    mandatoryChara.push(getRandom(NumChara));
  }


  // For loop to create password from possible characters
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(optionalChara);

    result.push(possibleCharacter);
  }

  // Ensures mandatory characters are added
  for (var i = 0; i < mandatoryChara.length; i++) {
    result[i] = mandatoryChara[i];
  }

  // Writes result into the text box
  return result.join("");
}

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
