import axios from 'axios';

const apiKey = 'c95d60a1e3adbeb286133f1ebebc2579';
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