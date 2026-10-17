// const wait = (ms) => new Promise ((resolve) => setTimeout(resolve,ms));

// function getUser(id){
//     return wait(300).then(() =>{
//         if (id !==1) throw new Error(`User ${id} not found`);
//         return { id: 1, name: 'Aroha', taskIds: [10,11]};
//     });
// }

// console.log('A');
// getUser(2).then(u => console.log('C', u.name)).catch(e => console.log(e.message));
// console.log('B');

// async function showUserTasks(id){
//     try{
//         const user = await getUser(id);
//         const tasks = await getTasks(user.taskIds);
//         console.log(`${user.name} has ${tasks.length} tasks`);
//     }catch (err){
//         console.log(err.message);
//     }finally{
//         console.log('Done');
//     }
// }

// //sequential
// const a = await getProduct(1);
// const b = await getProduct(2);

// //parallel
// const [a,b] = await Promise.all([getProduct(1), getProduct(2)]);