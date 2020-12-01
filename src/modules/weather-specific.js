import weatherContainer from "./weather-container";
import weatherNums from './weather-nums';

const weatherSpecifics = (response) => {
   const mainContainer = document.querySelector('.content-cont');

   const container = document.createElement('div');
   container.classList.add('weather-specific', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-around', 'mt-5', 'mx-auto');
   container.setAttribute('id', 'weath-spec');

   const heading = document.createElement('h1');
   heading.textContent += `${response.name}`;
   heading.classList.add('text-center', 'font-weight-bold', 'm-0', 'd-block', 'w-100', 'py-2', 'black-backg');

   container.append(heading, weatherNums(response));
   mainContainer.append(container);
}

export default weatherSpecifics;