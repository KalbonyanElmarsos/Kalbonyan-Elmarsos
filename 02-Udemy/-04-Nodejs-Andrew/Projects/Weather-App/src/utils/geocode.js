const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?limit=1&access_token=pk.eyJ1IjoiYWJkZWxyYWhtYW4tMTIzIiwiYSI6ImNsNTczYXhsdzA5a3IzaHFscHB1ZHFta3kifQ.LTWxj9dDNMZh75y7y7ncfg";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("No matching results, try with different searching query");
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
