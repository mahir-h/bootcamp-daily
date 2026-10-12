export function formatNZD(n){
    return new Intl.NumberFormat("en-NZ", {style: "currency" , currency: "NZD"}).format(n);
}

// convert 2026-10-09 to 9 October 2026
export function formatDate(isoString){
    return new Intl.DateTimeFormat("en-NZ",{
        day: 'numeric', month: 'long', year: 'numeric'
    }).format(new Date(isoString))
}

export function capitalise(str){
    return str[0].toUpperCase() + str.slice(1);
}