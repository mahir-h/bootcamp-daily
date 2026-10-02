// Given const port = 3389;, print the service name for 22, 23, 53, 80, 443 and 3389, or "unknown". Then add a check: if the port is below 1 or above 65535, print "invalid port". Test it with 5 different values.
// Need to use if/else

let port = 80;

if (port < 1 || port > 65535) {
    console.log ("invalid port");
} else {
    switch (port) {
        case 22:
            console.log("SSH");
            break;
        case 23:
            console.log("Telnet");
            break;
        case 53:
            console.log("DNS");
            break;
        case 80:
            console.log("HTTP");
            break;
        case 443:
            console.log("HTTPS");
            break;
        case 3389:
            console.log("RDP");
            break;
        default:
            console.log("unknown");
    }
}