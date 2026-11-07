const tasks = [
    {id:1, title: "Buy Milk", status: "todo", priority: "low"},
    {id: 2, title: "Pay ren", status: "done", priority: "high"},
];

function getTask(id){
    const task = tasks.find(t => t.id === id);
    if(!task) return {status: 404, body: {error: "Task not found"}};
    return {status:200, body: task};
}

console.log(getTask(1));
console.log(getTask(5));