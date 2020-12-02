import weatherSpec from './weather-specific';
import backgroundChange from './backgr-management';

const gettingWeather = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bde3f0994e6528c00d440747db847b86`,
    { mode: 'cors' }).then(response => response.json())
    .then(response => {
      console.log(response);
      backgroundChange(response);
      weatherSpec(response);
    })
    .catch(() => {
      const mainContainer = document.querySelector('.content-cont');

      const container = document.createElement('div');
      container.setAttribute('id', 'error-container');
      container.classList.add('w-50', 'h-50', 'black-backg', 'mx-auto', 'error-div', 'font-weight-bold',
        'text-center', 'd-flex', 'justify-content-center', 'align-items-center', 'mt-5');
      container.textContent += 'City not found. Please try again!';

      const errorText = document.createElement('p');
      errorText.classList.add('d-block', 'w-75', 'mx-auto');
      errorText.textContent += 'City not found. Please try again!';

      mainContainer.append(container);
    });
};

export default gettingWeather;