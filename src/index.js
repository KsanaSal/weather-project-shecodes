import getWeatherByCity from './js/getWeather';
import getWeatherByLocacion from './js/getWeatherLocacion';

const refs = {
  input: document.querySelector('input'),
  city: document.querySelector('h1'),
  form: document.querySelector('#search-form'),
  temp: document.querySelector('#temperature'),
  precip: document.querySelector('#precipitation'),
  speed: document.querySelector('#speed'),
  weather: document.querySelector('#weather'),
  btnLocation: document.querySelector('#location'),
  backCardWeather: document.querySelectorAll('.card-weather'),
  weatherNow: document.querySelector('.weather-now'),
  day: document.querySelector('.day'),
  date: document.querySelector('.date'),
  time: document.querySelector('.time'),
};

// Defining the style of the card
refs.backCardWeather.forEach(cardItem => {
  cardItem.style.backgroundColor = 'rgba(212, 5, 186, 0.5)';
});

// Change currently weather
function setData(data) {
  refs.temp.innerHTML = Math.round(data.main.temp);
  refs.precip.innerHTML = Math.round(data.main.humidity);
  refs.speed.innerHTML = Math.round(data.wind.speed);
  refs.weather.innerHTML = data.weather[0].main;
  refs.city.innerHTML = data.name;
  refs.weatherNow.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  refs.day.innerHTML = new Date(data.dt * 1000).toLocaleDateString('en-us', {
    weekday: 'long',
  });
  refs.date.innerHTML = `${new Date(data.dt * 1000).toLocaleDateString(
    'en-us',
    {
      month: 'long',
    }
  )} ${new Date(data.dt * 1000).toLocaleDateString('en-us', {
    day: '2-digit',
  })}, ${new Date(data.dt * 1000).toLocaleDateString('en-us', {
    year: 'numeric',
  })}`;
  refs.time.innerHTML = `${new Date(data.dt * 1000).toLocaleTimeString(
    'en-us',
    {
      hour: '2-digit',
      hour12: false,
    }
  )}:${new Date(data.dt * 1000).toLocaleTimeString('en-us', {
    minute: '2-digit',
  })}`;
  console.log(data);
}

// Search city
refs.form.addEventListener('submit', el => {
  el.preventDefault();
  getWeatherByCity(refs.input.value).then(data => {
    setData(data);
    refs.backCardWeather.forEach(cardItem => {
      cardItem.style.backgroundColor = 'rgba(13, 110, 253, 0.5)';
    });
  });
});

// Show position current locacion
function showPosition(pos) {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;
  getWeatherByLocacion(latitude, longitude).then(data => {
    setData(data);
    refs.backCardWeather.forEach(cardItem => {
      cardItem.style.backgroundColor = 'rgba(13, 202, 240, 0.5)';
    });
  });
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

refs.btnLocation.addEventListener('click', evt => {
  navigator.geolocation.getCurrentPosition(getCurrentPosition);
});
navigator.geolocation.getCurrentPosition(getCurrentPosition);
