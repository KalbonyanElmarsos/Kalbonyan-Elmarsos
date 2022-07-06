/*********************
 * Coding Challenge #1
 ********************* */

/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK */

// 1) Understanding the problem
// - transform array into string.
// - what is the X days? Answer:index+1

// 2) Breaking up into sub-problems
// - transform array into string.
// - Transform each ele to string with C.
// - Strings need to contain day (index +1)
// - add ... between elements and start and end of string
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let str = ``;
  for (let x = 0; x < arr.length; x++) {
    str += `${arr[x]} *C in ${x + 1} days ... `;
  }
  console.log(" ... " + str);
};
printForecast(data1);
