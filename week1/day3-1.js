// formatNZD(cents): formatNZD(123450) → "$1,234.50", formatNZD(5) → "$0.05".

const nzd = new Intl.NumberFormat("en-NZ",{category: "currency", currency: "NZD"});

function formatNZD(cents){
    return nzd.format(cents /100);
}

console.log(formatNZD(123450));
console.log(formatNZD(5));