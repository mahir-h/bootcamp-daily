// Fake API data: https://jsonplaceholder.typicode.com

// Exercise 1: Fetch /todos/5 and print Todo #5: <title> (done/not done)
const res = await fetch("https://jsonplaceholder.typicode.com/todos/5");
const todo = await res.json(); //this makes the code to read the body 

console.log(`Todo #${todo.id}: ${todo.title} ${todo.completed? "done" : "not done"}`);
