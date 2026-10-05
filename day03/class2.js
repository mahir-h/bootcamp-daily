// Functions. We can use function declaration, default parameter and arrow function.
// Mainly used to make the block of code reusable and get an output(return) from it.

//Function declaration:

function add(a,b){
    return a+b;
}

console.log(add(2,3));

//Default parameter

function greet(name ='King'){
    return `Hello ${name}`;
}

console.log(greet());

// Arrow function: you mention the name of function
// after the equal sign mention the parameters and the arrow and then the condition/action
// you dont have to use the word function here

const square = (n) => n*n;
// console.log(square(3));

const describe = (host , ip) => {
    return `${host} is at ${ip}`;
};
// console.log(describe('King', '192.168.0.1'));