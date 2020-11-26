import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import weatherCont from './modules/weather-container';
import gettingWeather from './modules/fetch-weather';

weatherCont();

const onclickEvent = (() => {
    const btn = document.getElementById('search-btn');

    btn.onclick = () => {
        const city = document.getElementById('city').value;
        console.log(city);

        gettingWeather(city);
    }
})();



