const request = require('request')


const url = 'http://api.weatherstack.com/current?access_key=6793779d8129c3035c99634b0bdec018&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})

//http://api.weatherstack.com/current?access_key=6793779d8129c3035c99634b0bdec018&query=37.8267,-122.4233