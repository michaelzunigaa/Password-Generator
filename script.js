// Assignment Code
var AmountNumber = document.getElementById('characterAmountNumber')

var includeUppercaseEl = document.getElementById ('includeUppercase')
var includeLowercaseEl = document.getElementById ('includeLowercase')
var IncludeSymbolsEl = document.getElementById('IncludeSymbols')
var includeNumbersEl = document.getElementById('includeNumbers')
var passwordDisplay = document.getElementById('password-display"')
var form = document.getElementById('passwordGenerator')

var  LOWERCASE_CODES = arrayLowToHigh(65,90)
var UPPERCASE_CODES = arrayLowToHigh(97, 122)
var NUMBER_CODES = arrayLowToHigh(48,57)
var SYMBOL_CODES = arrayLowToHigh(33,47).concat(arrayLowToHigh(58, 64).concat(arrayLowToHigh (91,96),




form.addEventListener('submit', e => {
      e.preventDefault()
      var characterAmount = AmountNumber.nodeValue
      var includeUppercase = includeUppercaseEl.checked
      var includeLowercase = includeLowercaseEl.checked
      var includeNumbers = includeNumbersEl.checked
      var includeSymbols = includSeymbolsEl.checked
      var password = generatePassword(characterAmountNumber, includeUppercase, includeNumbers, includeSymbols)
      passwordDisplay.innerText = password


function  generatePassword(characterAmountNumber, includeUppercase, includeNumbers, includeSymbols){
      var charCodes = LOWERCASE_CODES
      if(includeLowercase) charCodes = charCodes.concat(UPPERCASE_CODES)
      if(includeNumbers) charCodes = charCodes.concat(NUMBER_CODES)
      if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES)
            var passwordCharacter = []

       for(let i = 0; i < characterAmountNumber; i++){
             var character = charCodes[Math.floor(Math.random() *
                  characterAmountNumber)]
             passwordCharacter.push(String.fromCharCode(character))

       }
       return passwordCharacter.join('')




function arrayLowToHigh(low, high){
      var array = []
      for(let i = low; i <= high; i++){
            array.push(i)

      }
      return array
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