export function formatNZD(amount){
    if(Number.isNaN(Number(amount)) || amount <= 0 ){
        process.exit(1);
    }
    return new Intl.NumberFormat("en-NZ",{style: "currency", currency: "NZD"}).format(amount);
}