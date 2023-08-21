const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  //return celsius.toFixed(1);
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = 1.8 * celsius + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
