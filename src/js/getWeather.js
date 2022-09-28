import axios from 'axios';

const apiKey = 'bc30c3cfc81935a26e8fa51ad2166ffe';
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

export default getWeatherByCity;

