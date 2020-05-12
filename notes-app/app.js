const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Create add command
yargs.command({
    command: 'add',
    description: "add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        },
        body: {
            descripton: "This is the body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// Create remove command 
yargs.command({
    command: 'remove',
    description: "remove a note",
    builder: {
        title: {
            description: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)

    }
})

// Create List command
yargs.command({
    command: 'list',
    description: "List your note",
    handler: function () {
        notes.listNotes();
    }
})

// Create Read command
yargs.command({
    command: 'read',
    description: "Read a note",
    builder: {
        title: {
            description: "Read Note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title);
    }
})

yargs.parse();