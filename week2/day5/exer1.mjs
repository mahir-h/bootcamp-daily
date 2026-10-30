// Fake API data: https://jsonplaceholder.typicode.com

// Exercise 1: Fetch /todos/5 and print Todo #5: <title> (done/not done)
const res = await fetch("https://jsonplaceholder.typicode.com/todos/5");
const todo = await res.json(); //this makes the code to read the body 

console.log(`Todo #${todo.id}: ${todo.title} ${todo.completed? "done" : "not done"}`);


// Exercise 2: Using your getJSON, fetch /users/1 and then /users/9999. The first should print the user’s name. The second should print a clean error with the status code, not a crash. (Hint: JSONPlaceholder returns {} with a 404 for missing users.)
// works with any url.
async function getJSON(url){
    const res = await fetch(url);
    if(!res.ok){
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
    }
    return res.json();
}

async function main(){
    try{
        const user = await getJSON("https://jsonplaceholder.typicode.com/users/1");
        console.log("Found:",user.name);
    }catch (err){
        console.log(err.message);
    }

    try{
        const user = await getJSON("https://jsonplaceholder.typicode.com/users/9999");
        console.log("Found:",user.name);
    }catch (err){
        console.log(err.message);
    }
}

main();


