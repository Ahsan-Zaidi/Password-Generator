//declaring variables for function
var lowchar = "abcdefghijklmnopqrstuvwxyz"
//converts 'lowchar' to upper case variable
var upChar = lowchar.toUpperCase()
//creating variables for special characters & numbers
var specialchar = "!@#$%^&*()_+-={}[]\|;':,./<>?~`"
var numchar = "0123456789"
//Boolean variables to check characters
var checkNum, checkSpecial , checkUp, checkLow;
//create open variable for the selected characters as well as its length
var length;
var characters ="";

//function to generate password
function generatePassword() {
    var pass = "";
    length = parseInt(prompt("Enter the length of your Password"));
    if (length < 8 || !length) {
        alert("Try again! \nYour Password should be at least 8 characters long.")
    }
    else if (length > 128) {
        alert("Try again! \nYour Password should be less tha 128 characters")
    }
    else {
        //prompt for password criteria
        checkUp = confirm("Would you like uppercase letters in your password?")
        checkLow = confirm("Would you like lowercase letters in your password?")
        checkNum = confirm("Would you like numbers in your password?")
        checkSpecial = confirm("Would you like special characters in your password?")
        //checks to make sure at least one of the criteria is selected
        if (!checkUp && !checkLow && !checkNum && !checkSpecial) {
            alert("Try again! You must chose at least one character type.")
        }
        //checks if user selected all 4 possible criteria
        else if (checkUp && checkLow && checkNum && checkSpecial) {
            characters = lowchar.concat(upChar, specialchar, numchar);
        }
        //special characters are not selected
        else if (checkUp && checkLow && checkNum && !checkSpecial) {
            characters = lowchar.concat(upChar, numchar);
        }
        //Numeric characters are not selected
        else if (checkUp && checkLow && checkSpecial && !checkNum) {
            characters = lowchar.concat(upChar, specialchar);
        }
        //Uppercase characters are not selected
        else if (checkLow && checkSpecial && checkNum && !checkUp) {
            characters = lowchar.concat(numchar, specialchar);
        }
        //lowercase characters are not selected
        else if (checkUp && checkSpecial && checkNum && !checkLow) {
            characters = upChar.concat(specialchar, numchar);
        }
        //section of 2 possible choices
        //numeric and special characters are not selected
        else if (checkUp && checkLow && !checkNum && !checkSpecial) {
            characters = upChar.concat(lowchar);
        }
        //numeric and lower case characters are not selected
        else if (checkUp && checkSpecial && !checkNum && !checkLow) {
            characters = upChar.concat(specialchar);
        }
        //numeric and uppercase characters are not selected
        else if (checkLow && checkSpecial && !checkNum && !checkUp) {
            characters = lowchar.concat(specialchar);
        }
        //uppercase characters and special characters are not selected
        else if (checkLow && checkNum && !checkUp && !checkSpecial) {
            characters = lowchar.concat(numchar);
        }
        //lowercase and special characters are not selected
        else if (checkNum && checkUp && !checkLow && !checkSpecial) {
            characters = upChar.concat(checkNum);
        }
        //lowercase and uppercase characters are not selected
        else if (checkNum && checkSpecial && !checkUp && !checkLow) {
            characters = numchar.concat(specialchar);
        }
        //section of only 1 possible choice
        //only numeric charaters are selected
        else if (checkNum) {
            characters = numchar;
        }
        //only special characters are selected
        else if (checkSpecial) {
            characters = specialchar;
        }
        //only lowercase characters are selected
        else if (checkLow) {
            characters = lowchar;
        }
        //only uppercase characters are selected
        else if (checkUp) {
            characters = upChar;
        }
        //for loop to establish users desired password length
        for (var i = 0; i < length; i++) {
            //randomly generated index of characters
            pass += characters.charAt(Math.floor(Math.random() * characters.length));
        }

    }
    //return the generated password
    return pass;
}

var generateBtn = document.querySelector("#generate");

//using generatepassword function to input the password into the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
//create the event listener
generateBtn.addEventListener("click", writePassword);

