const numberofDays=20;
let empHrs=0;
for(let i=0;i<numberofDays;i++){
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs+= getWorkingHours(empCheck);
}
let empWage= empHrs* wage_Per_Hour;
console.log("Total Hours: "+empHrs+" Emp Wage "+empWage);