const fs = require("fs");
const chalk = require("chalk");

const addNotes = (newNote) => {
  const notes = loadCurrentNotes();
  // console.log(notes);
  // console.log(newNote);

  //! check first if note exist  or not
  const noteExist = notes.filter((note) => note.title === newNote.title);

  if (noteExist.length === 0) {
    notes.push(newNote);
    // fs.writeFileSync("notes.json", JSON.stringify(notes));
    saveNotes(notes);

    console.log(chalk.bold.inverse.green("Congrats new one added"));
  } else {
    console.log(chalk.bold.inverse.yellow("This note already exist"));
  }
};

const removeNote = (title) => {
  const notes = loadCurrentNotes();

  const isNoteExist = notes.some((note) => note.title === title);

  if (!isNoteExist) {
    console.log(chalk.bold.inverse.red("note not exist"));
    return;
  }
  const updatedNotes = notes.filter((note) => note.title !== title);

  saveNotes(updatedNotes);
  console.log(chalk.bold.inverse.green(`note with title:${title} had removed`));
};
const getNotes = () => {
  const notes = loadCurrentNotes();
  if (notes.length === 0) {
    console.log(chalk.bold.inverse.red("Your Notes are empty"));
  }
  console.log(chalk.bold.inverse.green("Your Notes: "));

  console.log(notes);
};

const readNote = (title) => {
  const notes = loadCurrentNotes();

  const isNoteExist = notes.some((note) => note.title === title);
  if (!isNoteExist) {
    console.log(chalk.bold.inverse.red("Sorry no note with this title"));
    return;
  }

  const note = notes.filter((note) => note.title === title);
  const noteString = JSON.stringify(note[0]);
  console.log(chalk.bold.inverse.green("Her is your note:"));
  console.log(chalk.bold.inverse.magenta(noteString));
};

//  _________________Private helper Functions__________________
const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};
const loadCurrentNotes = () => {
  try {
    // * read existing data if exist
    const data = fs.readFileSync("notes.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    // * if file not exist then return empty array
    return [];
  }
};

module.exports = { addNotes, getNotes, removeNote, getNotes, readNote };
