// practice- ignore it
// const tx = [{cat:"food", amt: 12}, {cat:"rent",amt:400},{cat:"food",amt:8}];

// console.log(tx.map(p => p.amt)); //1- map -> array of amounts only
// console.log(tx.filter(p=> p.cat ==="food")); //2- filter -> only food
// console.log(tx.reduce((sum,t) => sum + t.amt, 0)); //3- reduce -> total spent

// const a = tx.filter(p => p.cat === "food").reduce((sum,t) => sum + t.amt, 0);

// const b = tx.filter(p => p.cat === "rent").reduce((sum,t) => sum + t.amt, 0);
// console.log(`food: ${a}, rent: ${b}`);

// path: builds file path

// import path from "node:path";
// import { fileURLToPath } from "node:url";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// const file = path.join(__dirname,"data","notes.json");
// path.extname(file);
// path.basename(file);

// ----------fs/promise

import fs from "node:fs/promises";

async function loadNotes(file) {
    try{
        const text = await fs.readFile(file,"utf8");
        return JSON.parse(text);
    }catch(err){
        if (err.code === "ENOENT") return [];
        throw err;
    }
}

async function saveNotes(file,notes) {
    await fs.mkdir(path.dirname(file), {recursive: true});
    await fs.writeFile(file, JSON.stringify(notes,null,2));
}