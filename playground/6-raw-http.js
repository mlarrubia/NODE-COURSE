const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=a03e3470eaa547e651a47fd3880546d6&query=40,-75&units=f`

const request = http.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
})

request.on('error', (error) => {
    console.log('An error', error);
})

request.end();