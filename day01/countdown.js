const startDate = new Date("2026-10-01T00:00:00");
const endDate = new Date("2026-12-31T00:00:00");
const todayDate = new Date();
const daysPassed = Math.floor((todayDate - startDate)/(1000 * 60 * 60 * 24));
const studyHours = (daysPassed + 1) * 2;

const totalDays = Math.floor((endDate - startDate)/(1000 * 60 * 60 * 24));
const hoursLeft = (totalDays - daysPassed) * 2;

console.log('Day  ' + daysPassed +' of ' +totalDays);
console.log('Total hours I should have logged by today = ' + studyHours);
console.log('Hours left to log = ' + hoursLeft);