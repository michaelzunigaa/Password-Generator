// the password length field
const passwordSize = document.getElementById("characterAmount");
// the generated password 
const userPassword = document.getElementById("password-display");
//random Lowercase checkbox 
const randomLower = document.getElementById("includeLowercase");
//random Uppercase checkbox 
const randomUpper = document.getElementById("includeUppercase");
//random number checkbox 
const randomNumber = document.getElementById("includeNumbers");
//random symbol checkbox
const randomSymbol = document.getElementById("includeSymbols");
//results button
const generateBtn = document.getElementById("generate-button");





generateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    //checks password length and returns a number
    const length = +passwordSize.value;
    //checks lowercase checkbox
    const hasLower = randomLower.checked;
    //checks uppercase checkbox
    const hasUpper = randomUpper.checked;
    //checks numbers checkbox
    const hasNumber = randomNumber.checked;
    //checks symbols checkbox
    const hasSymbol = randomSymbol.checked;


    console.log(typeof length);
    userPassword.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);



});

function generatePassword(upper, lower, number, symbol, length) {
    let password = '';
    const typesCount = upper + lower + number + symbol;
    console.log('typesCount:', typesCount);

    const typesArr = [{
            upper
        }, {
            lower
        }, {
            number
        }, {
            symbol
        }]
        .filter(
            item => Object.values(item)[0]
        );


    if (typesCount === 0) {
        return '';
    }
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            password += mainFunct[funcName]();

        });

    }
    const finalPassword =  password.slice(0,length);

    return finalPassword;


}



const mainFunct = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};


function getRandomLower() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {

    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {


    let symbols = '!@#$%^&*(){}[]`';
    return symbols[Math.floor(Math.random() * symbols.length)];
}


// list of alpha characters
// list numeric chacters
// list of special characters
//prompt user
      //password length
          //check length is bewtween 8 and 128
    //confirm if they want alpha characters
          // confirm if they want lowercase letters
          // confirm if they want lowercase letters
    //confirm f they want numeric characters
    //confirm if they want special characters
          // check if they chose at least one option
// create choices array
// add all characters from user selection to choices array
// loop over choices array - amount of times the user specified as the password le
       //create a random number 
            //between 0 and the choices array length
            //grab element from choices array using random number
           //add random element to password 