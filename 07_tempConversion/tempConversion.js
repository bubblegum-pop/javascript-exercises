const convertToCelsius = function(num) {
  const degreesF = num;
  const degreesC = (degreesF - 32) * (5 / 9);

  let result = Math.round(degreesC * 10) / 10.0;

  return result;
};

const convertToFahrenheit = function(num) {
  const degreesC = num;
  const degreesF = degreesC * (9 / 5) + 32;

  let result = Math.round(degreesF * 10) / 10.0;

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
