const name = "King";
const startDate = new Date("2026-10-01");
const endDate = new Date("2026-12-31");
const daysLeft = Math.ceil((endDate - new Date()) / (1000 * 60 * 60 * 24));

console.log(`Hello, ${name}! ${daysLeft} days left in the bootcamp.`);

// greet.js  →  run: node greet.js Mahir
const who = process.argv[2] ?? "stranger";
console.log(`Hi ${who}`);