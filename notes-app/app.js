const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    description: "add a new note",
    handler: function () {
        console.log("Adding a new note!")
    }
})

// Create remove command 
yargs.command({
    command: 'remove',
    description: "remove a note",
    handler: function () {
        console.log("Removing the note")
    }
})

// Create List command
yargs.command({
    command: 'list',
    description: "List your note",
    handler: function () {
        console.log("Listing out all the note")
    }
})

// Create Read command
yargs.command({
    command: 'read',
    description: "Read a note",
    handler: function () {
        console.log("Reading the note")
    }
})
// add, remove, read, list
console.log(yargs.argv);