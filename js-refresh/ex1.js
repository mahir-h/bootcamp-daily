// Make const variables for your name, your age and whether you like coffee, then print them in one template string.
// Print the typeof of each.
// Turn the string "254" into a number and add 1.
// Print whether "10" === 10 is true or false, and explain why in a comment.
// Swap the values of two let variables a = 1, b = 2.

//A
const myName = "King";
const age = 30;
const likesCoffee = true;

console.log(`My name is ${myName}, i am ${age} years old and I like ${likesCoffee ? 'coffee' : 'water'}`);

//B
console.log(`Type of myName is ${typeof myName}`);
console.log(`Type of age is ${typeof age}`);
console.log(`Type of likesCoffee is ${typeof likesCoffee}`);

//C
const numString = "254";
const intoNumber = Number(numString);
console.log(`The number is ${intoNumber + 1}`);

//D
if ("10" === 10 ){
    console.log("true");
} else {
    console.log("false");
}

// The answer is false because the triple equal operator checks whether the value and the data type are the same or not. Since "10" is a String and 10 is a number, the data type is different.

//E
let a =1;
let b = 2;

let newA = b;
let newB = a;

a = newA;
b = newB;

console.log(` After swapping, a is ${a} and b is ${b}`);
