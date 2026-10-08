// parseAmount(input): returns integer cents, or null if the input is invalid. Must handle " 12.5 " → 1250, "$1,200" → 120000, "abc" → null, "" → null, "-5" → null. (Hint: trim, remove $ and ,, then Number, then check.)

function parseAmount(input){
const cleaned = input.trim().replaceAll("$","").replaceAll(",","");

if(cleaned ==="") return null;

const amount = Number(cleaned);

if( Number.isNaN(amount) || amount < 0 ) return null;

return Math.round(amount * 100);

}

console.log(parseAmount(" 12.5 "));   // 1250
console.log(parseAmount("$1,200"));   // 120000
console.log(parseAmount("1.15"));     // 115
console.log(parseAmount("abc"));      // null
console.log(parseAmount(""));         // null
console.log(parseAmount("-5"));       // null