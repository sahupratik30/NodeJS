//This is an exapmle of creating own server in NodeJS.

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-type": "text/html" }); //Defines the "Header" i.e, STATUS and CONTENT-TYPE.
    res.end("<h1>This is HOME page</h1>");
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-type": "text/html" }); //Defines the "Header" i.e, STATUS and CONTENT-TYPE.
    res.end("<h1>This is ABOUT US page</h1>");
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-type": "text/html" }); //Defines the "Header" i.e, STATUS and CONTENT-TYPE.
    res.end("<h1>This is CONTACT US page</h1>");
  } else {
    res.writeHead(404, { "Content-type": "text/html" }); //Defines the "Header" i.e, STATUS and CONTENT-TYPE.
    res.end("<h1>Error - 404! Page not found.</h1>");
  }
});

//Below are the status codes for various cases.

// Informational responses (100–199)
// Successful responses (200–299)
// Redirects (300–399)
// Client errors (400–499)
// Server errors (500–599)

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port number 8000");
});
