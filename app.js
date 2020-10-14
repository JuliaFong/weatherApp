const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if (!address) {
    console.log('Please provide a valid address')
} else {
    geocode('address', (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log(error)
        }
       
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
    
           console.log(location)
           console.log(forecastData)
        })
    })
    
}
console.log(process.argv)




// const url = 'http://api.weatherstack.com/current?access_key=6793779d8129c3035c99634b0bdec018&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     // console.log(response.body.current)
//   if(error) {
//       console.log('Unable to connect to weather app')
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   } else {
//     console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelsLike + ' degrees out.')
    
//   }
// })

//http://api.weatherstack.com/current?access_key=6793779d8129c3035c99634b0bdec018&query=37.8267,-122.4233





