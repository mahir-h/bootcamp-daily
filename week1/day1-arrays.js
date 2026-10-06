// 1- Warm-up: given const nums = [4, 9, 15, 22, 7, 30];, use filter to get the even numbers, map to double every number, and reduce to add them all up. Use one method for each.

const nums = [4,9,15,22,7,30];

nums.map(n => n.nums *2);

nums.filter(n => n.nums % 2 ===0);
const a =nums.reduce((total,n) => total + n, 0);

console.log(a);

// 2- Transactions: create an array of 8 objects shaped like { id, desc, amount, category } (categories such as food, transport and rent). Then:
//find the first transaction over $100
//list the descriptions of all food transactions
//work out the total amount spent

const tx = [{id: 1, desc: "Groceries", amount: 85, category: "food"},
    { id: 2, desc: "Bus card",  amount: 20,  category: "transport" },
  { id: 3, desc: "Rent",      amount: 450, category: "rent" },
  { id: 4, desc: "Pizza",     amount: 25,  category: "food" },
  { id: 5, desc: "Burger",  amount: 15,  category: "food" },
  { id: 6, desc: "Car",      amount: 450, category: "transport" },
  { id: 7, desc: "Egg",     amount: 50,  category: "food" },
  { id: 8, desc: "Bike",  amount: 10,  category: "transport" },
]

const firstT = tx.find(t => t.amount > 100);

const foodT = tx.filter(t => t.category ==="food")
              .map(t => t.desc);
console.log(foodT);

const amountSpent = tx.reduce((total,t) => total + t.amount, 0);
console.log(amountSpent);

// Group and total: use reduce to build { food: 123.5, transport: 40, ... } from your transactions. 
// Print it with console.table().

const byCategory = tx.reduce((acc,t) => {
//acc is an empty object that you fill as you go.
acc[t.category] = (acc[t.category] || 0) +t.amount;
return acc;
},{});

console.table(byCategory);