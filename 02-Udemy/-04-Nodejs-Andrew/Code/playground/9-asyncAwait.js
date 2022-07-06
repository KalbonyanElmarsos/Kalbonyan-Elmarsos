const sum = (num1, num2) => {
  return new Promise((resolve, reject) => {
    const result = num1 + num2;
    resolve(result);
  });
};

const doSomeStuff = async () => {
  const res1 = await sum(2, 3);
  const res2 = await sum(10, 5);
  const res3 = await sum(10, 10);
  const res4 = await sum(10, 315);

  console.log(res1);
  console.log(res2);
  console.log(res3);
  console.log(res4);
};

doSomeStuff()
  .then(() => {
    console.log("Ok");
  })
  .catch((err) => {
    console.log(err);
  });
