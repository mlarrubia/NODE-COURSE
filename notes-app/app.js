const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(chalk.bold.bgBlue(msg));
console.log(chalk.dim.red.bgBlue.bold.underline(msg));
console.log(chalk.bgMagenta(msg));


