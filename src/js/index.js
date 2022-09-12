const axios = require("axios").default;

const apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
let url = `https://api.openweathermap.org/data/2.5/weather`;

async function getWeatherByCity(city) {
  try {
    const response = await axios.get(
      `${url}?q=${city}&appid=${apiKey}&units=metric`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getWeatherByLocacion(latitude, longitude) {
  try {
    const response = await axios.get(
      `${url}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const input = document.querySelector("input");
const city = document.querySelector("h1");
const form = document.querySelector("#search-form");
const temp = document.querySelector("#temperature");
const precip = document.querySelector("#precipitation");
const speed = document.querySelector("#speed");
const weather = document.querySelector("#weather");
const btnLocation = document.querySelector("#location");

function setData(data) {
  temp.innerHTML = Math.round(data.main.temp);
  precip.innerHTML = Math.round(data.main.humidity);
  speed.innerHTML = Math.round(data.wind.speed);
  weather.innerHTML = data.weather[0].main;
  city.innerHTML = data.name;
}
form.addEventListener("submit", (el) => {
  el.preventDefault();
  getWeatherByCity(input.value).then((data) => {
    setData(data);
  });
});

function showPosition(pos) {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;
  getWeatherByLocacion(latitude, longitude).then((data) => {
    setData(data);
  });
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
btnLocation.addEventListener("click", (evt) => {
  navigator.geolocation.getCurrentPosition(getCurrentPosition);
});
navigator.geolocation.getCurrentPosition(getCurrentPosition);
