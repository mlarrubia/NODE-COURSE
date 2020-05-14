const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=a03e3470eaa547e651a47fd3880546d6&query=25.761681,-80.191788&units=f'

request({ url: url, json: true }, (error, response) => {

    const actualTemp = response.body.current.temperature;
    const feelsLikeTemp = response.body.current.feelslike;

    console.log(`${response.body.current.weather_descriptions[0]} It is currently ${actualTemp} degrees out. It feels like ${feelsLikeTemp} degrees out`)
})

function celciusToFahrenheit(cel) {
    return (cel * 9 / 5) + 32;
}