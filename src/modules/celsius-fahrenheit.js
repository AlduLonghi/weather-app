const celsiusOrFahrenheit = (degrees, unit) => {
  if (unit === 'celsius') {
      return Math.round(degrees - 273.15)
  } else if (unit === 'fahrenhait') {
      return Math.round((degrees - 273.15) * 9/5 + 32);
  }
}

export default celsiusOrFahrenheit;