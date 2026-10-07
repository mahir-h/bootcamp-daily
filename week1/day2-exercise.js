// Day 6 exercise

const transactions = [
    {id: 1, date: "2026-09-02", category: "food", amount: 18.5},
    {id: 2, date: "2026-09-05", category: "transport", amount: 4.2},
    {id: 3, date: "2026-09-12", category: "food", amount: 42},
    {id: 4, date: "2026-10-01", category: "rent", amount: 450},
    {id: 5, date: "2026-10-03", category: "food", amount: 9.9, note: "coffee"},
];

// 1- Warm-up: write formatTx(tx) using parameter destructuring. It should return "2026-09-02 · food · $18.50". 
// Print every transaction with it.



function formatTx({date,category,amount}){

    return `${date} . ${category} . $${amount}`;
}

// since objects are inside an array, if i do console log for transactions, nothing will happen. 
//thats why i have to mention the positon which works.

// console.log(formatTx(transactions[0])); 

// but it wont print for all elements, so i have to do following:

transactions.forEach(tx => console.log(formatTx(tx)));


// 2- Immutable update: write updateAmount(list, id, newAmount). It returns a new array in which only that transaction has a new amount (use map + spread). Print transactions afterwards to prove the original didn't change.
// Immutable means new array with updated stuff without affecting original array
function updateAmount(list, id, newAmount){
    return list.map(tx => {
        if(tx.id === id){   //if its the transactions that we want, use spread to copy tx with the new amount
            return {...tx,amount: newAmount};
        }
        return tx;
    });
}

const updated = updateAmount(transactions,3,50);
console.log(updated);
console.log(transactions);

// 3- Group by category: write totalsByCategory(list). It returns an object like { food: 70.4, transport: 4.2, rent: 450 } (use reduce with an object as the accumulator). Then use Object.entries to print it sorted from highest to lowest.

function totalsByCategory(list){
    return list.reduce((acc,{category,amount}) => {acc[category] = (acc[category] || 0) + amount; return acc;}, {});
}
console.log(totalsByCategory(transactions));

// To print/sort by highest to lowest
const totals = totalsByCategory(transactions);
const sorted = Object.entries(totals);

sorted.sort((a,b) => b[1] - a[1]);

sorted.forEach(([category, total]) => {
    console.log(`${category}: $${total.toFixed(2)}`);
})

// 4- JSON round-trip: JSON.stringify the totals, write the string to totals.json with require("fs").writeFileSync, then read it back with readFileSync + JSON.parse and print it.

//a - file system module needs to be called upon using require
const fs = require("fs");
// totals gets converted from Object to string
const tjson = JSON.stringify(totals);
// the string is written in folder where the node file is
fs.writeFileSync("totals.json", tjson);
//the file tjson gets read and the json converts the string back to object using parse.
const loaded = JSON.parse(fs.readFileSync("totals.json"));
console.log(loaded);


// 5- Stretch: write safeParse(text). It returns { ok: true, data } or { ok: false, error }, and it never throws. Test it with valid JSON, "{bad}", and an empty string. You'll reuse this in spend-report this weekend.

function safeParse(text){
    try{
        const data = JSON.parse(text);
        return {ok:true, data};
    } catch (err){
        return {ok:false, error: err.message};
    }
}

console.log(safeParse('{"food": 70.4}'));
console.log(safeParse("{bad}"));
console.log(safeParse(""));

// how safeParse will be used in spend-report

const result = safeParse(fs.readFileSync("totals.json", "utf8"));
console.log(result);
if(result.ok){
    console.log("Rent total: ", result.data.rent);
} else{
    console.log("Could not read file:", result.error);
}