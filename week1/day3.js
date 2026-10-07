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