const wait = (ms) => new Promise((resolve)=> setTimeout(resolve,ms));

function getUser(id){
    return wait(300).then(()=> {
        if(id !== 1) throw new Error(`user ${id} not found`);
        return {id: 1, name: 'Aroha', taskIds: [10,11]};
    });
}


const PRODUCTS = { 1: {name: 'Desk', price: 250},
                   2: {name: 'Chair', price: 120},
                   3: {name: 'Lamp', price: 45}};

async function getProduct(id){
    await wait(300);
    if(!PRODUCTS[id]) throw new Error(`No product ${id}`);
    return PRODUCTS[id];
}

async function getTasks(ids){
    await wait(200);
    return ids.map(id => ({id, title: `Task ${id}`, done: id % 2 === 0}));
}

// 1- Write showUserTasks using .then() chains first, then rewrite it with async/await. It should print the user’s name and how many tasks are done

// function showUserTasks(id) {
//     return getUser(id).then(user => {
//         return getTasks(user.taskIds).then(tasks => {
//             const done = tasks.filter(t => t.done).length;
//             return {name: user.name, done, total: tasks.length};
//         });
//     });
// }

// showUserTasks(1)
//     .then(result => console.log(`${result.name}: ${result.done} of ${result.total}`))
//     .catch(err => console.log(err.message));

// async function showUserTasks(id){
//     try{
//         const user = await getUser(id);
//         const tasks = await getTasks(user.taskIds);
//         const done = tasks.filter(t => t.done).length;
//         return {user:user.name, done: done, tasks: tasks};
//         // console.log(`${user.name}: ${done} of ${tasks.length} completed`);
//     }catch(err){
//         console.log(err.message);
//     }
// }


//Exercise 2
// async function showUserTasks(id){
    
//         const user = await getUser(id);
//         const tasks = await getTasks(user.taskIds);
//         const done = tasks.filter(t => t.done).length;
//         return {user:user.name, done: done, tasks: tasks};
//         // console.log(`${user.name}: ${done} of ${tasks.length} completed`);
// }

// function loadDashboard(id){
//     console.log("Loading...");
//     return showUserTasks(id);
// }

// loadDashboard(2)
//     .then(t => console.log(`${t.user}: ${t.done} of ${t.tasks.length} completed`))
//     .catch(err => console.log(`User does not exist: ${err.message}`))
//     .finally(() => console.log(`Finished`));


// Exercise 3

const ids = [1, 2, 3];

console.time('seq');
for (const id of ids) {
  const product = await getProduct(id);
  console.log(product.name);
}
console.timeEnd('seq');

console.time('parallel');
const products = await Promise.all(ids.map(id => getProduct(id)));
products.forEach(p => console.log(p.name));
console.timeEnd('parallel');

const ranIDS = [1,2,45];
try{
    await Promise.all(ranIDS.map(id => getProduct(id)));
}catch(err){
    console.log(err.message);
}

const results = await Promise.allSettled(ranIDS.map(id => getProduct(id)));

