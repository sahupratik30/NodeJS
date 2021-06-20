//This is "Path" module in NodeJS.

const path = require("path");

console.log(path.dirname("D:/MERN/NodeJS/PathModule/path.js")); //Returns current path.

console.log(path.extname("D:/MERN/NodeJS/PathModule/path.js")); //Returns extension of current file.

console.log(path.basename("D:/MERN/NodeJS/PathModule/path.js")); //Returns name of current file.

console.log(path.parse("D:/MERN/NodeJS/PathModule/path.js")); //Returns an object whose properties represent significant elements of the path.

const fileName = path.parse("D:/MERN/NodeJS/PathModule/path.js");

console.log(fileName.name); //Returns only name of current file.

//There are many more methods present in "Path" module which are available in "Nodejs.org".

//https://nodejs.org/dist/latest-v14.x/docs/api/path.html --> Link to NodeJS official path module documentation.
