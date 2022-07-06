const request = require("request");

// ! __________CHALLANGE__________________________
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

exports.forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=62bf957f37bab8b1735770ffa7a91581&query=${lat},${long}`;

  request({ url, json: true }, (err, response, body) => {
    if (err) {
      callback(err, undefined);
    }
    if (response.error) callback(response.error, undefined);
    console.log(body);
    callback(undefined, body);
  });
};
