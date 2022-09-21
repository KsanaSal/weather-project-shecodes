import axios from 'axios';

const apiKey = 'c95d60a1e3adbeb286133f1ebebc2579';
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

const input = document.querySelector('input');
const city = document.querySelector('h1');
const form = document.querySelector('#search-form');
const temp = document.querySelector('#temperature');
const precip = document.querySelector('#precipitation');
const speed = document.querySelector('#speed');
const weather = document.querySelector('#weather');
const btnLocation = document.querySelector('#location');
const backCardWeather = document.querySelectorAll('.card-weather');
const weatherNow = document.querySelector('.weather-now');
const day = document.querySelector('.day');
const date = document.querySelector('.date');
const time = document.querySelector('.time');

backCardWeather.forEach(cardItem => {
  cardItem.style.backgroundColor = 'rgba(212, 5, 186, 0.5)';
});

function setData(data) {
  temp.innerHTML = Math.round(data.main.temp);
  precip.innerHTML = Math.round(data.main.humidity);
  speed.innerHTML = Math.round(data.wind.speed);
  weather.innerHTML = data.weather[0].main;
  city.innerHTML = data.name;
  weatherNow.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  day.innerHTML = new Date(data.dt * 1000).toLocaleDateString('en-us', {
    weekday: 'long',
  });
  date.innerHTML = `${new Date(data.dt * 1000).toLocaleDateString('en-us', {
    month: 'long',
  })} ${new Date(data.dt * 1000).toLocaleDateString('en-us', {
    day: '2-digit',
  })}, ${new Date(data.dt * 1000).toLocaleDateString('en-us', {
    year: 'numeric',
  })}`;
  time.innerHTML = `${new Date(data.dt * 1000).toLocaleTimeString('en-us', {
    hour: '2-digit',
    hour12: false,
  })}:${new Date(data.dt * 1000).toLocaleTimeString('en-us', {
    minute: '2-digit',
  })}`;
  console.log(data);
}

form.addEventListener('submit', el => {
  el.preventDefault();
  getWeatherByCity(input.value).then(data => {
    setData(data);
    backCardWeather.forEach(cardItem => {
      cardItem.style.backgroundColor = 'rgba(13, 110, 253, 0.5)';
    });
  });
});

function showPosition(pos) {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;
  getWeatherByLocacion(latitude, longitude).then(data => {
    setData(data);
    backCardWeather.forEach(cardItem => {
      cardItem.style.backgroundColor = 'rgba(13, 202, 240, 0.5)';
    });
  });
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
btnLocation.addEventListener('click', evt => {
  navigator.geolocation.getCurrentPosition(getCurrentPosition);
});
navigator.geolocation.getCurrentPosition(getCurrentPosition);
