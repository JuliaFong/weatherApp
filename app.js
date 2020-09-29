const request = require('request')


const url = 'http://api.weatherstack.com/current?access_key=6793779d8129c3035c99634b0bdec018&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelsLike + ' degrees out.')
})

//http://api.weatherstack.com/current?access_key=6793779d8129c3035c99634b0bdec018&query=37.8267,-122.4233