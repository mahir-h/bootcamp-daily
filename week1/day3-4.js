// monthLabel("2026-10-07") → "October 2026". Build it from split and an array of month names, with no new Date from the string, so it can't be off by a day.


function monthLabel(monthYear){
    const parts = monthYear.split("-");

    const year = parts[0];
    const month = parts[1];

    const MONTHS =["January","February","March","April","May","June",
        "July","August","September","October","November","December"];

    const monthName = MONTHS[Number(month)-1];
    
    return `${monthName}  ${year}`;
}

console.log(monthLabel("2026-10-07"));  // October 2026
console.log(monthLabel("2026-01-15"));  // January 2026
console.log(monthLabel("2025-12-31"));  // December 2025