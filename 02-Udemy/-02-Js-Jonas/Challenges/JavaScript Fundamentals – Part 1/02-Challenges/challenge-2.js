let weightMark = 95;
let heightMark = 1.88;
let weightJohn = 85;
let heightJohn = 1.76;

let BMIMark = weightMark / heightMark ** 2;
let BMIJohn = weightJohn / (heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;

if (BMIMark > BMIJohn) {
  // console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI (${BMIMark}) is higher than John's(${BMIJohn})`);
} else {
  // console.log("John's BMI is higher than Mark's!");
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's(${BMIMark})`);
}
