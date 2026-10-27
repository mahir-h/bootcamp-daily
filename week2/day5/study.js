// // fetch() for APIs

// const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
// console.log(res.status);

// async function getJSON(url){
//     const res = await fetch(url);
//     if (!res.ok){
//         throw new Error(`Request failed: ${res.status} ${res.statusText}`);
//     }
//     return res.json();
// }
// const user = await res.json();
// console.log(user.name, user.email);

// // handling failures properly:

// async function getUser(id) {
//     try {
//         return await getJSON(`https://jsonplaceholder.typicode.com/users/${id}`);
//     } catch (error) {
//         console.error(`Could not load user ${id}:`,error.message);
//         return null;
//     }
// }

// sending data (POST)

// const res = await fetch("https://jsonplaceholder.typicode.com/todos",{
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({title: "Learn fetch",completed: false, userID: 1}),
// });

// console.log(res.status, await res.json());

// Timeout for slow APIs so app dont hang

const res = await fetch("https://jsonplaceholder.typicode.com/todos", {signal: AbortSignal.timeout(5000)});
console.log(res);


