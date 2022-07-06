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
  body.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
  numberEl.textContent = '?';
  guessEl.value = 0;
});
