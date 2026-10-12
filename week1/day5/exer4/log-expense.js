import fs from 'node:fs';
import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process'
import { formatNZD } from './format.js';
import { summarise } from './summarise.js';

const FILE = 'expense.json';

// 1- Load existing expenses 

function loadExpenses(){
    if (!fs.existsSync(FILE)) return [];
    try {
        return JSON.parse(fs.readFileSync(FILE,'utf8'));
    } catch{
        console.log(`Warning: ${FILE} is broken, starting fresh.`);
        return [];
    }
}

// 2- Ask Question

const r1 = readline.createInterface({input, output});

const description = (await r1.question('Description? ')).trim();

let amount = NaN;
while(Number.isNaN(amount) || amount <= 0){
    amount = Number(await r1.question('Amount? '));
    if(Number.isNaN(amount) || amount <= 0 ) console.log('Please enter a positive number');
}

const category = (await r1.question('Category? ')).trim().toLowerCase || 'other';
r1.close();


// 3- Add the new expenses and save

const expenses = loadExpenses();
expenses.push({
    date: new Date().toLocaleDateString('en-NZ'), description, amount, category
});

fs.writeFileSync(FILE, JSON.stringify(expenses,null,2));
console.log(`Saved "${description}" (${formatNZD(amount)}).`);


// 4. Show a summary
const {count, total, average} = summarise(expenses);
console.log(`\n${count} expenses . total ${formatNZD(total)} . average ${formatNZD(average)}`)