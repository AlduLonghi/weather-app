import form from './form';

const weatherContainer = () => {
    const mainContainer = document.getElementById('container');

    const weatherCont = document.createElement('div');
    weatherCont.classList.add('container', 'weather-cont', 'd-flex', 'justify-content-center', 'align-items-center');

    const contentCont = document.createElement('div');
    contentCont.classList.add('w-75', 'content-cont')

    contentCont.append(form());
    weatherCont.append(contentCont);
    mainContainer.append(weatherCont);
}

export default weatherContainer;