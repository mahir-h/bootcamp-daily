// Print the numbers 1–20.
// Print only the even numbers from 2 to 20.
// Add up 1 to 100 and print the total (it should be 5050).
// FizzBuzz from 1 to 30.
// Count down from 10 to 1 with a while loop, then print "Liftoff".

//a
console.log("Numbers from 1 to 20:");
for (let i =1; i <=20; i++) {
    console.log(i);
}

//b
console.log("Even numbers from 2 to 20:");
for (let i =2; i <=20; i++){
    if(i % 2 ==0){
        console.log(i);
    }
}

//c
let total = 0;
for(let i = 1; i <=100; i++){
    total = total + i;
}

console.log(`The total sum from 1 to 100 is ${total}`);

//d
for (let i = 1; i <=30; i++){
    if(i % 3 == 0 && i % 5 ==0){
        console.log("FizzBuzz");
    } else if ( i % 3 ==0){
        console.log("Fizz");
    } else if (i % 5 ==0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//e
let countDown = 10;
while (countDown > 0){
    console.log(countDown);
    countDown--;
}
console.log("Liftoff");