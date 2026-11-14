
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

// console.log(listTasks({status: "done"}));
// console.log(listTasks({status: "nope"}));

function createTasks(body){
    
    if(!body.title || body.title.trim() ===""){
        return { status: 400, body: {error: "title is required"}};
    }

    const id = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    
    const newTask = {id, title: body.title, status: "todo", priority: body.priority || "medium"};

    tasks.push(newTask);
    return {status: 201, body: newTask};
}

// console.log(createTasks({title: "Gym"}));

function deleteTask(id){
    const index = tasks.findIndex(t=> t.id ===id);
    if(index=== -1){
        return {status: 404, body: {error: "task id doesnt exist"}};
    }
    tasks.splice(index,1);
    return {status: 204};
}

function updateTask(id,body){
    
}

// console.log(listTasks({}));

