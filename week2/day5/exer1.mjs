// Fake API data: https://jsonplaceholder.typicode.com

// Exercise 1: Fetch /todos/5 and print Todo #5: <title> (done/not done)
// const res = await fetch("https://jsonplaceholder.typicode.com/todos/5");
// const todo = await res.json(); //this makes the code to read the body 

// console.log(`Todo #${todo.id}: ${todo.title} ${todo.completed? "done" : "not done"}`);


// Exercise 2: Using your getJSON, fetch /users/1 and then /users/9999. The first should print the user’s name. The second should print a clean error with the status code, not a crash. (Hint: JSONPlaceholder returns {} with a 404 for missing users.)
// works with any url.
async function getJSON(url){
    const res = await fetch(url);
    if(!res.ok){
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
    }
    return res.json();
}

// async function main(){
//     try{
//         const user = await getJSON("https://jsonplaceholder.typicode.com/users/1");
//         console.log("Found:",user.name);
//     }catch (err){
//         console.log(err.message);
//     }

//     try{
//         const user = await getJSON("https://jsonplaceholder.typicode.com/users/9999");
//         console.log("Found:",user.name);
//     }catch (err){
//         console.log(err.message);
//     }
// }

// main();

// Exercise 3: Fetch /todos (200 items). Use filter and reduce (this is week-1 practice too) to print, for each userId, how many todos are completed and how many are not, e.g. User 1: 11 done, 9 open.

// try {
//   const todos = await getJSON("https://jsonplaceholder.typicode.com/todos");
//   const stats = {};
//   for (const t of todos){
 
//     if(!stats[t.userId]){
//         stats[t.userId] = { done: 0, open: 0 };
//     }

    
//         if(t.completed){
//             stats[t.userId].done++;
//         }else{
//             stats[t.userId].open++;
//         } 
    
// }

// for (const [userId, counts] of Object.entries(stats)){
//     console.log(`User ${userId}: ${counts.done} done, ${counts.open} open`);
// }
    
// } catch (err) {
//   console.error("Could not load todos:", err.message);
// }

// Exercise 4: Fetch /users/1, /users/2 and /users/3 at the same time with Promise.all, then print their names. Time it with console.time and compare that with fetching them one after another.

const BASE = "https://jsonplaceholder.typicode.com/users";

async function onebyone(){
    console.time("onebyone");
    const u1 = await getJSON(`${BASE}/1`);
    const u2 = await getJSON(`${BASE}/2`);
    const u3 = await getJSON(`${BASE}/3`);
    console.timeEnd("onebyone");

    console.log(u1.name, '|', u2.name, '|', u3.name);
}



async function parallel(){
        console.time("parallel");
       
        const [u1,u2,u3] = await Promise.all([
            getJSON(`${BASE}/1`),
            getJSON(`${BASE}/2`),
            getJSON(`${BASE}/3`),
        ]);

        console.timeEnd("parallel");
        console.log(u1.name, '|', u2.name, '|', u3.name);
    }

    try{
        await onebyone();
        await parallel();
    } catch(err){
        console.log(err.message);
    }





