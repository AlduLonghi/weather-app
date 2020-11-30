import weatherContainer from "./weather-container";
import weatherNums from './weather-nums';

const weatherSpecifics = (response) => {
   const mainContainer = document.querySelector('.content-cont');

   const container = document.createElement('div');
   container.classList.add('weather-specific', 'd-flex', 'flex-column', 'align-items-center', 'h-75', 'justify-content-around');
   container.setAttribute('id', 'weath-spec');

   const heading = document.createElement('h1');
   heading.textContent += `Weather in: ${response.name}`;
   heading.classList.add('text-center', 'font-weight-bold');

   container.append(heading, weatherNums(response));
   mainContainer.append(container);
}

export default weatherSpecifics;