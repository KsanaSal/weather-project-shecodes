import iconCatalog from "./iconCatalog";

const cardDay = document.querySelector('#cards-days');
// const dayTitle = document.querySelector('.card-title');

function listDays(list, style) {
  console.log(iconCatalog[200]);
  console.log(style);
  console.log(list);
  cardDay.innerHTML = '';
  const days = list
    .slice(1, 6)
    .map(day => {
      const dayTitle = new Date(day.dt * 1000).toLocaleDateString('en-us', {
        weekday: 'long',
      });
      const dataTitle = `${new Date(day.dt * 1000).toLocaleDateString('en-us', {
        month: 'long',
      })} ${new Date(day.dt * 1000).toLocaleDateString('en-us', {
        day: '2-digit',
      })}, ${new Date(day.dt * 1000).toLocaleDateString('en-us', {
        year: 'numeric',
      })}`;
      // const weatherIcon = require (`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`)
      const cardTitle = day.weather[0].main;
      const tempMax = Math.round(day.temp.max);
      const tempMin = Math.round(day.temp.min);
      console.log(day);
      return `<div class="col m-0 text-center">
          <div class="card p-2 h-100 card-weather ${style}">
            <h3 class="card-title">${dayTitle}</h3>
            <span class="date">${dataTitle}</span>
            <img class="weather-icon"
              src="${iconCatalog[day.weather[0].id]}"
              class="card-img-top w-75 m-auto"
              alt="Weather sunny"
            />
            <div class="card-body p-1">
              <h3 class="card-title">${cardTitle}</h3>
              <div class="card-temp">
              <p class="card-temp-max">${tempMax}°</p>
              <p class="card-temp-min">${tempMin}°</p>
              </div>
            </div>
          </div>
        </div>`;
    })
    .join('');
  cardDay.insertAdjacentHTML('beforeend', days);
}

export default listDays;
