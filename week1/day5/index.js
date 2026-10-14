const args = process.argv.slice(2);  //things we type in terminal node index.js hello 42 gets added to a list called process.argv. the first 2 lines are not needed so we slice
const file = args[0];
const monthIdx = args.indexOf('--month');
const month = monthIdx !== -1? args[monthIdx +1] : null;

import readline from 'node:readline/promise'; //built in Node tool for reading typing
import {stdin as input, stdout as output} from 'node:process'; // input is keyboard and output is screen

const r1 = readline.createInterface({input,output}); //establishes connection keyboard + screen
const name = await r1.question('Item Name?'); // asks the user question and wait for input
const price = Number(await r1.question('Price?')); // ask and wait again
r1.close(); //finishes asking and let program end
console.log(`${name}: ${price}`);
