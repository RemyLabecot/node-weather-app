const request = require('postman-request')
const urlMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHN5c2thIiwiYSI6ImNrZHl5dHY5MzMweWkydG9kN253ZDRhb24ifQ.sqzwGnYj52YLWAOL5rC_8A'

request({ url: urlMapBox, json: true }, (error, response) => {
    const dataArray = response.body.features.find(city => city.place_name.includes('Los Angeles, California, United States')).center

    const latitude = dataArray[1]
    const longitude = dataArray[0]
    const coordinates = latitude + ',' + longitude

    const urlWeather = 'http://api.weatherstack.com/current?access_key=80df39a83522c24f65a2ee45d96f3022&query=' + coordinates + '&units=m'

    console.log(urlWeather)

    request({ url: urlWeather, json: true }, (error, response) => {

        const currentData = response.body.current

        console.log('Is is currently ' + currentData.temperature + ' degress out. It feels like ' + currentData.feelslike + ' degress out.')
    })
})
