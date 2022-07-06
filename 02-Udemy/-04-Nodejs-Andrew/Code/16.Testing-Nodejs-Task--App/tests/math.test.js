const {
  calcTips,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  sum,
} = require("./math");

// test("Total tips :", () => {
//   const result = calcTips(10, 0.2);
//   expect(result).toBe(12);
// });

// test("Checking default value ", () => {
//   const result = calcTips(10);
//   expect(result).toBe(11);
// });

// test("testing test", () => {});

// test("testing test2", () => {
//   throw new Error("failed");
// });

// Goal: Test temperature conversion functions
//
// 1. Export both functions and load them into test suite
// 2. Create "Should convert 32 F to 0 C"
// 3. Create "Should convert 0 C to 32 F"
// 4. Run the Jest to test your work!

// test("Should convert 32 F to 0 C", () => {
//   const result = fahrenheitToCelsius(32);
//   expect(result).toBe(0);
// });

// test("Should convert 0 C to 32 F", () => {
//   const result = celsiusToFahrenheit(0);

//   expect(result).toBe(32);
// });

// test("Async test demo ", () => {
//   setTimeout(() => {
//     expect(1).toBe(1);
//
//   }, 1000);
// });

// test("Async testing ", (done) => {
//   setTimeout(() => {
//     expect(1).toBe(1);
//     done();
//   }, 1000);
// });

// test("Async test demo ", (done) => {
//   sum(10, 10).then((result) => {
//     expect(result).toBe(20);
//     done();
//   });
// });

test("Async test demo ", async () => {
  const result = await sum(10, 10);
  expect(result).toBe(20);
});
