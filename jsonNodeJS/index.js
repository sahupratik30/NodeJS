//This is an example of JSON in NodeJS.

const fs = require("fs");

const bioData = {
  name: "Pratik Sahu",
  age: 20,
  gender: "Male",
};

//Tasks to do :-
// 1.Convert the object "bioData" to JSON format.
// 2.Save the JSON data into another JSON file.
// 3.Read data from the JSON file and convert it into JS object.
// 4.Print the read data in the console.

//Step 1:-
const jsonData = JSON.stringify(bioData); //Converted the object "bioData" to JSON format.

//Step 2:-
fs.writeFile("bioData.json", jsonData, (err) => {
  //Saved the JSON data into another JSON file.
  console.log("File saved as json successfully.");
});

//Step 3:-
fs.readFile("bioData.json", "utf-8", (err, data) => {
  const objData = JSON.parse(data); //Read data from the JSON file and converted it into JS object.
  //console.log(data); This will print the JSON data i.e, {"name":"Pratik Sahu","age":20,"gender":"Male"}
  //Step 4:-
  console.log(objData); //Printed the read data in the console. i.e, { name: 'Pratik Sahu', age: 20, gender: 'Male' }
});
