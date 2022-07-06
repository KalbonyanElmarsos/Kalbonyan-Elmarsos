'use strict';

// ------DOM ELEMENTS------------------------------
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceImg = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

// global Variables
let scores, currentScore, currentPlayer, isPlaying;
//  reusable  functions
function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}
function initializeGame() {
  //  reset the initial values
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  isPlaying = true;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  diceImg.classList.add('hidden');
}
initializeGame();
//  event listener on rolling btn
rollBtn.addEventListener('click', function () {
  if (isPlaying) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (isPlaying) {
    // 1) update the player1/0 total score and also the UI
    scores[currentPlayer] += currentScore;
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    // 2) check if a player win then end the game
    if (scores[currentPlayer] >= 20) {
      isPlaying = false;
      diceImg.classList.add('hidden');

      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--active');
    } else {
      // 3) otherwise change the current player
      switchPlayer();
    }
  }
});

newBtn.addEventListener('click', initializeGame);
