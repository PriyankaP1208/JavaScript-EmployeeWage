const prompt = require('prompt-sync')();
function validatePinCode(pinCode) {
    let pinCodeRegex = RegExp('^[0-9]{3}[ ]?[0-9]{3}$');
    if(pinCodeRegex.test(pinCode))
        console.log("PinCode is valid!");
    else
        console.log("PinCode is invalid!");
}

let pinCode = prompt("Enter pin code:");
validatePinCode(pinCode);