const os = require('os');

// info about current user

const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds

// const time = os.uptime();
// console.log(time);

console.log(`the system uptime is :${os.uptime()} seconds`);

const currentos = {
    osname : os.type(),
    platform : os.platform(),
    release : os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
} 

console.log(currentos);