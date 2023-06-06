const is_PartTime = 1;
const is_FullTime = 2;
const partTime_Hours=4;
const fullTime_Hours=8;
const wage_Per_Hour = 20;

let emp_Hours=0;
empCheck = Math.floor(Math.random()*10)%3;
switch(empCheck){
    case is_PartTime:
        emp_Hours = partTime_Hours;
        break;
    case is_FullTime:
        emp_Hours = fullTime_Hours;
        break;
    default:
        emp_Hours = 0;        
}
let empWage = emp_Hours*wage_Per_Hour;
console.log(empWage);