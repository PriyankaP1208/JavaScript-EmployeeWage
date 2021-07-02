const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20; 
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calcWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empWageArray = new Array();
let empWageMap = new Map();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor((Math.random() * 10) % 3);
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empWageArray.push(calcWage(empHrs)); 
    empWageMap.set(totalWorkingDays, calcWage(empHrs));  
}


console.log(empWageArray);
console.log("Total Employee Working Hours : " + totalEmpHrs + "\nTotal Employee Working Days :  " + totalWorkingDays);

let empWage = calcWage(totalEmpHrs);               
console.log("Total Employee Wage : " + empWage);

empWageArray.forEach(sum);                         
console.log("Total Employee Wage using foreach: " + totEmpWage);
console.log("Total Employee Wage using reduce method: " + empWageArray.reduce(totalWages, 0));   
 
let dailyCntr = 0;
function mapDayWithDailyWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " : " + dailyWage;
}
let mapDayWithDailyWageArr = empWageArray.map(mapDayWithDailyWage);
console.log("Daily wage map : ");
console.log(mapDayWithDailyWageArr);

function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithDailyWageArr.filter(fullTimeWage);
console.log("Days with full time wage : ");
console.log(fullDayWageArr);

console.log("First time fulltime was earned on : ")
console.log(mapDayWithDailyWageArr.find(fullTimeWage));

console.log("Check all elements have fulltime wage : " + fullDayWageArr.every(fullTimeWage));

function partTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Check if there is any parttime wage : " + mapDayWithDailyWageArr.some(partTimeWage));

function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("Number of days the employee worked : " + empWageArray.reduce(totalDaysWorked, 0));
console.log(empWageMap);
console.log("Total Employee wage using map : " + Array.from(empWageArray.values()).reduce(totalWages, 0));