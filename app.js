const notes = require("./notes.js");
const yargs = require("yargs");
const chalk = require("chalk");
const { string, argv } = require("yargs");
const { readNotes } = require("./notes.js");
// fs.writeFileSync("notes.txt", "This is my new file");
// fs.appendFileSync("notes.txt", ", and i am vidhi sharma");
// const msg = getNotes();
// console.log(chalk.red("success"));
// console.log(msg);
// console.log(process.argv);
yargs.command({
  command: "Add",
  describe: "adds a new note",
  builder: {
    title: {
      describe: "this is title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "main content of body",
      demandOption: true,
      type: string,
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});
yargs.command({
  command: "Remove",
  describe: "Remove the note",
  builder: {
    title: {
      describe: "this is title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "List",
  describe: "List the notes",
  handler(argv) {
    notes.listNotes(argv.title);
  },
});
yargs.command({
  command: "Read",
  describe: "reads the note",
  builder: {
    title: {
      describe: "reads the title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    readNotes(argv.title);
  },
});
yargs.parse();
