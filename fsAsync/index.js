//This is asynchronous "file system programming".

const fs = require("fs");

fs.writeFile(
  "read.txt",
  "Hi! This is file system program in NodeJs.",
  (err) => {
    console.log("File created...");
    console.log(err);
  }
);

fs.appendFile("read.txt", "This is appended.", (err) => {
  console.log("Appended...");
  console.log(err);
}); //Appends data at the end of the file.

const data = fs.readFile("read.txt", (err) => {}); //Returns Buffer data.

{
  /* <Buffer 48 69 21 20 54 68 69 73 20 69 73 20 66 69 6c 65 20 73 79 73 74 65 6d 20 70 72 6f 67 72 61 6d 20 69 6e 20 4e 6f 64 65 4a 73 2e 54 68 69 73 20 69 73 20 ... 9 more bytes> */
}

const originalData = fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data); //Returns data in String or Original form.
  console.log(err);
});

// Hi! This is file system program in NodeJs.This is appended.

fs.mkdir("New Folder", (err) => {}); //Creates a new Directory.

fs.writeFile("New Folder/new.txt", "This is a new file", (err) => {}); //Creates a new file inside "New Folder".

fs.writeFile("New Folder/delete.txt", "This will be deleted", (err) => {});

//fs.unlink("New Folder/delete.txt", (err) => {}); //This will delete the file "delete.txt".

fs.writeFile("New Folder/rename.txt", "This will be renamed", (err) => {});

fs.rename("New Folder/rename.txt", "New Folder/renamed.txt", (err) => {
  console.log("File renamed successfully...");
  console.log(err);
}); //This will rename the file to "renamed.txt".

//fs.rmdir("New Folder", (err) => {}); //This will remove the Directory "New Folder".
