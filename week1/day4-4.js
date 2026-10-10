// Day 4- Exercise 4.
// Debugger drill. Here’s a buggy function. Find the bug using a breakpoint, not by staring at it:

function totalByCategory(txns){
    const totals = {};
    for (const t of txns){
        totals[t.category] = totals[t.category] + t.amount;  //totals[t.category] is NaN. so NaN + any number is NaN. Therefore, it comes as undefined.
        // totals[t.category] = (totals[t.category] ?? 0 ) + t.amount;
    }
    return totals;
}