'use strict';

//. class
//# id
// console.log(document.querySelector('.message').textContent);

//textContent para ter acceso ao q esta dentro

//Dom é uma representaçao dos documentos html, e permite ter acceso a html elements and styles to manipulate them (change text, html attributes and even css styles)

//Dom sao parte dos web apis dos navegadores que deixa interatuar com js

//72. Selecting and Manipulating Elements

// document.querySelector('.message').textContent = 'Correct Number! 👌';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//73. Handling Click Events

// quando der click, vamos imprimir na console o valor do input (guess)

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);

  let guess = document.querySelector('.guess').value;
  console.log(typeof guess); // type string

  guess = Number(guess);
  //ou
  //   let guess = Number(document.querySelector('.guess').value);
  //   console.log(typeof guess); // type string

  console.log(typeof guess); // type number

  // document.querySelector('.message').textContent = 'Correct Number! 👌';

  //0 é um valor false lembrar!
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number! 😒';
  } else if (guess === numberSecret) {
    document.querySelector('.message').textContent = 'number correto! 😒';
  } else if (guess !== numberSecret) {
    document.querySelector('.message').textContent = 'number incorreto! 😒';
  }
});

//74. Implementing the Game Logic

const numberSecret = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = numberSecret;

//min : 5:34
