// cleanCategory(s): " FOOD " → "Food", "eating OUT" → "Eating out".


function cleanCategory(s){
    const cleaned = s.trim();
    
    const upper =cleaned.toUpperCase();
    const lower =cleaned.toLowerCase();

    return `${upper.slice(0,1)}${lower.slice(1)}`;

}

console.log(cleanCategory("FoOD"));
