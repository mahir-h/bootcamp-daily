import chalk from 'chalk';
import {formatNZD} from './format.js'

const transactions = [
    {description:'Salary', amount: 2500},
    {description: 'Rent', amount: -650},
    {description: 'Groceries', amount: -142.3},
    {description: 'Refund', amount: 25},
];


for(const t of transactions){
    const line = `${t.description.padEnd(12)} ${formatNZD(t.amount)}`;
    console.log(t.amount >= 0 ? chalk.green(line) : chalk.red(line));
}

const balance = transactions.reduce((sum,t) => sum + t.amount, 0);
const colour = balance >= 0? chalk.green : chalk.red;
console.log(chalk.bold('\nBalance: ') + colour(formatNZD(balance)));