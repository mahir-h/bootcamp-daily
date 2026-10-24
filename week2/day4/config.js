// read APP_NAME and MAX_TASKS from a .env file with --env-file. If MAX_TASKS is missing or not a number, default to 10. Print the final config.

const appName = process.env.APP_NAME || "My App";

const maxRaw = Number(process.env.MAX_TASKS);
const maxTasks = Number.isInteger(maxRaw) && maxRaw > 0 ? maxRaw : 10;

const config = {appName,maxTasks};
console.log(config);