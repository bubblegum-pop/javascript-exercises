const fibonacci = function(num) {
  const member = parseInt(num);
  let num1 = 0;
  let num2 = 1;
  let sum;
  if (member < 0) {
    return "OOPS";
  } else if (member === 0) {
    return num1;
  } else if (member === 1) {
    return num2;
  } else {
    for (let i = 1; i < num; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = fibonacci;
