const geoCode = (position, callback) => {
  const latLan = { latitude: 0, longtude: 0 };

  setTimeout(() => {
    callback(latLan);
  }, 2000);
};

geoCode("h", (data) => {
  console.log(data);
  if (data) return data;
  return "wrong";
});
//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (num1, num2, callback) => {
  setTimeout(() => {
    const sum = num1 + num2;

    callback(sum);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
