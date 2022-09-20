// const day = document.querySelector(".day");
// const date = document.querySelector(".date");
// const time = document.querySelector(".time");
// const form = document.querySelector("#search-form");
// const input = document.querySelector("input");
// const citys = document.querySelector("h1");
const currentTemp = document.querySelector("#temperature");
const celsiusLink = document.querySelector("#celsius-link");
const fahrenheitLink = document.querySelector("#fahrenheit-link");


// const now = new Date();
// //  change day
// function formatDay() {
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
//   ];

//   let currentDay = days[now.getDay()];

//   return `${currentDay}, `;
// }

// change date
// function formatDate() {
//   let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "Oktober",
//     "November",
//     "Desember"
//   ];

//   let currentMonth = months[now.getMonth()];
//   let currentDate = now.getDate();
//   let currentYear = now.getFullYear();

//   return `${currentMonth} ${currentDate}, ${currentYear}`;
// }

// change time
// function currentTime() {
//   let currentHour = now.getHours().toString().padStart(2, "0");
//   let currentMinute = now.getMinutes().toString().padStart(2, "0");
//   return `${currentHour}:${currentMinute}`;
// }

// day.innerHTML = formatDay();
// date.innerHTML = formatDate();
// time.innerHTML = currentTime();

// search city
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (input.value.length > 0) {
//     citys.innerHTML = input.value;
//   } else {
//     alert("Please search city");
//   }
// });

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
  // console.log("cel");
});

fahrenheitLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (isCelsius) {
    // console.dir(currentTemp);
    currentTemp.innerHTML = celsiusToFahrenheit(+currentTemp.innerHTML);
    isCelsius = false;
    isCelsiusColor();
  }
  // console.log("far");
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
