let weightMark = 95;
let heightMark = 1.88;
let weightJohn = 85;
let heightJohn = 1.76;

let BMIMark = weightMark / heightMark ** 2;
let BMIJohn = weightJohn / (heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);

/* or */

console.log(BMIMark, BMIJohn, markHigherBMI);
