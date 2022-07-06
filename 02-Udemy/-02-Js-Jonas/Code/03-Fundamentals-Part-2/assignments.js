//--------------------Assignments-------------------------
// ***********  assignments 01.LECTURE: Functions.
// 1)
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its
//   capital city is ${capitalCity}`;
// }
// // 2)
// let v1 = describeCountry("egypt", 110, "cairo");
// let v2 = describeCountry("iran", 90, "tahran");
// let v3 = describeCountry("qatar", 10, "doha");
// console.log(v1)
// console.log(v2)
// console.log(v3)

// ***********  assignments 02.LECTURE:  Function Declarations vs. Expressions.
// 1)
// function percentageOfWorld1(population) {
//   return (population / 80000000) * 100;
// }

// // 2)
// const value = percentageOfWorld1(14410000);
// console.log(value);
// // 4)
// const percentageOfWorld1 = function (population) {
//   return (population / 80000000) * 100;
// };
// const value2 = percentageOfWorld1(14410000);
// console.log(value2);

// ***********  assignments 02.LECTURE: Arrow Functions.
// 1)
// const percentageOfWorld3 = (population) => {
//   return (population / 80000000) * 100;
// };
// const value3 = percentageOfWorld3(14410000);
// console.log(value3);

// ***********  assignments 03.LECTURE: Functions Calling Other Functions
// 1)
// function describePopulation(country, population) {
//   return `${country} has ${percentageOfWorld1(population)} million people`;
// }

// // 2)
// function percentageOfWorld1(population) {
//   return (population / 80000000) * 100;
// }
// // 3)
// console.log(describePopulation('egypt', 100000000))

// ***********  assignments 02.LECTURE: Introduction to Arrays.
// // 1)
// const populations = [100, 90, 80, 155];
// //2)
// console.log(populations.length > 4);
// //3)
// function percentageOfWorld1(population) {
//   return (population / 80000000) * 100;
// }
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// ***********  assignments 02.LECTURE: Basic Array Operations (Methods).
// //1)
// const neighbours = ["egypt", "moroco", "lebya", "qatar"];
// //2)
// neighbours.push("Utopia");
// //3)
// neighbours.pop();
// //4)
// const isItGermany = neighbours.includes("‘Germany’");
// if (isItGermany) console.log("Probably not a central European country :D");
// //5)
// neighbours.indexOf(1)= 'alegria';

// ***********  assignments LECTURE: Introduction to Objects
// const myCountry = {
//   country: "egypt",
//   capital: "cairo",
//   language: "arabic",
//   population: 110,
//   neighbours: ["moroco", "qatar", "red sea"],
// };

// ***********  assignments LECTURE: Dot vs. Bracket Notation
// 1)
// console.log(`${myCountry.country} has ${myCountry.population} people,
//  ${myCountry.neighbours.length} countries and a capital called ${myCountry.capital}`);
// // 2)
// myCountry.population = myCountry.population + 2;
// myCountry["population"] = myCountry["population"] - 2;

// // ***********  assignments LECTURE: Object Methods
// // 1)
// const myCountry = {
//   country: "egypt",
//   capital: "cairo",
//   language: "arabic",
//   population: 110,
//   neighbours: ["moroco", "qatar", "red sea"],
//   describe: function () {
//     return `${this.country} has ${this.population} people,
//     ${this.neighbours.length} countries and a capital called ${this.capital} `;
//   },
//   // 3)
//   checkIsland: function () {
//     return this.neighbours.length > 0 ? true : false;
//   },
// };
// // 2)
// console.log(myCountry.describe());
// console.log(myCountry["describe"]());

// ***********  assignments LECTURE: The for Loop
// 1)
// for (let x = 0; x < 50; x++) {if x =2 break;
//   console.log(`Voter number ${x} is currentl voting`);
// }
// ***********  assignments LECTURE: Looping Arrays, Breaking and Continuing
// 1)
const populations = [100, 90, 80, 155];
// 2)
const percentages2 = [];
for (let x = 0; x < populations.length; x++) {
  percentages2[x] = populations[x] / 1.7;
}
// 3) the same

// ***********  assignments LECTURE: Looping Backwards and Loops in Loops
// 1)
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
// 2)
for (let i = 0; i < listOfNeighbours.length; i++)
  // 3)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// ***********  assignments LECTURE:The while Loop.
// 1)
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
// 2) ity depends on the data type
