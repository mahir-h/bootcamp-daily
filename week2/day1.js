// 1 - Predict the order (warm-up). Write your guess down first, then run it and explain any surprises in a comment.

// console.log('A');
// setTimeout(() => console.log('B'), 0);
// setImmediate(() => console.log('C'));
// Promise.resolve().then(() => console.log('D'));
// process.nextTick(() => console.log('E'));
// console.log('F');

//A F D E B C

// 2- Fake database with callbacks. Write findUserById(id, callback) that looks up a user in a hard-coded array after setTimeout(..., 300) to simulate a slow database. If the user exists, call callback(null, user). If not, call callback(new Error('User not found')). Test it with a valid ID and an invalid one.

// function findUserById(id, callback){

//     const users = [
//         {id: 1, name:'Aroha', email: 'aroha@mail.com'},
//         {id: 2, name:'Sam', email: 'sam@mail.com'},
//         {id: 3, name:'Priya', email: 'priya@mail.com'},
//     ]

//     setTimeout(() => {},300);
//     const user = users.find(u => u.id === id);

//     if(user) return callback(null, user);
    
//     else callback(new Error('User not found'));
// }

// findUserById(1,(err, user) => {
//     if (err) return console.log(err.message);
//     console.log(user.name);
// });

// findUserById(66,(err, user) => {
//     if (err) return console.log(err.message);
//     console.log(user.name);
// });

// console.log('Searching...');

// 3 - Read, process, write. Create orders.json, an array of { id, product, qty, price }. Use fs.readFile with a callback to load it, calculate the total revenue, then use fs.writeFile with a callback to save summary.json as { orderCount, revenue }. Handle errors at every step (try a missing file and some broken JSON).

const fs = require('fs');
fs.readFile('orders.json','utf8',(err,data) => {
    if(err) return console.log(err.message);

    let orders;
    try{
        orders = JSON.parse(data);
    }catch(e){
    return console.log(e.message);
    }

    const revenue = orders.reduce((sum,o) => sum + (o.qty * o.price), 0);
    const summary = {orderCount: orders.length, revenue};

    fs.writeFile('summary.json',JSON.stringify(summary,null,2),(err)=> {
    if (err) return console.log(err.message);
    console.log(summary);
    });

});

    console.log("Reading order...");


