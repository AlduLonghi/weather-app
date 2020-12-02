const celsiusOrFahrenheit = (degrees, unit) => {
  let degreesUnit;
  if (unit === 'celsius') {
    degreesUnit = Math.round(degrees - 273.15);
  } if (unit === 'fahrenheit') {
    degreesUnit = Math.round(((degrees - 273.15) * 9) / 5 + 32);
  }
  return degreesUnit;
};

export default celsiusOrFahrenheit;