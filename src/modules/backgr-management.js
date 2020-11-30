import overcastClouds from '../assets/overcast-clouds.jpg';
import rainyDay from '../assets/rainy-day.jpg';
import sunny from '../assets/sunny.jpg';

const backgroundChange = (response) => {
    if (response.weather[0].main === 'Clouds') {
        document.body.style.backgroundImage = `url(${overcastClouds})`;
    } else if (response.weather[0].main === 'Clear'){
        document.body.style.backgroundImage = `url(${sunny})`;
    } else if (response.weather[0].main === 'Rain') {
        document.body.style.backgroundImage = `url(${rainyDay})`;
    }
}

export default backgroundChange;