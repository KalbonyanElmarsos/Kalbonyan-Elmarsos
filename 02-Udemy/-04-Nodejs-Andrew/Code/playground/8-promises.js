const sum = new Promise((resolve, reject) => {
  resolve(30);

  // reject("sum error happen");
});

// sum
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// *** PROMISE CHAINING

sum
  .then((result) => {
    console.log(result);
    return sum;
  })
  .then((result) => {
    console.log(result + 10);
  })
  .catch((err) => {
    console.log(err);
  });
