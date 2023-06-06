const is_PartTime = 1;
const is_FullTime = 2;
const partTime_Hours=4;
const fullTime_Hours=8;
const wage_Per_Hour = 20;

//Function to find working hours
function getWorkingHours(empCheck){
    switch(empCheck){
        case is_PartTime:
            return partTime_Hours;
            break;
        case is_FullTime:
            return fullTime_Hours;
            break;
        default:
            return 0;        
    }
}

function calculateDailyWage(empHrs){
    return empHrs* wage_Per_Hour;
}


const max_Hours=160;
const num_of_WorkingDays=20;
let totalHrs=0;
let totalWorkingDays=0;
let empDailyWageArr = new Array();

while(totalHrs<=max_Hours && totalWorkingDays< num_of_WorkingDays){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalHrs+= empHrs;
    empDailyWageArr.push(calculateDailyWage(empHrs)); 

}
let empWage = calculateDailyWage(totalHrs);
console.log("UC6 - Total Days: "+ totalWorkingDays+" Total Hrs: "+totalHrs+" Emp Wage: "+empWage);

console.log(empDailyWageArr);