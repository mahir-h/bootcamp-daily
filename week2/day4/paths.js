// print __dirname, process.cwd(), and the result of path.join(__dirname, "data", "todo.json"). Run it from two different folders and explain in one sentence why cwd changes but __dirname doesn’t.

import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log("dirname: ", __dirname);
console.log("cwd: ", process.cwd());
console.log("file: ", path.join(__dirname,"data","todo.json"));