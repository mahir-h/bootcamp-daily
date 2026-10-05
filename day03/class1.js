// For arrays, use loops which checks and collects.
//For example:

const nums = [4,9,2,12];
let big = [];

for (const n of nums){
    if(n > 5) big.push(n);
}

console.log (big);