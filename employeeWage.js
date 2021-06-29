const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;
const NO_OF_WORKING_DAYS = 20;

let empHrs = 0;

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

for(let day = 0; day < NO_OF_WORKING_DAYS; day++)
{
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * WAGE_PER_HOURS;
console.log("Emp Hrs:" + empHrs + "Emp Wage:" + empWage);
