
/* *************************** 
**  Coding Challenge #3
********************************
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/
let chaining =
  calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
    .filter(age => age < 18)
    .reduce((acc, age) => acc + age, 0) / humanAges1.length;
// console.log(chaining);
chaining =
  calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
    .filter(age => age < 18)
    .reduce((acc, age) => acc + age, 0) / humanAges1.length;
// console.log(chaining);
