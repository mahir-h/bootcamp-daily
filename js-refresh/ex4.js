// const pings = [12, 45, 8, 300, 22, 19]; (milliseconds)
// Use a loop to find and print the fastest, the slowest and the average ping, plus how many pings were over 100 ms.

const pings = [12,45, 8, 300, 22,19];

let countOver100 = 0;
let total = 0;
let fastest = pings[0];
let slowest =pings[0];

for (let i = 0 ; i <pings.length; i++){
    total += pings[i];

    if(pings[i] < fastest){
        fastest =pings[i]; 
    }

    if(pings[i] >slowest){
        slowest = pings[i];
    }

    if(pings[i] > 100){
        countOver100++;
    }
}

console.log(`The fastest ping is ${fastest} ms`);
console.log(`The slowest ping is ${slowest} ms`);
console.log(`the average ping is ${total/pings.length} ms`);
console.log(`Number of pings over 100 ms: ${countOver100}`);
