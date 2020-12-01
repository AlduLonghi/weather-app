import celOrFah from './celsius-fahrenheit';

const weatherNums = ({wind, visibility, main, weather, clouds}) => {
  const container = document.createElement('div');
  container.classList.add('w-100', 'nums-container', 'text-center', 'mt-5', 'font-weight-bold');

  const tempContainer = document.createElement('div');
  tempContainer.classList.add('temp-cont', 'black-backg', 'mb-5', 'd-flex', 'justify-content-around',
    'align-items-center', 'mx-auto', 'py-3', 'px-3');

  const spanTemp = document.createElement('span');

  const spanButtons = document.createElement('span');
  spanButtons.classList.add('d-flex', 'justify-content-around');

  const temperature = document.createElement('p');
  temperature.setAttribute('id', 'main-temp');
  temperature.classList.add('mb-0', 'd-block', 'temp');
  temperature.textContent += `${celOrFah(main.temp, 'celsius')}°`;

  const tempIcon = document.createElement('img');
  tempIcon.classList.add('icon');
  tempIcon.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  const feelsLike = document.createElement('p');
  feelsLike.setAttribute('id', 'feels-like');
  feelsLike.textContent = `Feels like: ${celOrFah(main.feels_like, 'celsius')}°`;

  const btnCelsius = document.createElement('button');
  btnCelsius.setAttribute('id', 'btn-celsius');
  btnCelsius.type = 'button';
  btnCelsius.classList.add('btn', 'btn-sm', 'btn-danger');
  btnCelsius.textContent += 'C°';
  btnCelsius.onclick = () => {
    const mainTemp = document.getElementById('main-temp');
    const minTemp = document.getElementById('min-temp');
    const maxTemp = document.getElementById('max-temp');
    const feelsLike = document.getElementById('feels-like');

    mainTemp.innerHTML = `${celOrFah(main.temp, 'celsius')}°`;
    minTemp.innerHTML = `Min: ${celOrFah(main.temp_min, 'celsius')}°`;
    maxTemp.innerHTML = `Max: ${celOrFah(main.temp_max, 'celsius')}°`;
    feelsLike.innerHTML = `Feels like: ${celOrFah(main.feels_like, 'celsius')}°`;
  };

  const btnFahrenheit = document.createElement('button');
  btnFahrenheit.setAttribute('id', 'btn-fahrenheit');
  btnFahrenheit.type = 'button';
  btnFahrenheit.classList.add('btn', 'btn-sm', 'btn-success');
  btnFahrenheit.textContent += 'F°';
  btnFahrenheit.onclick = () => {
    const mainTemp = document.getElementById('main-temp');
    const minTemp = document.getElementById('min-temp');
    const maxTemp = document.getElementById('max-temp');
    const feelsLike = document.getElementById('feels-like');

    mainTemp.innerHTML = `${celOrFah(main.temp, 'fahrenhait')}°`;
    minTemp.innerHTML = `Min: ${celOrFah(main.temp_min, 'fahrenhait')}°`;
    maxTemp.innerHTML = `Max: ${celOrFah(main.temp_max, 'fahrenhait')}°`;
    feelsLike.innerHTML = `Feels like: ${celOrFah(main.feels_like, 'fahrenhait')}°`;
  };

  spanButtons.append(btnCelsius, btnFahrenheit);
  spanTemp.append(temperature, feelsLike, spanButtons);
  tempContainer.append(tempIcon, spanTemp);

  const specificContainer = document.createElement('div');
  specificContainer.classList.add('black-backg', 'py-3', 'spec-container');

  const minTemperature = document.createElement('p');
  minTemperature.setAttribute('id', 'min-temp');
  minTemperature.textContent += `Min: ${celOrFah(main.temp_min, 'celsius')}°`;

  const maxTemperature = document.createElement('p');
  maxTemperature.setAttribute('id', 'max-temp');
  maxTemperature.textContent += `Max: ${celOrFah(main.temp_max, 'celsius')}°`;

  const humidity = document.createElement('p');
  humidity.textContent += `Humidity: ${main.humidity}%`;

  const visibilityText = document.createElement('p');
  visibilityText.textContent += `Visibility: ${visibility} meters`;

  const windText = document.createElement('p');
  windText.textContent += `Wind: ${wind.speed}m/s`;

  const sky = document.createElement('p');
  sky.textContent += `Sky: ${weather[0].description} ${clouds.all}%`;

  const pressure = document.createElement('p');
  pressure.textContent += `Pressure: ${main.pressure}.00hPa`;


  specificContainer.append(minTemperature, maxTemperature,
    visibilityText, sky, humidity, windText, pressure);
  container.append(tempContainer, specificContainer);
  return container;
};

export default weatherNums;