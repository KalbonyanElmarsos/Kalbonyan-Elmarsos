'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//https://restcountries.com/v3.1/name/{name}

// ------------- 248. Our First AJAX Call: XMLHttpRequest  ----------------------------------------------------------
// /*
function displayCountry() {
  const request = new XMLHttpRequest();

  return country => {
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
      const country = JSON.parse(this.responseText)[0];

      console.log(country);
      const currencyCountryName = Object.keys(country.currencies)[0];
      const countryElement = `
  <article class="country">
  <img class="country__img" src="${country.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${country.name.common}</h3>
    <h4 class="country__region">${country.region}</h4>
    <p class="country__row"><span>👫</span>${country.population}</p>
    <p class="country__row"><span>🗣️</span>${country.languages.ara}</p>
    <p class="country__row"><span>💰</span>${country.currencies[currencyCountryName].name}</p>
  </div>
</article>
  `;
      countriesContainer.insertAdjacentHTML('afterend', countryElement);
    });
  };
}
// displayCountry()('egypt');
// displayCountry()('qatar');

//*/
// ------------- 250. Welcome to Callback Hell  ----------------------------------------------------------
// /*
// Helper function
const injectHtml = (country, className) => {
  const currencyCountryName = Object.keys(country.currencies)[0];
  const countryElement = `
 <article class="country ${className}">
 <img class="country__img" src="${country.flags.png}" />
 <div class="country__data">
 <h3 class="country__name">${country.name.common}</h3>
 <h4 class="country__region">${country.region}</h4>
 <p class="country__row"><span>👫</span>${country.population}</p>
 <p class="country__row"><span>🗣️</span>${country.languages.ara}</p>
   <p class="country__row"><span>💰</span>${country.currencies[currencyCountryName].name}</p>
   </div>
   </article>
   `;
  countriesContainer.insertAdjacentHTML('afterend', countryElement);
};

function displayCountryAndNieghbour() {
  const request = new XMLHttpRequest();

  return country => {
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
      const country = JSON.parse(this.responseText)[0];

      // console.log(country);
      injectHtml(country, '');
      if (!country.borders) return;
      const neighbour = country.borders?.[1];
      // console.log(neighbour);

      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
      request2.send();
      request2.addEventListener('load', function () {
        const response = JSON.parse(this.responseText)[0];
        // console.log(response);
        injectHtml(response, 'neighbour');
      });
    });
  };
}
// displayCountryAndNieghbour()('egypt');
// callBack hell
// setTimeout(() => {
//   console.log('After 1 second');
//   setTimeout(() => {
//     console.log('After 2 second');
//     setTimeout(() => {
//       console.log('After 3 second');
//       setTimeout(() => {
//         console.log('After 4 second');
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

//*/
// ------------- 251. Promises and the Fetch API  ----------------------------------------------------------
// ------------- 252. Consuming Promises ----------------------------------------------------------
// ------------- 253. Chaining Promises ----------------------------------------------------------
// ------------- 254. Handling Rejected Promises  ----------------------------------------------------------
// ------------- 255. Throwing Errors Manually ----------------------------------------------------------
// /*

// const response = fetch(`https://restcountries.com/v3.1/name/egypt`);
// console.log(response);

// - Helper functions
function renderError(err) {
  console.log(err);
  countriesContainer.insertAdjacentText('beforeend', err);
  countriesContainer.getElementsByClassName.opacity = 1;
}

function fetchJSONCountry(url, msg = 'Something went wrong') {
  return fetch(url).then(successed => {
    if (!successed.ok) throw new Error(msg);
    return successed.json();
  });
}
const getCounrtyAdvancedFunc = function (counrty) {
  fetchJSONCountry(
    `https://restcountries.com/v3.1/name/${counrty}`,
    'there is no country '
  )
    .then(data => {
      const finalResult = data[0];
      injectHtml(finalResult, '');
      const nieghbour = finalResult.borders?.[1];

      if (!nieghbour) return;

      return fetchJSONCountry(
        `https://restcountries.com/v3.1/alpha/${nieghbour}`,
        'there is no neighbour for this country'
      );
    })
    .then(data => {
      // console.log(data[0]);
      injectHtml(data[0], 'neighbour');
    })
    .catch(err => {
      console.error(`${err}`);
      renderError(`Error occured ${err} `);
    })
    .finally(() => {
      countriesContainer.getElementsByClassName.opacity = 1;
    });
};
// const getCounrtyAdvancedFunc = function (counrty) {
//   fetch(`https://restcountries.com/v3.1/name/${counrty}`)
//     // .then(function (successed) {
//     //   // you need to convert the returned object to json--> which by default a function return a promise
//     //   return successed.json(); // return a promise
//     // })
//     // .then(function (data) {
//     //   const finalResult = data[0];
//     //   injectHtml(finalResult);
//     // });
//     .then(
//       successed => {
//         if (!successed.ok) throw new Error('country not found');
//         return successed.json();
//       }
//       // error => alert(error)
//     )
//     .then(data => {
//       const finalResult = data[0];
//       injectHtml(finalResult, '');
//       const nieghbour = finalResult.borders?.[1];

//       if (!nieghbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${nieghbour}`);
//     })
//     .then(
//       result => {
//         if (!result.ok)
//           throw new Error('there is no neighbour for this country');

//         return result.json();
//       }
//       // ,error => alert(error)
//     )
//     .then(data => {
//       // console.log(data[0]);
//       injectHtml(data[0], 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Error occured ${err} `);
//     })
//     .finally(() => {
//       countriesContainer.getElementsByClassName.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCounrtyAdvancedFunc('egypt');
// });
// getCounrtyAdvancedFunc('egypt');
// getCounrtyAdvancedFunc('jcxnjcnncx'); // not found error
//*/
// /*

//*/
// ------------- 258. The Event Loop in Practice ----------------------------------------------------------
/*

// console.log('start'); // first output
// setTimeout(() => console.log('0 second time'), 0); // last output
// Promise.resolve('Resolved').then(res => console.log(res)); // third output
// console.log('end'); // second output

console.log('-------------------------');

console.log('start'); // first output
setTimeout(() => console.log('0 second time'), 0); // last output
Promise.resolve('Resolved').then(res => console.log); // third output
Promise.resolve('Resolved2').then(res => {
  for (let i = 0; i > 1000000; i++) {}
  console.log(res);
}); //fourth output
console.log('end'); // second output
*/
// ------------- 259. Building a Simple Promise ----------------------------------------------------------
/*
const luckPromise = new Promise(function (resolve, reject) {
  console.log('game happening');
  setTimeout(function () {
    if (Math.random >= 0.3) {
      resolve('You win');
    } else {
      reject(new Error('Sorry you lost'));
    }
  }, 2000);
});

luckPromise.then(result => console.log()).catch(err => console.error);

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(() => {
    console.log('after 2 seconds');
    return wait(1);
  })
  .then(() => console.log('after another 1 seconds'));

// callBack hell
// setTimeout(() => {
//   console.log('After 1 second');
//   setTimeout(() => {
//     console.log('After 2 second');
//     setTimeout(() => {
//       console.log('After 3 second');
//       setTimeout(() => {
//         console.log('After 4 second');
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

Promise.resolve('resolve').then(x => console.log);
Promise.reject(new Error('error')).then(err => console.error);

*/
// ------------- 260. Promisifying the Geolocation API  ----------------------------------------------------------
/*
function getPosition() {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   result => resolve(result),
    //   error => reject(error)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
// getPosition().then(console.log);

function whereAmI2(lat, lng) {
  getPosition()
    .then(position => {
      const { latitude: lat, longitude: lng } = position.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then(result => {
      if (!result.ok) throw new Error('please try again ');
      return result.json();
    })
    .then(jsonResponse => {
      console.log(jsonResponse);
      console.log(`You are in ${jsonResponse.city}, ${jsonResponse.country}`);
      // console.log(jsonResponse.country);
      return fetch(
        `https://restcountries.com/v3.1/name/${jsonResponse.country}`
      );
    })
    .then(function (response) {
      if (!response.ok) throw new Error('country not found');

      // you need to convert the returned object to json--> which by default a function return a promise
      return response.json(); // return a promise
    })
    .then(jsonResponse => {
      console.log(jsonResponse);
      injectHtml(jsonResponse[0]);
    })
    .catch(err => console.error(err.message));
}
// whereAmI2();
*/
// ------------- 262. Consuming Promises with Async/Await  ----------------------------------------------------------
// ------------- 263. Error Handling With try...catch ----------------------------------------------------------
// /*
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function whereAmI() {
  try {
    const position = await getPosition();

    const { latitude: lat, longitude: lng } = position.coords;
    console.log(position.coords);

    const response = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );
    if (!response.ok)
      throw new Error('there is a problem for getting your location');
    const resJSON = await response.json();
    console.log(resJSON);

    const responseCountry = await fetch(
      `https://restcountries.com/v3.1/name/${resJSON.country}`
    );
    if (!responseCountry.ok)
      throw new Error('there is a problem for getting your country');

    const resJSONCounrty = await responseCountry.json();
    injectHtml(resJSONCounrty[0]);
    // - 264. Returning Values from Async Functions -
    return `You are in ${resJSON.city}, ${resJSON.country}`;
  } catch (err) {
    renderError(`${err.message}`);
    // - 264. Returning Values from Async Functions -
    throw err;
  }
}
// whereAmI();
// console.log('FIRST call');
//*/
// ------------- 264. Returning Values from Async Functions ----------------------------------------------------------
// /*
// console.log('Start execution');
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.log(err))
//   .finally(() => console.log('end execution'));

//  advanced way
// (async function () {
//   try {
//     const city = await whereAmI();
//   } catch (err) {
//     renderError(`${err.message}`);
//   }
//   console.log('end execution');
// })();
//*/
// ------------- 265. Running Promises in Parallel ----------------------------------------------------------
// /*
// async function get3Countries(c1, c2, c3) {
//   try {
//  - Sequencial async calling
// const [data1] = await fetchJSONCountry(
//   `https://restcountries.com/v3.1/name/${c1}`
// );
// const [data2] = await fetchJSONCountry(
//   `https://restcountries.com/v3.1/name/${c2}`
// );
// const [data3] = await fetchJSONCountry(
//   `https://restcountries.com/v3.1/name/${c3}`
// );
// console.log([data1.capital, data2.capital, data3.capital]);
//     const data = await Promise.all([
//       fetchJSONCountry(`https://restcountries.com/v3.1/name/${c1}`),
//       fetchJSONCountry(`https://restcountries.com/v3.1/name/${c2}`),
//       fetchJSONCountry(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data.map(city => city[0].capital));
//   } catch (err) {
//     console.log(err);
//   }
// }
// get3Countries('egypt', 'qatar', 'iraq');
//*/
// -------------  266. Other Promise Combinators: race, allSettled ----------------------------------------------------------
/*
(async function () {
  try {
    const data = await Promise.race([
      fetchJSONCountry(`https://restcountries.com/v3.1/name/iraq`),
      fetchJSONCountry(`https://restcountries.com/v3.1/name/qatar`),
      fetchJSONCountry(`https://restcountries.com/v3.1/name/$iraq`),
    ]);
    console.log(data[0]);
  } catch (err) {}
})();

function timeOut(time) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, time * 1000);
  });
}
Promise.race([
  fetchJSONCountry(`https://restcountries.com/v3.1/name/iraq`),
  ,
  timeOut(3),
])
.then(res => console.log(res))
.catch(err => console.error(err));

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success 2'),
])
  .then(console.log)
  .catch(err => console.error(err));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success 2'),
])
  .then(console.log)
  .catch(err => console.error(err));

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success 2'),
])
  .then(console.log)
  .catch(err => console.error(err));

*/
