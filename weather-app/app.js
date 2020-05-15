const request = require("request")

// const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=a03e3470eaa547e651a47fd3880546d6&query=25.761681,-80.191788&units=f'
// const errorurl = 'http://api.weatherstack.com/current?access_key=a03e3470eaa547e651a47fd3880546d6&query=&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log("Unable to find location");
//     } else {
//         const actualTemp = response.body.current.temperature;
//         const feelsLikeTemp = response.body.current.feelslike;

//         console.log(`${response.body.current.weather_descriptions[0]} It is currently ${actualTemp} degrees out. It feels like ${feelsLikeTemp} degrees out`)
//     }
// })


// // Geocoding
// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWxhcnJ1YmlhIiwiYSI6ImNrYTc1NmE1ODBnam4yeG5sc2o4OHFzOHYifQ.6-v_rQy6z1izy6rEDUh0gQ&limit=1'
// const errorgeoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoibWxhcnJ1YmlhIiwiYSI6ImNrYTc1NmE1ODBnam4yeG5sc2o4OHFzOHYifQ.6-v_rQy6z1izy6rEDUh0gQ&limit=1'

// request({ url: errorgeoUrl, json: true }, (error, response) => {

//     if (error) {
//         console.log("Could not connect to GeoAPI")
//     } else if (response.body.features.length === 0) {
//         console.log("Could not find what you were looking for.")
//     } else {
//         const latitude = response.body.features[0].center[0];
//         const longitude = response.body.features[0].center[1]

//         console.log("Latitude: ", latitude);
//         console.log("Longitude: ", longitude);
//     }
// })


const geocode = require('./utils/geocode.js');

geocode('boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})