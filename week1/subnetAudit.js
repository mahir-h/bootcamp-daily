//use filter to get the hosts in 192.168.1.0/24. Hint: startsWith, or split(".").
//use map to turn each host into { ip, lastOctet: Number(...) }
// use reduce to count the hosts per /8 private range (10, 172, 192), giving { "10": 2, "172": 1, "192": 3 }

// Part 1:
const hosts = ["192.168.1.10","10.0.0.5","192.168.1.200","172.16.4.1","192.168.2.7","10.0.0.99"];

const a = hosts.filter(ip => ip.startsWith("192.168.1."));

console.log(a);

// Part 2:
const b = hosts.map(ip =>{
    const lastNum = Number(ip.split(".")[3]);
    return {ip, lastOctet:lastNum};
});

console.log(b);

// Part 3: use reduce to count the hosts per first octet
const c= hosts.reduce((total,ip) => {
    const firstNum = ip.split(".")[0];
    total[firstNum]= (total[firstNum] || 0) + 1
    return total
},{});
console.log(c);