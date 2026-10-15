// 1 - Predict the order (warm-up). Write your guess down first, then run it and explain any surprises in a comment.

// console.log('A');
// setTimeout(() => console.log('B'), 0);
// setImmediate(() => console.log('C'));
// Promise.resolve().then(() => console.log('D'));
// process.nextTick(() => console.log('E'));
// console.log('F');

//A F D E B C

// 2- Fake database with callbacks. Write findUserById(id, callback) that looks up a user in a hard-coded array after setTimeout(..., 300) to simulate a slow database. If the user exists, call callback(null, user). If not, call callback(new Error('User not found')). Test it with a valid ID and an invalid one.

function findUserById(id, callback){

    const users = [
        {id: 1, name:'Aroha', email: 'aroha@mail.com'},
        {id: 2, name:'Sam', email: 'sam@mail.com'},
        {id: 3, name:'Priya', email: 'priya@mail.com'},
    ]

    setTimeout(() => {},300);
    const user = users.find(u => u.id === id);

    if(user) return callback(null, user);
    
    else callback(new Error('User not found'));
}

findUserById(1,(err, user) => {
    if (err) return console.log(err.message);
    console.log(user.name);
});

findUserById(66,(err, user) => {
    if (err) return console.log(err.message);
    console.log(user.name);
});

console.log('Searching...');