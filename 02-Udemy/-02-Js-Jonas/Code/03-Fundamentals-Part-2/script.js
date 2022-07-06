"use strict";

// let champion = false;
// const winFinal = true;

// if (winFinal) champion = true;
// if (champion) console.log("iam the champion now");

// function checkChampion() {
//   let champion = false;
//   const winFinal = true;

//   if (winFinal) champion = true;
//   if (champion) console.log("iam the champion now");
// }
// checkChampion();
// checkChampion();
//--------------------Function declaration-------------------------
// function getFullName(first, second) {
//   return `hi ${first} + ${second}`;
// }
// const returnedValue = getFullName("ali", "youssef");
//--------------------Function expression-------------------------
// function getFullName(first, second) {
//   return `hi ${first} + ${second}`;
// }
// const returnedValue = getFullName("ali", "youssef");
// const getFullName = function (first, second) {
//   return `hi ${first} + ${second}`;
// };
//--------------------Arrow Function-------------------------
// const getFullName = (first, second) => `hi ${first} + ${second}`;
// console.log(getFullName('ali', 'mohamed'))

const friends = ["micheal", "steven", "peter"];
friends.push("jey");
crossOriginIsolated.log(friends);
//------------------------------Objects-------------------------------------
const mahmoud = {
  firstName: "mahmoud",
  lastName: "farag",
  birthyear: 1997,
  isGraduated: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //   // this is the mahmoud obj
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};
console.log(mahmoud);
console.log(mahmoud.firstName);
console.log(mahmoud["firstName"]);
console.log(mahmoud["first" + "Name"]);
mahmoud.country = "egypt";
mahmoud["language"] = "arabic";
mahmoud.calcAge();
mahmoud["calcAge"]();
//------------------------------Loops-------------------------------------
const ages = [20, 12, 45, 22, 32, 22, 4, 34];
// forward loop
for (let i = 0; i < ages.length; x++) {
  console.log(ages[i]);
}
// backward loop
for (let i = ages.length - 1; i >= 0; i--) {
  console.log(ages[i]);
}
// nested loop
const names = [
  "ali",
  "hend",
  "joe",
  "john",
  "mahmoud",
  "shams",
  "wafaa",
  "farag",
];
for (let i = 0; i < ages.length; i++)
  // 3)
  for (let y = 0; y < names[i].length; y++)
    console.log(`${names[y]}, its age= ${ages[y]}`);

// while loop
let index = 0;
while (index <= ages.length - 1) {
  console.log(ages[index]);
  index++;
}

let dice = Math.trunc(Math.random() * 10) + 1;
while (dice !== 7) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 10) + 1;
  if (dice === 7) console.log(`loop is about to end.....`);
}
