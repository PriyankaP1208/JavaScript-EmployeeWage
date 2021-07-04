const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NO_OF_WORKING_DAYS = 20;
const NO_OF_WORKING_HOURS = 160;

let totalWorkingDays = 0;
let totalEmpHrs = 0;

let empWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHourMap = new Map();

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function caclWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

while (totalWorkingDays < NO_OF_WORKING_DAYS && totalEmpHrs <= NO_OF_WORKING_HOURS) {
    let empCheck = Math.floor((Math.random() * 10) % 3);
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    totalWorkingDays++;
    empWageArray.push(caclWage(empHrs));            
    empDailyWageMap.set(totalWorkingDays, caclWage(empHrs));  
    empDailyHourMap.set(totalWorkingDays, empHrs);  
}

console.log(empWageArray);
console.log("Total Employee Working Hours: " + totalEmpHrs + "\nTotal Employee Working Days:  " + totalWorkingDays);
let empWage = caclWage(totalEmpHrs);               
console.log("Total Employee Wage: " + empWage);
empWageArray.forEach(sum);                         
console.log("Total Employee Wage using foreach: " + totEmpWage);
console.log("Total Employee Wage using reduce method: " + empWageArray.reduce(totalWages, 0));   

let dailyCntr = 0;
function mapDayWithDailyWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " : " + dailyWage;
}
let mapDayWithDailyWageArr = empWageArray.map(mapDayWithDailyWage);
console.log("Daily wage map: ");
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
console.log("Check if there is any parttime wage: " + mapDayWithDailyWageArr.some(partTimeWage));

function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("Number of days the employee worked : " + empWageArray.reduce(totalDaysWorked, 0));
 
console.log(empDailyWageMap);
console.log("Total Employee wage using map : " + Array.from(empWageArray.values()).reduce(totalWages, 0));

const findTotal = (totalValue, dailyValue) => {
    return totalValue + dailyValue;
}

let totalHours = (Array.from(empDailyHourMap.values())).reduce(findTotal, 0);
let totalSalary = (Array.from(empDailyWageMap.values())).filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("Using Arrow Function  Total Hours : " + totalHours + "  Total Wage : " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHourMap.forEach((value, key) => {
    if (value == 8)
        fullWorkingDays.push(key);
    else if (value == 4)
        partWorkingDays.push(key);
    else
        nonWorkingDays.push(key);

});

console.log("Full working days : " + fullWorkingDays);
console.log("Part working days : " + partWorkingDays);
console.log("Non working days : " + nonWorkingDays);

totalWorkingDays = 0;
totalEmpHrs = 0;
let empDailyHrsAndWageArr = new Array();
while (totalWorkingDays < NO_OF_WORKING_DAYS && totalEmpHrs <= NO_OF_WORKING_HOURS) {
    let empCheck = Math.floor((Math.random() * 10) % 3);
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    totalWorkingDays++;
    empDailyHrsAndWageArr.push({
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: caclWage(empHrs),
        toString() {
            return "\nDay No : " + this.dayNum + "  Hours Worked: " + this.dailyHours + "  Wage Earned: " + this.dailyWage
        },
    });
}
console.log("Employee Daily Hours and wage : " + empDailyHrsAndWageArr);


