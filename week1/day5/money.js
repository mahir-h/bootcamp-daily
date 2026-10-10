// Learning splitting code for export/import
export function formatNZD(n){
    return new Intl.NumberFormat("en-NZ",{style: 'currency', currency: "NZD"}).format(n);
}
export const GST = 0.15;
export default function addGST(n){
    return n * (1+ GST);
}