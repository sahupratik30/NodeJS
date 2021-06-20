//This is an example of import and export in NodeJS.

const { add, sub, multi, div } = require("./arith.js"); //Using object destucturing to import multiple modules.

console.log(`Addition of 5 and 5 : ${add(5, 5)}`);

console.log(`Subtraction of 10 and 5 : ${sub(5, 10)}`);

console.log(`Multiplication of 5 and 5 : ${multi(5, 5)}`);

console.log(`Division of 10 and 5 : ${div(10, 5)}`);
