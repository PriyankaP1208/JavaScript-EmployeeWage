const prompt = require('prompt-sync')();
function validatePinCode(pinCode) {
    let pinCodeRegex = RegExp('^[0-9]{3}[ ]?[0-9]{3}$');
    if(pinCodeRegex.test(pinCode))
        console.log("PinCode is valid");
    else
        console.log("PinCode is invalid");
}

let pinCode = prompt("Enter pin code:");
validatePinCode(pinCode);

function emailvalidation(emailId) {
    let emailRegex = RegExp('^[a-z]+[-+._]?[a-z]+@[a-z]+[.][a-z]{2,}[.]?([a-z]{2,})?$');
    if(emailRegex.test(emailId))
        console.log("Email Id is valid")
    else
        console.log("Invalid Email Id!");
}

let emailId = prompt("Enter email:");
emailvalidation(emailId);