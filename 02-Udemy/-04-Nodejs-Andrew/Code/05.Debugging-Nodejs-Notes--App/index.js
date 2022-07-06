const yargs = require("yargs");
const { addNotes, removeNote, getNotes, readNote } = require("./notes");

const argv = yargs.argv;

yargs.command({
  command: "add",
  describe: "Adding new note",
  builder: {
    title: { describe: "Note title", demandOption: true, type: "string" },
    body: {
      describe: "The main note content",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("We need to add new note");
    // console.log("title: " + argv.title);
    // console.log("body: " + argv.body);
    addNotes({ title: argv.title, body: argv.body });
  },
});

yargs.command({
  command: "remove",
  describe: "Removing Existing note",
  builder: {
    title: { describe: "Note title", demandOption: true, type: "string" },
  },
  handler: function (argv) {
    // console.log("We need to  remove note");
    removeNote(argv.title);
  },
});
yargs.command({
  command: "read",
  describe: "Reading Current Notes",
  builder: {
    title: { describe: "Note title", demandOption: true, type: "string" },
  },
  handler: function (argv) {
    // console.log("Reading Current Notes");
    readNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Listing all notes",
  handler: function (argv) {
    // console.log("Listing all notes");

    getNotes();
  },
});

// ! without this line the commands will not work will, it used to parsing the yargs.argv so the package can access it
yargs.parse();
