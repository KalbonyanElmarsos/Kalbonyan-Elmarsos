'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlyer, playing;

// starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlyer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlyer = function () {
  document.getElementById(`current--${activePlyer}`).textContent = 0;
  currentScore = 0;
  activePlyer = activePlyer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. check for a roll to 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlyer}`).textContent =
        currentScore;
    } else {
      // Switch switch to next player
      switchPlyer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to the score of the active player
    scores[activePlyer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlyer}`).textContent =
      scores[activePlyer];

    // 2. Check score is already at least 100
    if (scores[activePlyer] > 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlyer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlyer}`)
        .classList.add('player--active');
    } else {
      // Switch to the next player
      switchPlyer();
    }
  }
});

btnNew.addEventListener('click', init);
