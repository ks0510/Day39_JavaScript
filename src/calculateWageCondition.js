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
const max_Hours=160;
const num_of_WorkingDays=20;
let totalHrs=0;
let totalWorkingDays=0;
while(totalHrs<=max_Hours && totalWorkingDays< num_of_WorkingDays){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    totalHrs+=getWorkingHours(empCheck);
}
let empWage = totalHrs * wage_Per_Hour;
console.log("Total Days: "+ totalWorkingDays+" Total Hrs : "+totalHrs+" Emp Wage "+empWage);