const fs = require('fs');
const chalk = require('chalk')

const getNotes = function () {
    return "Your notes...";
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })


    if (duplicateNotes.length === 0) {
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}