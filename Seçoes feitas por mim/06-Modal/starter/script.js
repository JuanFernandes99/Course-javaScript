'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//querySelectorAll para ter todos os buttons em um nodelist como se fosse um array
const btnshowModal = document.querySelectorAll('.show-modal');

//porque as classs

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

console.log(btnshowModal);

for (let i = 0; i < btnshowModal.length; i++) {
  btnshowModal[i].addEventListener('click', openModal);
  //sem o () para nao chamar sempre, s´ó quando o utilizador faça click
}

// Click no X ou no overlay
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// teclado, sao eventos globais

//type of keys

//key up = quando tiramos o dedo da tecla
// key press =  é quanto mantemos o nosso dedo em uma tecla
//key down = quando colocamos o dedo na tecla

// quando un evento acontece temos acceso a esse evento na funçao de manipulador de eventos

//event é um objeto
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    // se o modal estiver a mostra
    closeModal();
  }
});
