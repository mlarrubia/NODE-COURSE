const fs = require('fs')


// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan holiday"
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);


// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)
// console.log(data.title);

const stream = fs.readFileSync('1-json.json');
console.log(stream)
const dataJSON = stream.toString();
console.log(dataJSON)
const data = JSON.parse(dataJSON);
data.name = "Matthew";
data.age = 26;
console.log(data);

const userJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', userJSON);
