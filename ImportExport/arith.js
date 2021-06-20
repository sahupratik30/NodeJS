//Here we will define various functions to perform arithmetic calculations.

//Function for addition.
const add = (a, b) => {
  return a + b; //Returns addition of two numbers.
};

//Function for subtraction.
const sub = (a, b) => {
  return Math.abs(a - b); //Returns subtraction of two numbers.
};

//Function for multiplication.
const multi = (a, b) => {
  return a * b; //Returns multiplication of two numbers.
};

//Function for Division.
const div = (a, b) => {
  return a / b; //Returns division of two numbers.
};

module.exports = { add, sub, multi, div }; //Using object destucturing to export multiple modules.
