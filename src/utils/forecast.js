const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2472b5fb1f1390da04f69bc03d9bee51&query=${latitude},${longitude}`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to the weather service!.', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      const data = body.current
      callback(
        undefined,
        `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`
      )
    }
  })
}

module.exports = forecast
