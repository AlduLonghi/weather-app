import weatherSpec from './weather-specific';
import backgroundChange from './backgr-management';

const gettingWeather = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bde3f0994e6528c00d440747db847b86`,
    {mode: 'cors'}
    ).then(response => response.json())
    .then( response => {
        console.log(response);
        backgroundChange(response);
        weatherSpec(response);
    })
    .catch(error => {
        console.log(error);
    })
};

export default gettingWeather;