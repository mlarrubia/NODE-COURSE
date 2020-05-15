const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js')


geocode('boston', (error, data) => {
    if (error) {
        console.log('Error', error);
    } else {
        console.log('Data', data);
    }
})

forecast(25.7617, 80.1918, (error, data) => {

    if (error) {
        console.log('Error', error)
    } else {
        console.log('Data', data)
    }
})