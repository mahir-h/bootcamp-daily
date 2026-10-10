const args = process.argv.slice(2);
const file = args[0];
const monthIdx = args.indexOf('--month');
const month = monthIdx !== -1? args[monthIdx +1] : null;

import readline from 'node:readline/promise';
import {stdin as input, stdout as output} from 'node:process';

const r1 = readline.createInterface({input,output});
const name = await r1.question('Item Name?');
const price = Number(await r1.question('Price?'));
r1.close();
console.log(`${name}: ${price}`);