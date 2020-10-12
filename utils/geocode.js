const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoianVsaWFtZm9uZyIsImEiOiJjazN5dDBhbnMwNWl2M3NuMGM2aDV5cDhtIn0.VslPz2w-qm-yq_u4vyeOrA&limit=1"

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect', undefined)
        } else if(response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
           callback(undefined, {
               latitude: response.body.features[0].center[0],
               longitude: response.body.features[0].center[1],
               location: response.body.features[0].place_name
           }) 
        }
    })
}


module.exports = geocode


// Geocoding

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