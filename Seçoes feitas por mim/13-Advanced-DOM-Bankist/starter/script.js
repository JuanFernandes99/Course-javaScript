'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
///////////////////////////////////////
// Modal window

// Quando abrimos o modal ele vai para o inicio da pagina, pq temos um link nao um button , link é quando href = '#' ) é sempre quando temos um href
const openModal = function (e) {
  // mas isto evita isto
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
//OU

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//////////////////////////////////////////

//Button scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); //distance from the border of the browser
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////
//Page navigation

//devido ao href (ancora) ele vai para o id de cada seccao

//isto nao é bom ser assim pq se temos 10000 links poderia afetar o nosso rendimento da aplicacao, por isso utilizamos a delegaçao de eventos que sabe exatamente onde o evento esta a ser executado

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     //por isso preventdefault para evitar o href
//     e.preventDefault();
//     //get attribute pq n queremos o valor absoluto
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Solucao do problema de desempenho

//1. Add event listener to common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target); // ele imprime onde estas a clickar
  e.preventDefault();
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    //get attribute pq n queremos o valor absoluto
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// Types of Events and Event Handlers
const h1 = document.querySelector('h1');

//Going downwards:child

console.log(h1.querySelectorAll('.highlight'));
//estes dois elementos sao filhos diretos do h1
// se tivessem algum elemento com a mesma classe highlight no resto do documento, nao vao ser selecionados, porque nao seriam filhos do elemento h1
console.log(h1.childNodes);
console.log(h1.children);

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

//Going upwards:parents
console.log(h1.parentNode);
console.log(h1.parentElement);
//recebe o elemento pai mais perto dele, se tivermos varios elementos com
// Então, digamos que na página tivéssemos vários cabeçalhos, portanto, vários elementos com uma classe de cabeçalho, mas por algum motivo, queríamos apenas encontrar aquele que é um elemento pai de h1. Então, de todos os elementos h1 aqui. E então, para isso, podemos usar o mais próximo.
// h1.closest('header').style.background = 'var(--gradient-secondary)';
// Então, ele selecionou o cabeçalho mais próximo do nosso elemento h1,então o elemento pai mais próximo que tem essa classe e então ele simplesmente aplicou todo o estilo a esse elemento. Portanto, este é muito importante

//Seria o mesmo
// h1.closest('h1').style.background = 'var(--gradient-primary)';

//Going sideways: siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

//194. Building a Tabbed Component///
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //Guard clause
  //terminar imediatamente esta funçao
  // se nao tem um closest (operations.tab)
  if (!clicked) return;

  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate tab
  clicked.classList.add('operations__tab--active');
  //Activate content area

  // dataset:apenas a parte após os dados
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

////////////////195. Passing Arguments to Event Handlers////////////////

//Menu fade animation
const nav = document.querySelector('.nav');

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// ou
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

//////////////////////////////////////////
///////////////////////////////////////////

// // Selectin elements
// console.log(document.documentElement); // imprime todo o html
// console.log(document.head); // o head
// console.log(document.body); // o body

// const header = document.querySelector('.header'); // vai retornar o primeiro que tenha essa classe

// document.getElementById('section---1');
// const allButtons = document.getElementsByTagName('button'); // ele retorna um htmlCollection que significa que se a dom for alterdo, essa colectio também sera atualizada automaticamente.
// console.log(allButtons);

// //ele devolve um nodelist, se tu apagares uma section ele mantem o mesmo valor (por que esta variavel foi criada na epoca em que ainda existia essa section e ele nao se atualiza)
// const allSections = document.querySelectorAll('.section'); // todos os que tenham a classe section
// console.log(allSections);

// console.log(document.getElementsByClassName('.btn'));

// ////Creating and inserting elements///////////////////

// // .insertAdjacentHTML

// // const message = document.createElement('div');
// // message.classList.add('cookie-message');
// // //text content é o conteudo do texto
// // //inner html para que apareça tudo bootoes e isso

// // // message.textContent = 'We use cookied for improved functionality and analytics';
// // message.innerHTML =
// //   'We use cookied for improved functionality and analytics. <button class = "btn btn--close--cookie">Got it!</button>';

// // //.prepend method inserts a set of Node objects or DOMString objects before the first child of the Element. DOMString objects are inserted as equivalent Text node

// // //header.prepend(message);

// // // .append method inserts a set of Node objects or DOMString objects after the last child of the Element. DOMString objects are inserted as equivalent Text nodes.

// // header.append(message);

// // // Nota* ele nao escreveu outra vez a message, pq é o htmlCollection e ele atualiza lembrar, a soluçao seria:

// // //.cloneNode  duplica um elemento node (nó) da estrutura de um documento DOM. Ele retorna um clone do elemento para o qual foi invocado.

// // // header.append(message.cloneNode(true));

// // //Cria a div antes do <header></header>
// // // The Element.before() method inserts a set of Node or DOMString objects in the children list of this Element's parent, just before this Element

// // //header.before(message);

// // //Cria a div depois do <header></header>
// // // The Element.after() method inserts a set of Node or DOMString objects in the children list of the Element's parent, just after the Element.

// // //header.after(message);

// // /////////////////Delete elements////////////////

// // //The Element.remove() method removes the element from the DOM.
// // document
// //   .querySelector('.btn--close--cookie')
// //   .addEventListener('click', function () {
// //     message.remove();
// //     //message.parentElement.removeChild(message);
// //   });

// // ////////////////////Styles/////////////////////

// // message.style.backgroundColor = '#37383d';
// // message.style.width = '120%';

// // console.log(message.style.height); //só podes fazer isto para valores introduzidos manualmente, nao os que já estavam definidos

// // //para ter acceso temos que fazer isto:
// // console.log(getComputedStyle(message).backgroundColor);
// // console.log(getComputedStyle(message).height);

// // //o parseFloat é utilizado pq  aqui estamos tentando adicionar um número a uma string, pq tem o px , o parseFloat tira o número da string

// // message.style.height =
// //   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// // //aumentou 30 px
// // console.log(getComputedStyle(message).height);

// // //o color primary era o root que é a variavel css
// // // precisamos do setproperty para manipular css personalizados
// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// // //Attributes

// // const logo = document.querySelector('.nav__logo');

// // //Só consegue ler propiedades padrao, se criamos pelo menos designer = jonas, e tentassemos ler, nao vai funcionar
// // console.log(logo.alt);
// // console.log(logo.src);

// // logo.alt = 'Beautiful minimalist logo'; //conseguimos mudar também os valores dos attributes
// // console.log(logo.alt);

// // // Non-standard

// // console.log(logo.designer);
// // // mas tem uma soluçao: getAttribute
// // console.log(logo.getAttribute('designer'));

// // //cria um attributo company = "Bankist"
// // logo.setAttribute('company', 'Bankist');

// // //versao absoluta

// // //Se for para um link vamos precisar da versao absoluta

// // //http://127.0.0.1:5500/img/logo.png
// // console.log(logo.src);

// // //versao relativa
// // //img/logo.png
// // console.log(logo.getAttribute('src'));

// // const link = document.querySelector('.nav__link--btn');
// // console.log(link.href);
// // console.log(link.getAttribute('href'));

// // //////////////////Data attributes/////////////
// // console.log(logo.dataset.versionNumber);

// // // Classes
// // logo.classList.add('c', 'j'); //duas classes
// // logo.classList.remove('c', 'j');
// // logo.classList.toggle('c'); //The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false. If the token doesn't exist it's added and the function returns true.

// // //  logo.classList.contains('c'); Indica se um nó é um descendente de um dado nó.

// // //Don't use
// // logo.className = 'jonas';

// // const btnScrollTo = document.querySelector('.btn--scroll-to');
// // const section1 = document.querySelector('#section--1');

// // btnScrollTo.addEventListener('click', function (e) {
// //   const s1coords = section1.getBoundingClientRect();
// //   console.log(s1coords);

// //   console.log(e.target.getBoundingClientRect()); //distance from the border of the browser
// //   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

// //   //Scrolling
// //   // window.scrollTo(
// //   //   s1coords.left + window.pageXOffset,
// //   //   s1coords.top + window.pageYOffset
// //   // );

// //   // window.scrollTo({
// //   //   left: s1coords.left + window.pageXOffset,
// //   //   top: s1coords.top + window.pageYOffset,
// //   //   behavior: 'smooth',
// //   // });

// //   section1.scrollIntoView({ behavior: 'smooth' });
// // });

// // const h1 = document.querySelector('h1');

// // //ele dispara sempre que um mouse entra em um determinado elemento
// // //Mais em mDN event reference
// // h1.addEventListener('mouseenter', function (e) {
// //   alert('addEventListener: Great! You are reading the heading :D');
// // });

// // //Outra maneira de adicionar um event listener a um evento
// // //antigo , melhor usar addeventlistener!
// // h1.onmouseenter = function (e) {
// //   alert('onmousenter: Great! You are reading the heading :D');
// // };

// // //o addeventlistener é melhor pq permite adicionar varios event listener ao mesmo evento , e podemos remover um manipulador de eventos caso nao seja necessario

// // const alerth1 = function (e) {
// //   alert('addEventListener: Great! You are reading the heading :D');

// //   // se pasar novamente o mouse nao vai funcionar
// //   h1.removeEventListener('mouseenter', alerth1);
// // };

// // h1.addEventListener('mouseenter', alerth1);

// // // en 3 segundos apagar o event listener

// // setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000);

// ////Event Propagation: Bubbling and Capturing//////

// // rgb(255,255,255)

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));

// //so 1
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target, e.currentTarget);
// });

// // é o pai
// // e como se quando damos click nos featues tambem tivessemos dado click no quadro todo dos nav links debido ao efeito borbulha

// // mas se dermos click  só nos nav links nao altera a cor do nav__link porque este é o elemento pai e o evento apenas borbulha para seus elementos pais
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   //Stop propagation // não é boa ideia
//   // e assim o pai nao muda de cor

//   // e.stopPropagation();
// });

// // é tratado pelos 3 lugares
// // se dermos click nos features vai funcionar nos 3 lugares pq o features e o filho dos 2
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

// ////////////192. Event Delegation: Implementing Page Navigation//////////////
