//............................................................
//.............................................................
/*********************
 * Coding Challenge #1
 ********************* */
//1)
// const calcAverage = (point1, point2, point3) => {
//   return (point1 + point2 + point3) / 3;
// };
// //2)
// const avgDolhins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// //3)
// const checkWinner = (avgKoalas, avgDolhins) => {
//   if (avgKoalas > 2 * avgDolhins)
//     return `kolas wins ${avgKoalas} VS ${avgDolhins}`;
//   if (avgDolhins > 2 * avgKoalas)
//     return `Dolhins wins ${avgDolhins} VS ${avgKoalas}`;
//   return "no teams win....";
// };
// //4)
// const result = checkWinner(avgKoalas, avgDolhins);
// console.log(result);

/*********************
 * Coding Challenge #2
 ********************* */
// //1)
// const calcTip = (bill) => (bill > 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
// //2)
// const bills = [125, 555, 44];
// //3)
// const tips = [];
// tips[0] = calcTip(bills[0]);
// tips[1] = calcTip(bills[1]);
// tips[2] = calcTip(bills[2]);
// //3)
// const total = [];
// total[0] = bills[0] + tips[0];
// total[1] = bills[1] + tips[1];
// total[2] = bills[2] + tips[2];
// console.log(bills, tips, total);

/*********************
 * Coding Challenge #3
 ********************* */
// // 1)
// const mark = {
//   name: "mark",
//   mass: 78,
//   height: 1.69,
//   // 2)
//   calcBMI: function () {
//     this.BMI = this.mass * this.height;
//     return this.BMI;
//   },
// };
// const john = {
//   name: "john",
//   mass: 92,
//   height: 1.95,
//   // 2)
//   calcBMI: function () {
//     this.BMI = this.mass * this.height;
//     return this.BMI;
//   },
// };
// // 3)
// const markBMI = mark.calcBMI();
// const johnBMI = john.calcBMI();
// if (markBMI > johnBMI) {
//   console.log(
//     `${mark.name}'s BMI (${mark.BMI}) is higher than ${john.name}'s (${john.BMI})!`
//   );
// } else {
//   console.log(
//     `${mark.name}'s BMI (${mark.BMI}) is less than ${john.name}'s (${john.BMI})!`
//   );
// }

/*********************
 * Coding Challenge #4
 ********************* */
// 1)
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 56];
// 2)
const tips = [];
const totals = [];
// 3)
const calcTip = (bill) => (bill > 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
for (let x = 0; x <= bills.length - 1; x++) {
  tips.push(calcTip(bills[x]));
  totals.push(tips[x] + bills[x]);
}
// 4)
const calcAverage = (arr) => {
  let totalAges = 0;
  for (let x = 0; x <= arr.length - 1; x++) {
    totalAges += arr[x];
  }
  let average = totalAges / arr.length - 1;
  return average;
};
const result = calcAverage(ages);
console.log(result);
