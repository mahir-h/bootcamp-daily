// to create a for loop that would print out the following message 5 times: "Attempt: 0", "Attempt: 1", "Attempt: 2", "Attempt: 3", "Attempt: 4", "Attempt: 5"
for(let i =0; i <=5; i++){
    console.log("Attempt: " +i);
}

// to create an array with 3 elements.
// use for loop to print each individual element in the array
const vlans =[10, 20, 30];
for(const v of vlans){
    console.log("VLAN: " + v);
}

const ports= [22,80,443];
for(const p of ports){
    console.log("Port: " + p);
}