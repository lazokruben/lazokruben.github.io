// Név:
// Osztály:

"use strict";

let score = 20;
let highscore = 0;
//console.log(score, highscore);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(secretNumber);

const displayMassage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMassage('Nem szám!');
  } else if (guess === secretNumber) {
    displayMassage('Eltaláltad!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMassage(guess > secretNumber ? 'Túl sok!' : 'Túl kevés!');
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      displayMassage('Vesztettél!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

  document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMassage('Találgass...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});