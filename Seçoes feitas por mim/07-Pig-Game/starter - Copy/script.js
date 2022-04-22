'use strict';

const scorePlayer0 = document.querySelector('#score--0');
const scorePlayer1 = document.querySelector('#score--1');

const currentScorePlayer0 = document.querySelector('#current--0');

const currentScorePlayer1 = document.querySelector('#current--1');

const btnNewGame = document.querySelector('.btn--new');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');

const diceElement = document.querySelector('.dice');

let score = 0;
let playerActive = 0;
scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;

diceElement.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  //1.Generate random dice roll
  let diceNumber = Math.trunc(Math.random() * 6) + 1;

  //2.Display dice roll
  score += diceNumber;

  if (diceNumber !== 1) {
    diceElement.classList.remove('hidden');
    currentScorePlayer0.textContent = score;

    diceElement.src = `dice-${diceNumber}.png`;
  } else {
    //Switch player
  }
});
