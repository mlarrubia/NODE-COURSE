const fs = require('fs');
const chalk = require('chalk')


const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Note title taken!'))
    }
}



const removeNote = (title) => {

    const notes = loadNotes();

    const filteredNotes = notes.filter(function (note) {
        return note.title !== title;
    })

    saveNotes(filteredNotes);

    if (filteredNotes.length === notes.length) {
        console.log(chalk.bgRed("No note found!"))
    } else {
        console.log(chalk.bgGreen("Note removed!"))
    }


}

const listNotes = () => {
    const noteList = loadNotes();

    console.log(chalk.bgMagenta("Your Notes: "))
    noteList.forEach((note) => {
        console.log(chalk.white.bgRed(note.title))
    })
}

const readNote = (title) => {
    const noteList = loadNotes();

    const note = noteList.find((singleNote) => singleNote.title === title)

    if (note) {
        console.log(chalk.white.bgMagenta(note.title));
        console.log(chalk.white(note.body));

    } else {
        console.log(chalk.bgRed("No note found!"))
    }
}

const saveNotes = (notes) => {
    const userJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', userJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}