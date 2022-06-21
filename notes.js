const fs = require("fs");
const chalk = require("chalk");
const getNotes = function () {
  return "your notes is...";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("new note added");
  } else {
    console.log("note title already taken!!");
  }
};
const removeNote = (title) => {
  const notes = loadNotes();
  const indetifiedNote = notes.filter((note) => note.title !== title);
  if (indetifiedNote.length === notes.length) {
    console.log(chalk.green.inverse("no item removed"));
  } else {
    saveNotes(indetifiedNote);
    console.log(chalk.red.inverse("item removed"));
    // console.log(title);
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const notesData = notesBuffer.toString();
    return JSON.parse(notesData);
  } catch (e) {
    return [];
  }
};
const listNotes = (title) => {
  console.log(chalk.blue("your notes!!"));
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title);
  });
};
const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red("mo note found"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
