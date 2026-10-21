// practice- ignore it
const tx = [{cat:"food", amt: 12}, {cat:"rent",amt:400},{cat:"food",amt:8}];

console.log(tx.map(p => p.amt)); //1- map -> array of amounts only
console.log(tx.filter(p=> p.cat ==="food")); //2- filter -> only food
console.log(tx.reduce((sum,t) => sum + t.amt, 0)); //3- reduce -> total spent
