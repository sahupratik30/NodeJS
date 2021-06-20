//This is example of importing node modules.

const chalk = require("chalk");

const validator = require("validator");

const res = validator.isEmail("abc@gmail.com"); //Using npm "validator" module for e-mail validation.

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res)); //Using npm "chalk" module to style the output in the terminal.
