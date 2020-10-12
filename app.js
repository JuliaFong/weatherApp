const request = require('request')


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

// Geocoding
//&limit=1
// Address -> Lat/Long -> Weather

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianVsaWFtZm9uZyIsImEiOiJjazN5dDBhbnMwNWl2M3NuMGM2aDV5cDhtIn0.VslPz2w-qm-yq_u4vyeOrA&limit=1'

// request({ url: geocodeURL, json: true}, (error, response) => {
//     if(error) {
//         console.log("Unable to connect")
//     } else if (response.body.features.length === 0) {
//         console.log("Unable to find location")
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }

// })




geocode('Philadelphia New York', (error, data) => {
    console.log('Error', error)
    console.log("Data", data)
})