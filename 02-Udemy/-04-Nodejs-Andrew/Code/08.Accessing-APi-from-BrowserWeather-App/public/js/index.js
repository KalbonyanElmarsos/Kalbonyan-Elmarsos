// fetch("http://puzzle.mead.io/puzzle")
//   .then((res) => res.json())
//   .then((resJSON) => {
//     console.log(resJSON);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const locationForm = document.querySelector("form");
const searchValue = document.querySelector(".input_search");
const observation_timeEl = document.querySelector(".observation_time");
const temperatureEl = document.querySelector(".temperature");
const weather_descriptionsEl = document.querySelector(".weather_descriptions");
const wind_speedEl = document.querySelector(".wind_speed");
const pressureEl = document.querySelector(".pressure");

const loadingEl = document.querySelector(".loading");

locationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const address = searchValue.value;

  loadingEl.textContent = "Loading...";

  fetch(`/weather?address=${address}`)
    .then(async (res) => {
      return res.json();
    })
    .then((data) => {
      loadingEl.textContent = "";
      const {
        observation_time,
        temperature,
        weather_descriptions,
        wind_speed,
        pressure,
      } = data.current;

      observation_timeEl.textContent = observation_time;
      temperatureEl.textContent = temperature;
      weather_descriptionsEl.textContent = weather_descriptions;
      wind_speedEl.textContent = wind_speed;
      pressureEl.textContent = pressure;
    })

    .catch((err) => {
      console.log(err);
      loadingEl.classList.add("error");
      loadingEl.textContent = "Error happened, check your inputs and try again";
    });
});
