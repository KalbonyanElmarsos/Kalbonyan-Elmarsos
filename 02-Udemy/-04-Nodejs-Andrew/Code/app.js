const chalk = require("chalk");
const { argv } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes");

/*
const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is Menna,");

fs.appendFileSync("notes.txt", " I'm 16 years old ❤");
*/

/*********************************************/

/*
const addF = require("./utils");

const sum = addF(4, -2);
console.log(sum);

// Challenge

const getNotes = require("./notes");

const notes = getNotes("Your notes....");
console.log(notes);
*/

/*********************************************/

/*
const validator = require("validator");
console.log(
  validator.isURL(
    "https://flexiple.com/javascript/javascript-require-vs-import/"
  )
);
*/

/*********************************************/

/*
const chalk = require("chalk");

const greenMsg = chalk.red.bold("Success!");
console.log(greenMsg);
*/

/*********************************************/
/* section 4 */
/*********************************************/

/*
// console.log(process.argv[2]);

const command = process.argv[2];

console.log(process.argv);

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}
*/

/*********************************************/

// const yargs = require("yargs");

// Customize your version.
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title Perfect",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "This body's books ",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

// Create List command
yargs.command({
  command: "list",
  describe: "List a new note",
  handler(argv) {
    notes.listNotes(argv.title);
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

yargs.parse();
