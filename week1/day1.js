const products = [
  { id: 1, name: "Laptop",  price: 1899, category: "tech",   inStock: true  },
  { id: 2, name: "Mouse",   price: 49,   category: "tech",   inStock: true  },
  { id: 3, name: "Desk",    price: 420,  category: "office", inStock: false },
  { id: 4, name: "Chair",   price: 310,  category: "office", inStock: true  },
  { id: 5, name: "Monitor", price: 399,  category: "tech",   inStock: false },
];

// map - change every item.
const names = products.map(p=>p.name);

// filter- keeps the item that meets the requirement
// must return true to keep the item and false to drop the items
const f= products.filter(p=>p.inStock);

//find - any item that matches first with the criteria will be returned
// else it will assign undefined
const a1= products.find(p=> p.id===99);

// reduce - combines things to one value
const total = products.reduce((sum,p) => sum + p.price , 0);

// chaining method - in below example, i dont have to enter products.reduce.
const chainingMethod = products.filter(p => p.category ==="tech" && p.inStock)
                        .reduce((sum,p) => sum +p.price, 0);

console.log(chainingMethod);