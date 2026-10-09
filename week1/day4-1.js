// Day 4: Exercise 1
// Warm-up. Write parseAmount (above) yourself, from memory. Call it with "20", "abc", "-5" and "", each inside try/catch, and print either the value or the error message. Does "" behave the way you expect? Hint: Number("") is 0. Fix it so empty input throws.

function parseAmount(input){

    const n = Number(input);
    try{
        if(input === undefined || input === null  || String(input).trim() ==="") throw new Error(`Amount cant be empty`);
        if(Number.isNaN(n)) throw new Error(`Invalid Input: ${input}`);
        if(n < 0) throw new RangeError(`Input cant be negative: ${input}`);
        console.log(`The amount entered is: ${n}`);

    } catch (err){
        console.log(err.message);
    }
}

parseAmount("20");  //The amount entered is: 20
parseAmount("abc"); //Invalid Input: abc
parseAmount("-5");  //Input cant be negative: -5
parseAmount("");    //Amount cant be empty
parseAmount("0");   //The amount entered is: 0