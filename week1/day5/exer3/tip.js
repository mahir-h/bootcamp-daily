import { formatNZD } from "./format.js";

const args = process.argv.slice(2);

const bill = Number(args[0]);

const tipIdx = args.indexOf("--tip")
const tipPercent = tipIdx !== -1 ? Number(args[tipIdx +1]) : 10;

const splitIdx = args.indexOf("--split");
const people = splitIdx !== -1 ? Number(args[splitIdx +1]) : 1;

const tip = bill * tipPercent / 100;
const total = bill + tip;
const share = total / people;



console.log(`Bill : ${bill}`);
console.log(`Tip : ${tip}`);
console.log(`Total : ${total}`);
console.log(`After split per person : ${share}`);
