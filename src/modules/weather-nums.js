import sun from '../assets/sun.svg';
import cloud from '../assets/cloud.svg';
import rain from '../assets/drop.svg';

const weatherNums = (response) => {
    const container = document.createElement('div');
    container.classList.add('w-50', 'nums-container', 'text-center', 'py-5', 'font-weight-bold');
    
    const tempContainer = document.createElement('div');
    tempContainer.classList.add('black-backg', 'mb-5');

    const temperature = document.createElement('p');
    temperature.textContent += `${response.main.temp}°`;

    const tempIcon = document.createElement('img');
    tempIcon.classList.add('icon');
    switch (response.weather[0].main) {
        case 'Clear':
            tempIcon.src = sun;
            break;
        case 'Clouds':
            tempIcon.src = cloud;
            break;
        case 'Rain':
            tempIcon.src = rain;
            break;
    }
    tempContainer.append(tempIcon, temperature);

    const specificContainer = document.createElement('div');
    specificContainer.classList.add('black-backg')

    const minTemperature = document.createElement('p');
    minTemperature.textContent += `Min: ${response.main.temp_min}`;

    const maxTemperature = document.createElement('p');
    maxTemperature.textContent += `Max: ${response.main.temp_max}`;

    const humidity = document.createElement('p');
    humidity.textContent += `Humidity: ${response.main.humidity}%`;

    const visibility = document.createElement('p');
    visibility.textContent += `Visibility: ${response.visibility} meters`;

    const wind = document.createElement('p');
    wind.textContent += `Wind: ${response.wind.speed}mph`;

    const clouds = document.createElement('p');
    clouds.textContent += `Clouds: ${response.weather[0].description} ${response.clouds.all}%`;


    specificContainer.append(minTemperature, maxTemperature, visibility, clouds, humidity, wind);
    container.append(tempContainer, specificContainer);
    return container;
}

export default weatherNums;