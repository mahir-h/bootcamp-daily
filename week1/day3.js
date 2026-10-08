const tx = [
    {category: "food", amount: 12},
    {category: "rent", amount: 400},
    {category: "food", amount: 8},
];

//1 - loop version
const totals =[];
for (const t of tx){
    totals[t.category] = (totals[t.category] || 0) + t.amount;
}

//2- reduce version
const rTotals = tx.reduce((acc,t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc; //always return accumulator
}, {}); 

console.log(totals);

// Strings; cleaning messy input
const raw = "   Groceries   ";
console.log(raw.trim()); // gets rid of the space in raw
console.log(raw.trim().toLowerCase()); // gets rid of space in raw and converts string value to lower case

console.log("2026-10-07".split("-")); // splits the string into array of strings at -
console.log("2026-10-07".slice(0,7)); // slice (start, end) exludes the end index and afterwards. here - occupies and index slot
String(7).padStart(2,"0"); // here we convert number to string first. padStart only works on string. (how many characters long, what to add in the prefix)-

// Template literal is new way of printing stuff instead of the old way catenation
`Total: ${42}`;  

// Numbers: parsing and money trap
Number("12.5");  // 12.5
Number("12abc"); // NaN - Not a number
parseFloat("12abc"); // 12 - hides bad data which is abc here
Number(""); // 0 - empty string is not Nan
Number.isNaN(NaN);  // true

0.1 + 0.2;  // 0.30000000000000004 //only add whole number, half or quarter. 
//Anything else, with have hidden decimnal place values.

// convert money/integer in cents so there is no decimal to store values accurately.
Math.round(10.505 * 100);  // (1050.5), which becomes 1051 after roundup
(1051 /100).toFixed(2); // 10.51,  which gets returned as string

const nzd = new Intl.NumberFormat("en-NZ", {style: "currency", currency: "NZD" });
// the above like creates a formatter automatically for the object. Thats why we can use format() below.
nzd.format(123450 / 100);  //"$1234.50"


// Dates : 2 traps to know
new Date(2026,9,7); // 7 October 2026. here month is shown not as number
new Date("2026-10-07"); //parsed as UTC midnight which may show as wrong day locally
new Date().toISOString(); //  "2026-10-07T04:44:51.000Z" (always UTC)

const fmt = new Intl.DateTimeFormat("en-NZ", {
    day: "numeric", month: "long", year: "numeric", timeZone: "Pacific/Auckland",
});
console.log(fmt.format(new Date()));