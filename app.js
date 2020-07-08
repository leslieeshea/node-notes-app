const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function() {
    console.log('Adding a new note');
  }
});

//create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing the note');
  }
});

console.log(yargs.argv);
