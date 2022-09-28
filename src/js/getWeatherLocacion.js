import axios from 'axios';

const apiKey = 'bc30c3cfc81935a26e8fa51ad2166ffe';
let url = `https://api.openweathermap.org/data/2.5/weather`;

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
  
export default getWeatherByLocacion;