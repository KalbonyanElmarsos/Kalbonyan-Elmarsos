const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=3a65bdba11513a69643fb3801d3df77e&query=${longitude},${latitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const temperature = body.current.temperature;
      const feelLike = body.current.feelslike;
      const descriptionWeather = body.current.weather_descriptions[0];
      callback(
        undefined,
        `${descriptionWeather}. It's is currently ${temperature} degrees out. It feels like ${feelLike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
