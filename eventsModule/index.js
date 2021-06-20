//This is an example of "events" module in NodeJS.

const EventEmitter = require("events"); //Creating a class for events module.

const event = new EventEmitter(); //Creating object of class "EventEmitter".

//Defining the event.
event.on("printName", () => {
  console.log("Your name is Pratik Sahu");
});

event.emit("printName"); //Emitting the event for printing name.

event.on("pageData", (status, msg) => {
  console.log(
    `The status code of your page is ${status} and your page is ${msg}`
  );
});

event.emit("pageData", 200, "working fine👍"); //Emitting the event for showing page detils along with multiple parameters.
