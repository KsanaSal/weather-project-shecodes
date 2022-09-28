const cardDay = document.querySelector('#cards-days');

function listDays(list) {
  cardDay.innerHTML = '';
  const days = list.slice(0, 5).map(day => {
    return `<div class="col m-0 text-center">
          <div class="card p-2 h-100 card-weather">
            <h3 class="card-title">Sunday</h3>
            <span class="date">September 3, 2022</span>
            <img
              src="./image/icon/weather_sun_sunny_temperature_icon.png"
              class="card-img-top w-75 m-auto"
              alt="Weather sunny"
            />
            <div class="card-body p-1">
              <h3 class="card-title">Sunny day</h3>
              <p class="card-text">XX℃</p>
            </div>
          </div>
        </div>`;
  }).join('');
  cardDay.insertAdjacentHTML('beforeend', days);
  console.log(list);
}

export default listDays;
