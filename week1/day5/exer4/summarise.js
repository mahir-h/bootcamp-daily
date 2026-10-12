export function summarise(expenses){
    if (expenses.length === 0) return {count: 0, total:0, average: 0};
    const total = expenses.reduce((sum,e) => sum + e.amount, 0);
    return {count: expenses.length, total, average: total / expenses.length};
}