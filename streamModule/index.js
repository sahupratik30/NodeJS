//This is an example of "stream" module in NodeJS.

const fs = require("fs");
const http = require("http");

const server = http.createServer();

//1st Way (without stream):-
// server.on("request", (req, res) => {
//   fs.readFile("input.txt", "utf-8", (err, data) => {
//     if (err) return console.error(err);
//     res.end(data);
//   });
// });

//2nd Way (with stream):-
// server.on("request", (req, res) => {
//   const rstream = fs.createReadStream("input.txt"); //Creating readable stream for "input.txt".
//   rstream.on("data", (chunkdata) => {
//     res.write(chunkdata);
//   });
//   rstream.on("end", () => {
//     res.end();
//   });
//   rstream.on("error", (err) => {
//     console.log(err);
//     res.end("File not found!");
//   });
// });

//3rd Way(most efficient & easy) :-
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("input.txt"); //Creating readable stream for "input.txt".
  rstream.pipe(res); //Using pipe() method to write the data on the page (in this case "res").
});

server.listen(8000, "127.0.0.1");
