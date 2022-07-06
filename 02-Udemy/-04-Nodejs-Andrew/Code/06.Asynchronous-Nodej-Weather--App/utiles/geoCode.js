const request = require("request");

exports.getLatLong = (address, func) => {
  const url = `http://api.weatherstack.com/current?access_key=62bf957f37bab8b1735770ffa7a91581&query=${address}`;
  request({ url: url, json: true }, (err, response, body) => {
    if (err) {
      func(err, undefined);
    }
    if (response.error) {
      func(response.error, undefined);
    }
    func(undefined, body.location);
  });
};
