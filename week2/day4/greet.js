// node greet.js King prints Hello, King!. With no name it prints a usage message and sets process.exitCode = 1.

const userName = process.argv[2];

if(!userName){
    console.error("Usage: node greet.js name");
    process.exitCode = 1; // which tells the terminal that it failed
} else{
    console.log(`Hello ${userName}`);
}