// Assignment Code

//  Declare the variables: 
// var Uppercase;
// var Lowercase;
// var enterPassword;
// var Number;
// var Symbols;
// var userChoices = []; // user Choices declared outside the if statement so they can be concatenated upon condition

// Start Password variable values: 
// Special symbols 
var symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
var space = [];
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
var uppercase = alphabet.map(toUpper);

// Add event listener to generate button, and function input to use textcontent
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
    passwordText = generatePassword();
    document.getElementById("password").placeholder = passwordText;
});

// Start function to generate password
function generatePassword() {
    // var userChoices = [];
    var Uppercase;
    var Lowercase;
    var enterPassword;
    var Number;
    var Symbols; // user Choices declared upon condition
    // Asks for user input
    enterPassword = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

    // First if statement for user validation 
    if (!enterPassword) {
        alert("You must choose a value");
    } else if (enterPassword < 8 || enterPassword > 128) {

        enterPassword = alert("You must choose between 8 and 128");  // replaced alert instead of prompt
        generatePassword()
        console.log("Password length " + enterPassword);

    } else {
        // Continues once user input is validated
        Uppercase = confirm("Will this contain Uppercase letters?");
        console.log("Upper Case " + Uppercase);
        Lowercase = confirm("Will this contain Lowercase letters?");
        console.log("Lower Case " + Lowercase);
        Number = confirm("Will this contain Numbers?");
        console.log("Active Number " + Number);
        Symbols = confirm("Will this contain special Symbols?");
        console.log("Special Symbols " + Symbols);

    };

    //  if option evaluate independently of the previous one
    if (!Symbols && !Number && !Uppercase && !Lowercase) {
        alert("You must choose a criteria!");
        return;
    }

    if (Symbols) {
        userChoices = userChoices.concat(symbol);
    }
    if (Number) {
        userChoices = userChoices.concat(number);
    }
    if (Lowercase) {
        userChoices = userChoices.concat(alphabet);
    }
    // Created space variable to fill uppercase conversion
    if (Uppercase) {
        userChoices = userChoices.concat(uppercase);
    };
    console.log(userChoices);

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Random selection for all variables: 
    for (var i = 0; i < enterPassword; i++) {
        var pickChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
        password.push(pickChoices);

    }
    // This joins the password array and converts it to a string
    var passwordText = password.join("");
    return passwordText;
}
