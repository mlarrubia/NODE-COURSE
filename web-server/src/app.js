// Core modules
const path = require('path');
// NPM Modules
const express = require('express');

const publicDirectoryPath = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicDirectoryPath))


app.get('/weather', (req, res) => {
    res.send({
        forecast: "Raining",
        location: "Miami"
    });
})
// app.com

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})