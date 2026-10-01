const add = Number(process.argv[2]) + Number(process.argv[3]);

if (isNaN(add)) {
  console.log("Error, please enter 2 numbers");
} else {
  console.log(`The sum is: ${add}`);
}