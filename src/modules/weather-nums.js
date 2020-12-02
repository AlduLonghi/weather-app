import celOrFah from './celsius-fahrenheit';
import pCreator from './helpers';

const changingUnits = (main, unit) => {
    document.getElementById('main-temp')
    .innerHTML = `${celOrFah(main.temp, unit)}°`;
    document.getElementById('min-temp')
    .innerHTML = `Min: ${celOrFah(main.temp_min, unit)}°`;
    document.getElementById('max-temp')
    .innerHTML = `Max: ${celOrFah(main.temp_max, unit)}°`;
    document.getElementById('feels-like')
    .innerHTML = `Feels like: ${celOrFah(main.feels_like, unit)}°`;
};

const weatherNums = ({
  wind, visibility, main, weather, clouds,
}) => {
  const container = document.createElement('div');
  container.classList.add('w-100', 'nums-container', 'text-center', 'mt-5', 'font-weight-bold');

  const tempContainer = document.createElement('div');
  tempContainer.classList.add('temp-cont', 'black-backg', 'mb-5', 'd-flex', 'justify-content-around',
    'align-items-center', 'mx-auto', 'py-3', 'px-3');

  const spanTemp = document.createElement('span');

  const spanButtons = document.createElement('span');
  spanButtons.classList.add('d-flex', 'justify-content-around');

  const temperature = pCreator(`${celOrFah(main.temp, 'celsius')}°`, 'main-temp');
  temperature.classList.add('mb-0', 'd-block', 'temp');

  const tempIcon = document.createElement('img');
  tempIcon.classList.add('icon');
  tempIcon.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  const feelsLike = pCreator(`Feels like: ${celOrFah(main.feels_like, 'celsius')}°`, 'feels-like');

  const btnUnit = ['celsius', 'fahrenheit'];
  const btnClass = ['btn-danger', 'btn-success'];
  const btnText = ['C°', 'F°'];

  for (let i = 0; i < btnUnit.length; i += 1) {
    const btn = document.createElement('button');
    btn.setAttribute('id', `btn-${btnUnit[i]}`);
    btn.type = 'button';
    btn.classList.add('btn', 'btn-sm', btnClass[i]);
    btn.textContent += btnText[i];
    btn.onclick = () => {
    changingUnits(main, btnUnit[i]);
    };

    spanButtons.appendChild(btn);
  }

  spanTemp.append(temperature, feelsLike, spanButtons);
  tempContainer.append(tempIcon, spanTemp);

  const specificContainer = document.createElement('div');
  specificContainer.classList.add('black-backg', 'py-3', 'spec-container');
  
  const minTemperature = pCreator(`Min: ${celOrFah(main.temp_min, 'celsius')}°`, 'min-temp');
  const maxTemperature = pCreator(`Max: ${celOrFah(main.temp_max, 'celsius')}°`, 'max-temp');
  const humidity = pCreator(`Humidity: ${main.humidity}%`);
  const visibilityText = pCreator(`Visibility: ${visibility} meters`);
  const windText = pCreator(`Wind: ${wind.speed}m/s`);
  const sky = pCreator(`Sky: ${weather[0].description} ${clouds.all}%`);
  const pressure = pCreator(`Pressure: ${main.pressure}.00hPa`);
 
  specificContainer.append(minTemperature, maxTemperature,
    visibilityText, sky, humidity, windText, pressure);
  container.append(tempContainer, specificContainer);
  return container;
};

export default weatherNums;