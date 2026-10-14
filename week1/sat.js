const nums = [3,8,1];
const doubled = nums.map( n => n*2);
console.log(doubled, nums);

const {name, role = 'member'} = {name : 'Aroha'};
console.log(role);

console.log(JSON.stringify({a:1, b: undefined, c: null}));

console.log(Number('abc'), Number(''), Number.isFinite(Number('12abc')), Number.isFinite(Number('12')));

const d = new Date('2026-10-11');
console.log(d.toISOString(), d.toString());

try{ throw new Error ('Bad amount: ');} catch(e){console.log(e.message); console.log(e.stack); }
try{throw 'Bad amount'; } catch (e){ console.log(e.message, e.stack);}