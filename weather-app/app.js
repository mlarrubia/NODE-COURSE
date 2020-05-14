const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=a03e3470eaa547e651a47fd3880546d6&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.location.name)
})