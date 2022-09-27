const scoreDolphin = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphin, scoreKoalas);

if (scoreDolphin > scoreKoalas) {
  console.log("Dolphin is winner!");
} else if (scoreKoalas > scoreDolphin) {
  console.log("Koalas is winner!");
} else if (scoreDolphin === scoreKoalas) {
  console.log("WoW, Both winner!");
} else {
  console.log("No one winner!");
}

// Bonus
// const scoreDolphin = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;

// console.log(scoreDolphin, scoreKoalas);

// if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
//   console.log("Dolphin is winner!");
// } else if (scoreKoalas > scoreDolphin && scoreKoalas >= 100) {
//   console.log("Koalas is winner!");
// } else if (
//   scoreDolphin === scoreKoalas &&
//   scoreDolphin >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("WoW, Both winner!");
// } else {
//   console.log("No one winner!");
// }
