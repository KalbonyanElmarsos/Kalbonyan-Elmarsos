const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 5, 8));

// Data-1
let dolphinScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(56, 54, 49);
console.log(dolphinScore, koalasScore);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphin is winner (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas is winner (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins! ");
  }
};

checkWinner(dolphinScore, koalasScore);
checkWinner(576, 111);

// Data-2
dolphinScore = calcAverage(85, 54, 41);
koalasScore = calcAverage(23, 34, 27);
console.log(dolphinScore, koalasScore);
checkWinner(dolphinScore, koalasScore);
