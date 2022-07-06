const fs = require("fs");

const person = { name: "ali", age: 22 };

/*
console.log(person);
// ? converting object to JSON
const personJSON = JSON.stringify(person);
console.log(personJSON);

//?  return back Object from JSON
const personObj = JSON.parse(personJSON);
console.log(personObj);
*/

// * write json-data into json file
// fs.writeFileSync("1-json.json", JSON.stringify(person));

// const jsonData = fs.readFileSync("1-json.json", "utf8");
// console.log(jsonData);
// const dataObj = JSON.parse(jsonData);

// console.log(dataObj.name);

// _______Challange________________

//  data -->{ name: 'Andrew', planet: 'Earth', age: 27 }
const dataJSON = fs.readFileSync("1-json2.json", "utf8");
const dataObj = JSON.parse(dataJSON);
console.log(dataObj);
const updatedObj = { name: "ali", planet: dataObj.planet, age: 22 };
fs.writeFileSync("1-json2.json", JSON.stringify(updatedObj));
