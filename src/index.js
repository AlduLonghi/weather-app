import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import weatherCont from './modules/weather-container';
import gettingWeather from './modules/fetch-weather';

weatherCont();
gettingWeather('london');

const onclickEventSearch = () => {
  const btn = document.getElementById('search-btn');

  btn.onclick = () => {
    const divToRemove = document.getElementById('weath-spec');
    if (divToRemove !== null) {
      divToRemove.remove();
    }
    const errorContainer = document.getElementById('error-container');
    if (errorContainer !== null) {
      errorContainer.remove();
    }
    const city = document.getElementById('city').value;

    gettingWeather(city);
  };
};
onclickEventSearch();