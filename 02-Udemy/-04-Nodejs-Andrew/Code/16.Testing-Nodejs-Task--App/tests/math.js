const calcTips = (total, tipPercint = 0.1) => total * tipPercint + total;

// const calcTips = (total, tipPercint = 0.1) => {
//   const tip = total * tipPercint;
//   return total + tip + 1;
// };

const fahrenheitToCelsius = (temp) => {
  return (temp - 32) / 1.8;
};

const celsiusToFahrenheit = (temp) => {
  return temp * 1.8 + 32;
};

const sum = (num1, num2) => {
  return new Promise((resolve, reject) => {
    const sum = num1 + num2;

    resolve(sum);
  });
};

module.exports = { calcTips, fahrenheitToCelsius, celsiusToFahrenheit,sum };
