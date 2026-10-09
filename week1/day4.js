// Learning about throw error, catch, custom errors and debugging

function parseAmount(input){
    const n = Number(input);
    if (Number.isNaN(n)) throw new Error(  `Invalid ammount: ${input}`);
    if(n<0) throw new RangeError(`Amount cannot be negative: ${n}`);
    return Math.round(n * 100) / 100;
}


// Catching: tells code what to do with the error

try{
    const amount = parseAmount("12.5x");
    console.log("Saved", amount);
} catch (err){
    console.log("Could not save:", err.message); // will print a single line with the error message.

} finally{
    console.log("Done Processing");
}

// Custom Errors: Lets user to tell kinds of error apart.

class ValidationError extends Error {
    constructor(field, message) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}