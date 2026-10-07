const tx = {id:1,date:"2026-10-03",category:"food",amount:18.5,note:"lunch"};

console.log(tx.amount);

console.log(tx.category);
console.log(tx["category"]);

const key = "note";
console.log(tx.key);  // gives undefined
console.log(tx[key]);  //use [] is the key is in variable. gives lunch

tx.paid = true; //to add a key
delete tx.note;  // to remove a key

console.log(Object.keys(tx));
console.log(Object.entries(tx));


// Destructuring pulls values out into variables:
const {category,amount} = tx; //this pulls out 2 keys from tx
const {note ="no note"} = tx; //if the key is missing, provide default value
const {amount:price } = tx; //rename "amount" to "price"

const[first,second, ...rest] = [10,20,30,40]; //It works. arrays work by position

// Use of destructuring in function
function describe({category,amount}){
    return `${category} : $${amount.toFixed(2)}`;
}

console.log(describe(tx)); // for destructuring, make sure to run object if i want to print result. 

// Spread ...object or ...array is used to clone them or merge new to existing( which may add things to overwrite if the key doesnot exist and exist respectively)
const updated= {...tx,amount:20}; //copies object to new variable and overwrite amount
console.log(updated);

const withTag = { ...tx,tags:["work"]};
console.log(withTag);

// const all = {...januaryTxs, ...februaryTxs}; //Its an example to show that we can merge 2 objects using Spread. 
// console.log(all); //error, because januaryTxs and februaryTxs are not defined. 

// Example to show how nested objects/arrays still share changes
const a = {user:{name:"King"}};
console.log(a.user.name); // will print King
const b ={...a};
b.user.name= "x";
console.log(a.user.name); // will print x 


// JSON: Used by APIs and files to pass data around.
// most commonly used are JSON.stringify() and JSON.parse().
// For parse, always use try and catch method. Else it will crash server, etc.

const text = JSON.stringify(tx); // Object converts to String
console.log(text);
const pretty = JSON.stringify(tx,null,2); //output gets printed where each key and enteries have their row
console.log(pretty);
const back = JSON.parse(text); // converts Strings back to object!
// but use try and catch . COMPULSORY
try {
    JSON.parse("{bad json}");
} catch (error) {
    console.log("Invalid JSON:",error.message);
}
console.log(back); // this will throw error. and tell you why there is an error