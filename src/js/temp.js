const currentTemp = document.querySelector("#temperature");
const celsiusLink = document.querySelector("#celsius-link");
const fahrenheitLink = document.querySelector("#fahrenheit-link");


// change temperature in ℃ on ℉
function celsiusToFahrenheit(cel) {
  return Math.round(cel * 1.8 + 32);
}
function fahrenheitToCelsius(far) {
  return Math.round((far - 32) / 1.8);
}
let isCelsius = true;

celsiusLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isCelsius) {
    currentTemp.innerHTML = fahrenheitToCelsius(+currentTemp.innerHTML);
    isCelsius = true;
    isCelsiusColor();
  }
});

fahrenheitLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (isCelsius) {
    currentTemp.innerHTML = celsiusToFahrenheit(+currentTemp.innerHTML);
    isCelsius = false;
    isCelsiusColor();
  }
});

function isCelsiusColor() {
  if (isCelsius) {
    celsiusLink.style.color = "#d405ba";
    fahrenheitLink.style.color = "#706e70";
  } else {
    celsiusLink.style.color = "#706e70";
    fahrenheitLink.style.color = "#d405ba";
  }
}
isCelsiusColor();
