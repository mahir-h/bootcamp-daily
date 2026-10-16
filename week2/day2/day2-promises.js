// 1- Wrap a timer. Write wait(ms) that returns a Promise which resolves after ms milliseconds. Use it to print “1”, “2”, “3” one second apart, by chaining .then (no nesting).

// function wait(ms){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);

//     });
// }


// wait(1000)
//     .then(() => {
//         console.log('1');
//         return wait(1000);
//     })
//     .then(() => {
//         console.log('2');
//         return wait(1000);
//     })
//     .then(() => {
//         console.log('3');
//         // return wait(1000); // dont need this here as the program doesnt need to execute anything. 
//     })





// 2- Write getProduct(id) that resolves { id, name, price } after 300ms, or rejects with Error('Invalid id') if id isn’t a positive integer. Call it with 5, -1 and "abc", and handle each result with .then/.catch.
const product= [{"id": 1, "name": "Apple", price: 12 }];

function getProduct(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!Number.isInteger(id) || id <= 0){
                reject(new Error ('Invalid id'));
                return;
            } 
            const found = product.find(p => p.id ===id);
            
            if(!found){
                reject(new Error(`Product ${id} not found`));
            }
            else{
                resolve(found);
            }
        },300);
    })
}

getProduct(1)
    .then(product => console.log(`${product.id} ${product.name} ${product.price}`))
    .catch(err => console.log(err.message));




// 3- Write getUser(id) → getOrders(user.id) → work out the total spend → print "User 1 spent $55.00". Use one flat chain with a single .catch. Reuse your money-formatting code from week 1.







// 4- Load 3 products one after another (chained), then load them with Promise.all. Time both with console.time. Write one sentence explaining the difference.




