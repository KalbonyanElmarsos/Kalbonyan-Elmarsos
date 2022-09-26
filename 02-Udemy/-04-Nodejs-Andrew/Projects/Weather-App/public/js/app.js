const weatherForm = document.querySelector(".index__form");
const searchInput = document.querySelector(".index__form__input");
const fistMessage = document.querySelector(".first-message");
const secondMessage = document.querySelector(".second-message");

const getWeather = async (query) => {
  fistMessage.textContent = "loading...";
  secondMessage.textContent = "";

  const res = await fetch("/weather?address=" + query);
  const data = await res.json();
  if (data.error) {
    fistMessage.textContent = data.error;
  } else {
    fistMessage.textContent = data.location;
    secondMessage.textContent = data.forecast;
  }
};

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = searchInput.value;
  getWeather(location);
});
