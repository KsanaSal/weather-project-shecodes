const cardDay = document.querySelector('#cards-days');
// const dayTitle = document.querySelector('.card-title');

function listDays(list) {
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
      console.log(day);
      return `<div class="col m-0 text-center">
          <div class="card p-2 h-100 card-weather">
            <h3 class="card-title">${dayTitle}</h3>
            <span class="date">${dataTitle}</span>
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
    })
    .join('');
  cardDay.insertAdjacentHTML('beforeend', days);
}

export default listDays;
