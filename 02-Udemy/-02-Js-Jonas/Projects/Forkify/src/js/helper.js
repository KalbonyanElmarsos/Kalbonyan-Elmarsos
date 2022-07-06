import { TIME_OUT_SECONDS } from './config.js';
export const AJAX = async (url, data = undefined) => {
  try {
    const response = await Promise.race([
      data
        ? fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
        : fetch(url),
      timeout(TIME_OUT_SECONDS),
    ]);
    const responseJSON = await response.json();
    // console.log(responseJSON);
    if (!response.ok)
      throw new Error(`${responseJSON.message}, status: ${response.status}`);

    return responseJSON;
  } catch (err) {
    throw err;
  }
};
export const getJSONResponse = async url => {
  try {
    const response = await Promise.race([
      fetch(url),
      timeout(TIME_OUT_SECONDS),
    ]);
    const responseJSON = await response.json();
    // console.log(responseJSON);
    if (!response.ok)
      throw new Error(`${responseJSON.message}, status: ${response.status}`);

    return responseJSON;
  } catch (err) {
    throw err;
  }
};

export const sendJSONRequest = async (url, data) => {
  try {
    const response = await Promise.race([
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
      timeout(TIME_OUT_SECONDS),
    ]);
    const responseJSON = await response.json();
    // console.log(responseJSON);
    if (!response.ok)
      throw new Error(`${responseJSON.message}, status: ${response.status}`);

    return responseJSON;
  } catch (err) {
    throw err;
  }
};

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
