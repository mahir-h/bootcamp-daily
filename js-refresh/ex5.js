//const ip = "192.168.1.300";

// Split it into parts with ip.split(".").
// It's valid only if there are exactly 4 parts and every part is a number from 0 to 255.
// Print "192.168.1.300 is INVALID" or "... is VALID".
// Test these: 10.0.0.1, 256.1.1.1, 1.2.3, 172.16.abc.1.
// Bonus: also print the class (A/B/C) from the first octet.


const ip = "172.16.a.1";

const splitParts = ip.split(".");

if (splitParts.length !==4){
    console.log(`${ip} is INVALID`);
}else {

    let ipValidity = true;
    for (let i = 0; i < splitParts.length; i++){

        if (splitParts[i] < 0 || splitParts[i] >255 || splitParts[i] === "" || isNaN(splitParts[i])){
            ipValidity = false;
            break;
        }
        
    }

    if(ipValidity) {
        console.log(`${ip} is VALID`);
    }else{
        console.log(`${ip} is INVALID`);
    }

}

// determine class A/B/C from first octet
if (splitParts[0] <= 126 ){
    console.log(`${ip} is Class A`);
} else if (splitParts[0] >= 128 && splitParts[0] <= 191) {
    console.log(`${ip} is Class B`);
} else {
    console.log(`${ip} is Class C`);
}