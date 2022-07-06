// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problem
// - what is tem aplitude? answer: difference between highest and lowest temp.
//  - who to compute  max and min temp?
// - what is a sensor error? and what to do?

// 2) divide and concur, (sub-problems)
//  - how to ignore error?
//  - find max value in temp arr?
//  - find min value in temp arr?
//  - sub min from max and return it.
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     const curTemp = temps[i];
//     if (curTemp > max) max = temps[i];
//     if (curTemp < max) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };
// calcTempAmplitude([3, 7, 4, 1, 8]);
// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
// const calcTempAmplitudeNew = function (temp1, temp2) {
//   const temps = temp1.concat(temp2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     const curTemp = temps[i];
//     debugger;
//     if (curTemp > max) max = temps[i];
//     if (curTemp < max) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitudeNew([3, 5, 1], [9, 0, 85]);
// console.log(amplitude);

// const measurekelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),
//   };

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
