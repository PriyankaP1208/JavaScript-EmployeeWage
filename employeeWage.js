const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;
const NO_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;

function getWorkingHours(empCheck)
{
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break; 
        default:
            return 0; 
    }  
}

function calcWage(empHrs) {
    return empHrs * WAGE_PER_HOURS;
}

let empWageArray = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
    empWageArray.push(calcWage(empHrs));
}

let empWage = calcWage(totalEmpHrs);
console.log("Total Working days:" + totalWorkingDays)
console.log("Emp Hrs:" + totalEmpHrs + " Emp Wage:" + empWage);
