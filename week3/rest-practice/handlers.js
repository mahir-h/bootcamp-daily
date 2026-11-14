
const tasks = [
    {id: 1, title: "Buy milk", status: "todo", priority: "low"},
    {id: 2, title: "Pay rent", status: "done", priority: "high"},
    {id: 3, title: "call mum", status: "doing", priority: "medium"},
];

function listTasks(query){
    if(query.status){
        console.log("filtering!");
        const filteredTasks= tasks.filter(t => t.status ===query.status);
        return {status: 200, body: filteredTasks};
    }
    return {status: 200, body: tasks};
}

console.log(listTasks({}));
console.log(listTasks({status: "done"}));
console.log(listTasks({status: "nope"}));