const request = require("request");
const { describe } = require("yargs");
const yargs = require("yargs");
const { forecast } = require("./utiles/forecast");
const { getLatLong } = require("./utiles/geoCode");

const url =
  // "http://api.weatherstack.com/current?access_key=62bf957f37bab8b1735770ffa7a91581&query=30.0444,31.2357";
  // "http://api.weatherstack.com/current?access_key=62bf957f37bab8b1735770ffa7a91581&query=30.0444,31.2357"
  //http://api.weatherstack.com/current?access_key=62bf957f37bab8b1735770ffa7a91581&query=30.0444,31.2357&units=f";

  // request({ url, json: true }, (err, response, body) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   if (response.error) {
  //     console.log(response.error.info);
  //     return;
  //   }
  //   // console.log(body);
  //   if (body) {
  //     console.log(
  //       `It's now ${body.current.temperature} Degrees, and the wind speed now also equal= ${body.current.wind_speed}`
  //     );
  //   }
  // });

  // ! ______________________CHALLANGE________________________
  // const losAnglesURL =
  //   "http://api.weatherstack.com/current?access_key=62bf957f37bab8b1735770ffa7a91581&query=los%20angles";

  // request({ url: losAnglesURL, json: true }, (err, response, body) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   if (response.error) {
  //     console.log(response.error.info);
  //     return;
  //   }
  //   // // console.log(body);
  //   // console.log(body.location.lat);
  //   // console.log(body.location.lon);
  // });

  // getLatLong(
  //   `http://api.weatherstack.com/current?access_key=62bf957f37bab8b1735770ffa7a91581&query=los%20angles`,
  //   (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     // console.log(data);
  //     console.log(data.lat);
  //     console.log(data.lon);
  //   }
  // );

  // forecast(30.0444, 31.2357, (error, data) => {
  //   if (error) {
  //     console.log(error);
  //     return;
  //   }
  //   console.log("Data", data);
  // });

  // ? Callback chaining

  yargs.command({
    command: "address",
    describe: "you have to provide us with the location address",
    builder: {
      address_value: {
        describe: " Address value",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      if (!argv.address_value)
        return console.log("you have to provide us with an Address");
      getLatLong(argv.address_value, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        // const lat = data.lat;
        // const lon = data.lon;

        const { lat, lon } = data;
        forecast(lat, lon, (error, body) => {
          if (error) {
            console.log(error);
            return;
          }
          const { location } = body;
          // console.log(body.location);
          console.log(location);
        });
      });
    },
  });
// ! without this line the commands will not work will, it used to parsing the yargs.argv so the package can access it
yargs.parse();
