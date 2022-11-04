const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(array) {
  let sum = 0;
	for (i = 0; i < array.length; i++) {
    sum += array[i];
  } 
  return sum;
};

const multiply = function(array) {
  let result = array[0];
  if (array.length === 0) {
    return 0;
  }
  for (i = 1; i < array.length; i++) {
    result *= array[i];   
  }
  return result;
};

const power = function(number1, number2) {
	return Math.pow(number1, number2);
};

const factorial = function(number) {
  let result = number;
  switch(number) {
    case 0:
    case 1:
      return 1;  
  }
	for (i = number - 1; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
