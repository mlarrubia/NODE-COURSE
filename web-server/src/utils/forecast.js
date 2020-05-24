const request = require('request');



const forecast = (long, lat, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=a03e3470eaa547e651a47fd3880546d6&query=${long},${lat}&units=f`

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather services')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            const actualTemp = body.current.temperature;
            const feelsLikeTemp = body.current.feelslike;
            const humidity = body.current.humidity
            const localTime = body.location.localtime.split(' ')[1];
            callback(undefined, `It is currently ${localTime}. The weather today will be ${body.current.weather_descriptions[0]} It is currently ${actualTemp} degrees out. It feels like ${feelsLikeTemp} degrees out with a humidity of ${humidity}%`)
        }
    })
}

module.exports = forecast;