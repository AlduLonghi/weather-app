const backgroundChange = (response) => {
  const body = document.querySelector('body');
  if (response.weather[0].description === 'overcast clouds') {
    body.classList = ''
    body.classList.add('overcast-clouds');
  } else if (response.weather[0].description === 'broken clouds'
    || response.weather[0].description === 'scattered clouds'
    || response.weather[0].description === 'few clouds') {
      body.classList = ''
      body.classList.add('scattered-clouds');
  } else if (response.weather[0].main === 'Clear') {
    body.classList = ''
    body.classList.add('sunny');
  } else if (response.weather[0].main === 'Rain') {
    body.classList = ''
    body.classList.add('rainy');
  } else if (response.weather[0].description === 'mist') {
    body.classList = ''
    body.classList.add('mist');
  } else if (response.weather[0].description === 'haze') {
    body.classList = ''
    body.classList.add('haze');
  }
};

export default backgroundChange;
