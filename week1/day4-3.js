// Day 4- exercise 3
// Validate a batch. Given an array of transactions { id, amount, category, date }, return { valid: [...], errors: [...] }. Use a ValidationError for each bad row (missing category, bad amount, invalid date). Don’t stop at the first bad row. Collect them all, like { id: 4, field: "amount", message: "..." }.

const transactions = [{"id": 1, "amount": 10, "category": "food", "date": "2026-10-01"},
                    {"id": 2, "amount": -10, "category": "food", "date": "2026-10-01"},
                    {"id": 3, "amount": 20, "date": "2026-10-01"},
                    {"id": 4, "amount": 40, "category": "food", "date": "2026-10-01"},
                    {"id": 5, "amount": 50, "category": "food", "date": "1-10-2026"},
];

class ValidationError extends Error{
    constructor(field,message){
        super(message);
        this.name= "ValidationError";
        this.field= field;
    }
}

function validateTransactions(t){
    if(!t.category || t.category.trim()=== ""){
        throw new ValidationError("category", "Category is required");
    }

    if(typeof t.amount !=="number" || Number.isNaN(t.amount)){
        throw new ValidationError("amount",`shounld be a number`);
    }

    if(t.amount < 0){
        throw new ValidationError("amount","Amount cannot be negative");
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(t.date) || Number.isNaN(new Date(t.date).getTime())){
        throw new ValidationError("date","Date must be YYYY-MM-DD");
    }
}

function validateBatch(txns){
    const valid= [];
    const errors = [];

    for(const t of txns){
        try{
            validateTransactions(t);
            valid.push(t);
        } catch(err){
            if(err instanceof ValidationError){
                errors.push({id:t.id, field: err.field, message: err.message});
            } else{
                throw err;
            }
        } 
    }
    return {valid, errors};
}

const result = validateBatch(transactions);
console.log("Valid:", result.valid.map(t=> t.id));
console.table(result.errors);