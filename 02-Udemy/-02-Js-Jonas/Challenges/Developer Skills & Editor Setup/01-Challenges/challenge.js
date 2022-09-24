const array1 = [17, 21, 23];
const array2 = [12, 5, -5, 0, 4];

console.log(`...${array1[0]}ºC...${array1[1]}ºC...${array1[2]}ºC...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days...`;
  }
  console.log('...' + str);
};

printForecast(array1);
// printForecast(array2);
