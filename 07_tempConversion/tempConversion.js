const ftoc = function(farenheit) {
  let celsius = (farenheit - 32) * (5/9);
  celsius = celsius.toFixed(1);
  return Number(celsius);
};

const ctof = function(celsius) {
  let farenheit = (celsius * 9/5) + 32;
  farenheit = farenheit.toFixed(1);
  return Number(farenheit);

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
