'use strict';

//. class
//# id

//textContent para ter acceso ao q esta dentro
// console.log(document.querySelector('.message').textContent);

//Dom é uma representaçao dos documentos html, e permite ter acceso a html elements and styles to manipulate them (change text, html attributes and even css styles) , Dom sao parte dos web apis dos navegadores que deixa interatuar com js

// document.querySelector('.guess').value = 23;

// quando der click, vamos imprimir na console o valor do input (guess)

//vai criar um número random de 1 até 20

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
//variavel para o score do jogo
//!!para n depender da dom!!
let score = 20;
let highscore = 0;

//repetimos muito o .message por isso criamos uma funçao
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//atribui o valor do secretnumber a classe number que é o número secreto

document.querySelector('.check').addEventListener('click', function () {
  // quando der click no check o valor do guess, atribuimos a variavell guess
  // Number(), pq o guess aparece em string
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); // type number

  //when there is no input ,0 é um valor false lembrar!
  if (!guess) {
    // se a variavel guess estiver a 0 , no number!
    displayMessage('No Number! ⛔️');

    //when player wins
  } else if (guess === secretNumber) {
    // se for igual ao secretNumber : número correto
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    //Css style
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').style.width = '30rem';

    //highScore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;

      displayMessage(guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉');
    } else {
      //When the game is Over!
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  displayMessage('Start guessing...!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
