const http = require("http");

const request = http.request(
    "http://api.weatherstack.com/current?access_key=62bf957f37bab8b1735770ffa7a91581&query=30.0444,31.2357",
    (response) => {
      let data;
      response.on("data", (chunk) => {
        data = data + chunk.toString();
      });
      response.on("end", () => {
        const dataObject = JSON.parse(data);
        console.log(dataObject);
      });
 
)
request.on("error", (error) => {
        console.log(error);
    })
    request.end()
