'use strict';

//Obtain the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//Initial score
let score = 20;
//Highscore
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

//Event to catch the values
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //Whe there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //Check the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔆 Too High!' : '🔅 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤬 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;
});
