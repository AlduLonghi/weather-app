import weatherContainer from "./weather-container";

const weatherSpecifics = (response) => {
   const mainContainer = document.querySelector('.content-cont');

   const container = document.createElement('div');
   container.classList.add('weather-specific');
   container.setAttribute('id', 'weath-spec');

   const heading = document.createElement('h1');
   heading.textContent += `Weather in: ${response.name}`;
   heading.classList.add('text-center', 'font-weight-bold');

   container.append(heading);
   mainContainer.append(container);
}

export default weatherSpecifics;