import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import weatherCont from './modules/weather-container';
import cloudy from './assets/cloudy.jpg';
import rainyDay from './assets/rainy-day.jpg';
import sunny from './assets/sunny.jpg';

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
        } else if (response.weather[0].main === 'Rainy') {
            document.body.style.backgroundImage = `url(${rainyDay})`;
        }
    })
    .catch(error => {
        console.log(error);
    })
};

gettingWeather('london');
weatherCont();

