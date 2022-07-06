
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
