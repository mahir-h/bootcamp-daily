// Day 4: Exercise 2
//Safe JSON loader. Write loadTransactions(path). It reads a file with fs.readFileSync, parses it with JSON.parse, and returns the array. Make it throw clear messages for three cases: the file doesn’t exist (err.code === "ENOENT"), the JSON is broken, and the JSON is valid but isn’t an array. Test it with three small files you create.

function loadTransactions(path){
    const fs = require("fs");
    
    try{
        const text = fs.readFileSync(path,"utf-8")
        const arr = JSON.parse(text);
        if(Array.isArray(arr)) console.log(arr);
        else console.log("Not an array");

    } catch (err){
        console.log(err.message)
    }
}

loadTransactions("test1.json");
loadTransactions("day4-2.json");
loadTransactions("day4-t2.json");

// i can create a json file that would have some mistakes in syntax and it will clear the other requirement.
