// This is OS module in NodeJS.

const os = require("os");

console.log(os.hostname()); //Returns hostname.

console.log(os.type()); //Returns OS type i.e, LINUX, MacOS, WINDOWS etc.

console.log(os.arch()); //Returns architecture i.e, 32-bit, 64bit.

console.log(`${os.totalmem()} total space in bytes`); //Returns total memory i.e, RAM in bytes.

console.log(`${os.totalmem() / 1024 / 1024 / 1024} total space in GB`); //Returns total memory i.e, RAM in GB.

console.log(`${os.freemem()} space availble in bytes`); //Returns free mamory available in bytes.

console.log(`${os.freemem() / 1024 / 1024 / 1024} space availble in GB`); //Returns free mamory available in GB.

console.log(os.platform()); //Returns platform.

//There are many more methods present in OS module which are available in "Nodejs.org".

// https://nodejs.org/dist/latest-v14.x/docs/api/os.html --> Link to NodeJS official os module documentation.
