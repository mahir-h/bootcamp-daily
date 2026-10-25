import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const TODO_FILE = path.join(__dirname, "data", "todo.json");

console.log(TODO_FILE);

// Part 2:

const commandW = process.argv.slice(2);
const command = commandW[0];
const args = commandW.slice(1);

console.log(command, args);

// Part 3:

async function loadTasks() {
  try {
    const text = await fs.readFile(TODO_FILE, "utf8");
    return JSON.parse(text);
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

const tasks = await loadTasks();

async function saveTasks(tasks) {
  await fs.mkdir(path.dirname(TODO_FILE), { recursive: true });
  await fs.writeFile(TODO_FILE, JSON.stringify(tasks, null, 2));
}

// Part 4:

switch (command) {
  case "add": {
    const text = args.join(" ").trim();
    if (!text) {
      console.error('Usage: node todo.js add "task text"');
      process.exitCode = 1;
    } else {
      const id = tasks.length + 1;
      tasks.push({ id, text, done: false });
      await saveTasks(tasks);
      console.log(`Added #${id}: ${text}`);
    }
    break;
  }
  case "list": {
    if (tasks.length === 0) {
      console.log("No tasks yet.");
    } else {
      for (const t of tasks) {
        const box = t.done ? "[x]" : "[ ]";
        console.log(`${box} ${t.id}. ${t.text}`);
      }
    }
    break;
  }
  case "done": {
    const check = Number(args[0]);
    const task = tasks.find((t) => t.id === check);
    if (!task) {
      console.error(`No task with id: ${args[0]} found`);
      process.exitCode = 1;
    } else {
      task.done = true;
      await saveTasks(tasks);
      console.log(`Completed #${task.id}: ${task.text}`);
    }
    break;
  }
  default: {
    console.log("Usage:");
    console.log(' node todo.js add "Buy milk"');
    console.log(" node todo.js list");
    console.log(" node todo.js done 1");
    process.exitCode = 1;
  }
}
