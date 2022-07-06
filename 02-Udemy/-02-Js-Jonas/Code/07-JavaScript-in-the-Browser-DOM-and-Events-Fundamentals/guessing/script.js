'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'hello';
document.querySelector('.number').textContent = 7;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 10;
*/
// ---------------------------Events----------------------------------
// selectors
const body = document.querySelector('body');
const numberEl = document.querySelector('.number');
const message = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const guessEl = document.querySelector('.guess');
const highScoreEl = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// numberEl.textContent = secretNumber;

let score = Number(scoreEl.textContent);
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(guessEl.value);
  score -= 1;
  scoreEl.textContent = score;

  if (!guess) {
    message.textContent = '🚫 No Number';
  } else if (guess === secretNumber) {
    message.textContent = '🥳 Correct Number';
    body.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
    numberEl.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      message.textContent = guess > secretNumber ? '💹 Too high' : '〽 Too low';
    } else {
      message.textContent = '😥 Sorry you lost';
    }
  }
});
/*********************
 * Coding Challenge #1
 ********************* */

/*Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK */
// 1)
document.querySelector('.again').addEventListener('click', function () {
  message.textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreEl.textContent = 20;
  score = 20;
  body.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
  numberEl.textContent = '?';
  guessEl.value = '';
});
