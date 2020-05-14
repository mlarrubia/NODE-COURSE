const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=a03e3470eaa547e651a47fd3880546d6&query=25.761681,-80.191788&units=f'

request({ url: url, json: true }, (error, response) => {

    const actualTemp = response.body.current.temperature;
    const feelsLikeTemp = response.body.current.feelslike;

    console.log(`${response.body.current.weather_descriptions[0]} It is currently ${actualTemp} degrees out. It feels like ${feelsLikeTemp} degrees out`)
})


// Geocoding


const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWxhcnJ1YmlhIiwiYSI6ImNrYTc1NmE1ODBnam4yeG5sc2o4OHFzOHYifQ.6-v_rQy6z1izy6rEDUh0gQ&limit=1'

request({ url: geoUrl, json: true }, (error, response) => {
    console.log(response.body.features[0].center);
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1]

    console.log("Latitude: ", latitude);
    console.log("Longitude: ", longitude);
})

