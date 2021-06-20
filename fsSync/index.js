//This is synchronous "file system programming".

const fs = require("fs");

fs.writeFileSync("read.txt", "Hi! This is file system program in NodeJs.");

fs.appendFileSync("read.txt", "This is appended."); //Appends data at the end of the file.

const data = fs.readFileSync("read.txt"); //Returns Buffer data.

{
  /* <Buffer 48 69 21 20 54 68 69 73 20 69 73 20 66 69 6c 65 20 73 79 73 74 65 6d 20 70 72 6f 67 72 61 6d 20 69 6e 20 4e 6f 64 65 4a 73 2e 54 68 69 73 20 69 73 20 ... 9 more bytes> */
}

const originalData = fs.readFileSync("read.txt", "utf-8");

console.log(originalData); //Returns data in String or Original form.

// Hi! This is file system program in NodeJs.This is appended.

//fs.mkdirSync("New Folder"); //Creates a new Directory.

fs.writeFileSync("New Folder/new.txt", "This is a new file"); //Creates a new file inside "New Folder".

fs.writeFileSync("New Folder/delete.txt", "This will be deleted");

//fs.unlinkSync("New Folder/delete.txt"); //This will delete the file "delete.txt".

fs.writeFileSync("New Folder/rename.txt", "This will be renamed");

fs.renameSync("New Folder/rename.txt", "New Folder/renamed.txt"); //This will rename the file to "renamed.txt".

//fs.rmdirSync("New Folder"); //This will remove the Directory "New Folder".
