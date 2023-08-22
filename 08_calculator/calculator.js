const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  return numbers.reduce((total, current) => total + current, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, current) => product * current)
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let fact = 1;
	for (let i = fact; i <= num; i++) {
    fact *= i
  }
  return fact;
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
