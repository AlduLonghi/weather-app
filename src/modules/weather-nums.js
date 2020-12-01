const weatherNums = (response) => {
    const container = document.createElement('div');
    container.classList.add('w-100', 'nums-container', 'text-center', 'mt-5', 'font-weight-bold');
    
    const tempContainer = document.createElement('div');
    tempContainer.classList.add('temp-cont', 'black-backg', 'mb-5', 'd-flex', 'justify-content-around', 'align-items-center', 'mx-auto', 'py-3', 'px-3');
    
    const spanTemp = document.createElement('span');

    const temperature = document.createElement('p');
    temperature.classList.add('mb-0', 'd-block', 'temp');
    temperature.textContent += `${response.main.temp}°`;

    const tempIcon = document.createElement('img');
    tempIcon.classList.add('icon');
    tempIcon.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`

    const feelsLike = document.createElement('p');
    feelsLike.textContent = `Feels like: ${response.main.feels_like}°`;

    spanTemp.append(temperature, feelsLike);
    tempContainer.append(tempIcon, spanTemp);

    const specificContainer = document.createElement('div');
    specificContainer.classList.add('black-backg', 'py-3', 'spec-container')

    const minTemperature = document.createElement('p');
    minTemperature.textContent += `Min: ${response.main.temp_min}`;

    const maxTemperature = document.createElement('p');
    maxTemperature.textContent += `Max: ${response.main.temp_max}`;

    const humidity = document.createElement('p');
    humidity.textContent += `Humidity: ${response.main.humidity}%`;

    const visibility = document.createElement('p');
    visibility.textContent += `Visibility: ${response.visibility} meters`;

    const wind = document.createElement('p');
    wind.textContent += `Wind: ${response.wind.speed}km/h`;

    const sky = document.createElement('p');
    sky.textContent += `Sky: ${response.weather[0].description} ${response.clouds.all}%`;

    const pressure = document.createElement('p');
    pressure.textContent += `Pressure: ${response.main.pressure}.00hPa`;


    specificContainer.append(minTemperature, maxTemperature, visibility, sky, humidity, wind, pressure);
    container.append(tempContainer, specificContainer);
    return container;
}

export default weatherNums;