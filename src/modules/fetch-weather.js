import cloudy from '../assets/cloudy.jpg';
import rainyDay from '../assets/rainy-day.jpg';
import sunny from '../assets/sunny.jpg';
import weatherSpec from './weather-specific';

const gettingWeather = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bde3f0994e6528c00d440747db847b86`,
    {mode: 'cors'}
    ).then(response => response.json())
    .then( response => {
        console.log(response);
        
        if (response.weather[0].main === 'Clouds') {
            document.body.style.backgroundImage = `url(${cloudy})`;
        } else if (response.weather[0].main === 'Clear'){
            document.body.style.backgroundImage = `url(${sunny})`;
        } else if (response.weather[0].main === 'Rain') {
            document.body.style.backgroundImage = `url(${rainyDay})`;
        }

        weatherSpec(response);
    })
    .catch(error => {
        console.log(error);
    })
};

export default gettingWeather;