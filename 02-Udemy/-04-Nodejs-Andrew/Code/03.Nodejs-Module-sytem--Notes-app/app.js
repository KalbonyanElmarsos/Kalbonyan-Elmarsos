const chalk = require("chalk");

const name = "farag";

console.log(chalk.bold.blue(name));
console.log(chalk.inverse.yellow(name));

// _______________WORKING WITH NPM MODULES_____________________________
// const validator = require("validator");

// require("./utils.js");
// const getNotes = require("./notes");

// const name = "farag";
// console.log(name);

// const result = getNotes();
// console.log(result);

// console.log(validator.isEmail("ali@gmail.com"));
// console.log(
//   validator.isURL("https://nodejs.org/docs/latest-v11.x/api/fs.html")
// );

// _______________HOW TO DEALING WITH FILE SYS_____________________________
// const fs = require("fs");

// //fs.writeFileSync('data.text',"hello the first line in file\n")

// fs.appendFileSync("data.text", "hello the first line in file\n", "utf8");
// fs.appendFileSync(
//   "data.text",
//   "how are you now the second line in file",
//   "utf8"
// );
