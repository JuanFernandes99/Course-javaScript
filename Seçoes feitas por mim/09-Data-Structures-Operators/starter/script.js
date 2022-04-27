'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  // e o mesmo para o seguinte
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//////////////////////////////////////////////
// Working with Strings -Part 3

//Split and Join

// O .split converte em array o conteudo até chegar ao parametro e ignora esse parametro tambem na string
// O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.

// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));
// // O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// // The arr.join() method is used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its default value is a comma(, ).
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join('');
// console.log(newName);

// const capitalizeName = function (name) {
//   //o split para converter em array o conteudo até chegar ao espaço
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     //logo maiscula a primeira letra e a string toda desde o 1
//     // o push para adicionar ao array

//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     //ou
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   // e o join para unir os elementos do array em uma string, separados por neste caso um space
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('juan Fernandes');

// //Padding
// //O método padStart() preenche a string original com um determinado caractere, ou conjunto de caracteres, (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. O preenchimento é aplicado antes do primeiro caractere da string original. A string original não é modificada.

// const message = 'Go to gate 23!';
// // o comprimento deve ser 25, ele adiciona sinais '+' ate ter esse comprimento

// console.log(message.padStart(25, '+')); //+++++++++++Go to gate 23!

// //O método padEnd() preenche a string original com um determinado caractere, ou conjunto de caraceres, (repetidamente, se necessário) para que a string resultante alcance um determinado comprimento. O preenchimento é aplicado a partir do final (direita) da string original. A string original não é modificada.
// console.log(message.padStart(25, '+').padEnd(35, '+')); //+++++++++++Go to gate 23!++++++++++

// const maskCreditCard = function (number) {
//   const str = number + ''; // converte para stirng lembrar number to string
//   const last = str.slice(-4); //4789
//   return last.padStart(str.length, '*'); //*************4784 */
// };

// console.log(maskCreditCard(433789445601563));
// console.log(maskCreditCard('43378944560156333334789'));

// //Repeat

// const message2 = 'Bad weather ... All Departures delayed... ';
// //repeat 5 veces
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK �

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea');

document.querySelector('button').addEventListener('click', function () {
  const string = text.value.toLowerCase().split('\n');
  console.log(string);
  // 0: "underscore_case"
  // 1: "first_name"
  // 2: "some_variable"
  // 3: " calculate_age"
  // 4: "delayed_departure"

  //percorremos o array
  for (const [index, verString] of string.entries()) {
    const [p, s] = verString.split('_');
    // console.log(verString.split('_'));
    // 0: "underscore"
    // 1: "case"
    // console.log(p);
    // console.log(s);
    const saida = `${p}${s[0].toUpperCase() + s.slice(1)}`;
    console.log(saida);
    console.log(`${saida.padEnd(20)}${'✅'.repeat(index + 1)}`);
  }
  // for (const [index, player] of game.scored.entries()) {
  //   console.log(` Goal ${index + 1}: ${player}`); //todos os elementos do array
  //
});

// const capitalizeName = function (name) {
//   //o split para converter em array o conteudo até chegar ao espaço
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     //logo maiscula a primeira letra e a string toda desde o 1
//     // o push para adicionar ao array

//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     //ou
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   // e o join para unir os elementos do array em uma string, separados por neste caso um space
//   console.log(namesUpper.join(' '));
// };
//console.log(announcement.replaceAll('door', 'gate'));
//////////////////////////////////////////////
// Working with Strings -Part 2

// const airline = 'TAP Air Portugal';
// //Transforma a string em uppercase ou lowercase
// console.log(airline.toLowerCase);
// console.log(airline.toUpperCase);

// //Fix capitalization in name

// const passenger = 'jOnAs'; //Jonas
// // primeiro passamos tudo a minuscula
// const passengerLower = passenger.toLowerCase();
// //logo, criamos outra string e colocamos a primeira letra em maiscula
// // assim a primeira letra da string colocamos em maiuscula
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //Comparing emails

// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// // o trim tira os espaços
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// //mais facil tudo em uma linha
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail); // true

// //replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// //assim só vai fazer replace no primeiro door
// console.log(announcement.replace('door', 'gate'));
// // Por isso utilizamos o replaceAll
// console.log(announcement.replaceAll('door', 'gate'));

// //ou mas isto é a uma soluçao antiga
// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans

// // o Includes devolve true se include isso
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); //true
// console.log(plane.includes('Boeing')); //false
// //começa com Air também pode ser Ai etc
// console.log(plane.startsWith('Air')); //true

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW  Airbus family');
// }

// //Practice exercise

// const checkBaggage = function (items) {
//   //Sempre convertir o input do utilizador em lowercase
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };
// checkBaggage('I have a laptop,some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

//////////////////////////////////////////////
// Working with Strings -Part 1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log('B737'.length);

// //Position
// //Primeira concorrencia
// console.log(airline.indexOf('r')); // 6 pq é baseado em 0
// //ultima concorrencia
// console.log(airline.lastIndexOf('r')); // 6 pq é baseado em 0

// console.log(airline.indexOf('portugal')); // -1 pq é sensitive case ,
// console.log(airline.indexOf('Portugal')); //10

// //O método slice começa a extrair strings desde uma posiçao indicada
// console.log(airline.slice(4)); // Air Portugal

// //Position 4 até a 7
// console.log(airline.slice(4, 7)); //Air

// // do 0 até o space
// // por isso vamos fazer o indexof do space e se converte na posiçao final
// console.log(airline.slice(0, airline.indexOf(' '))); //TAP
// // se nao especificarmos a posicao inicial, vai até a posicao final
// console.log(airline.slice(airline.lastIndexOf(''))); // Portugal
// // + 1 para nao aparecer o space
// console.log(airline.slice(airline.lastIndexOf('')) + 1); //Portugal

// //assim começa a extrair desde o final
// console.log(airline.slice(-2)); //al

// // a segunda e a ultima
// console.log(airline.slice(1, -1)); //AP Air Portuga

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats

//   // Para saber qual é a ultima letra
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat ');
//   } else {
//     console.log('You got Lucky');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

//property Names
// const properties = Object.keys(openingHours);
// console.log(properties); // resultado ("thu" , "fri" , "sat")
// // console.log(`We are open on ${properties.length} days`); // resultado array com ("thu" , "fri" , "sat")

// let openStr = `We are open on ${properties.length} days: `; // resultado array com ("thu" , "fri" , "sat")

// for (const day of Object.keys(openingHours)) {
//   console.log(day); // thu,fri,sat que sao os key names
// }

// console.log(openStr); // we are open in 3 days

// // Property Values

// const values = Object.values(openingHours);
// console.log(values); //imprime o objeto tudo

// //Entire object
// const entries = Object.entries(openingHours);
// console.log(entries); // transformou o object em array

// // for(const x of entries) {
// //    console.log(x) // print each key and each value
// // }

// // [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`); //On thu we open at 12 and close at 22
// }

// ///Coding Challenge #2

// // Let's continue with our football betting app! Keep using the 'game' variable from
// // before.
// // Your tasks:
// // 1. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")
// // 2. Use a loop to calculate the average odd and log it to the console (We already
// // studied how to calculate averages, you can go check if you don't remember)
// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them
// // (except for "draw"). Hint: Note how the odds and the game objects have the
// // same property names 😉
// // 4. Bonus: Create an object called 'scorers' which contains the names of the
// // players who scored as properties, and the number of goals as the value. In this
// // game, it will look like this:
// // {
// // Gnarby: 1,
// // Hummels: 1,
// // Lewandowski: 2
// // }
// // GOOD LUCK 😀

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// var obj = {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
// };
// //.entries converte o objeto
// console.log(Object.entries(obj));

// //1. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")
// //index + 1 para que nao apareça o goal 0

// for (const player of game.scored) {
//   console.log(`${player}`); //todos os elementos do array os nomes
// }

// // escrevemos .entries, pq queremos os index e o valor

// for (const [index, player] of game.scored.entries()) {
//   console.log(` Goal ${index + 1}: ${player}`); //todos os elementos do array
// }

// // 2. Use a loop to calculate the average odd and log it to the console (We already
// // studied how to calculate averages, you can go check if you don't remember)
// const odds = Object.values(game.odds);

// //.values para ter os valores do objeto

// console.log(odds); //array com todos os valores [1.33, 3.25, 6.5]
// let average = 0;

// //ou for (const odd of odds)
// for (const odd of Object.values(game.odds)) {
//   average += odd;
// }
// average /= odds.length;
// console.log(average);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them
// // (except for "draw"). Hint: Note how the odds and the game objects have the
// // same property names 😉

// //Object.entries(game.odds) pq é um objeto

// console.log(Object.entries(game.odds));
// //output:
// //Array com 3 arrays
// //0:  ['team1', 1.33]
// //1:  ['x', 3.25]
// //2: ['team2', 6.5]

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(game[team]);
//   console.log(`Odd of ${teamStr} ${odd}`);
//   // console.log(team, odd); //team1 1.33 , etc.
// }

// // 4. Bonus: Create an object called 'scorers' which contains the names of the
// // players who scored as properties, and the number of goals as the value. In this
// // game, it will look like this:
// // {
// // Gnarby: 1,
// // Hummels: 1,
// // Lewandowski: 2
// // }
// // GOOD LUCK 😀

// // BONUS
// // So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// //////////////////////////////////////
// // Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);

// //WITH optional chaining
// // se nao for nulo ou indefined
// // mas se for nulo ou indefined o resultado vai ser indefined

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   //console.log(day);
//   // se quisermos usar um nome de variavel como nome da propiedade usamos os parenteses retos

//   //Feito para resolver o open = 0 q aparece , por isso utilizamos o ??
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// //se existir podemos chamarlo
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// //Arrays

// // const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];
// console.log(users[0]?.name ?? 'User array empty');

// //sem o optional chaining era assim:

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0, //  se é 0 é false e ica o outro valor
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// //OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;
// // console.log(rest1.numGuests); // 20
// // console.log(rest2.numGuests); //10

// // nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS';
// // rest2.owner = rest2.owner && '<ANONYMOUS';

// rest1.owner &&= '<ANONYMOUS';
// rest2.owner &&= '<ANONYMOUS';

// console.log(rest1);
// console.log(rest2);

////////////////////////////////////////////////
// The Nullish Coalescing Operator
// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2); //10

// //Nullish: null and undefined (NOT 0 OR '')
// // O 0 nao é um valor nulo, e or tanto, a avaliaçao é curto-circuitada , e imediatamente, esse primeiro valor nao nulo é retornado
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); //0

//////////////////////////////////
// //Short Circuiting (&& and ||)
// console.log('----- OR----');

// // Use ANY data type, return ANY data type, short-circuiting

// //short-circuiting significa que se for um value true, ele retornará imediatamente aquele primeiro valor e assim o javascript nem analisa isso
// console.log(3 || 'Jonas'); // o 3 é um valor true
// console.log('' || 'Jonas'); //Jonas
// console.log(true || 0); //true
// console.log(undefined || null); // undefined é um valor false,  null também , mas mesmo que null seja um valor false , como é o ultimo valor imprime null
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // return hello, que é o true mais perto e causa o curto-circuito

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----- AND----');
// //AND
// //Funciona ao contrario, entra em curto-circuito quando o primeiro valor é false
// console.log(0 && 'Jonas'); //0
// console.log(7 && 'Jonas'); // Jonas

// console.log('Hello' && 23 && null & 'Jonas'); //null

// //practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// //outra maneira , mas é melhor if else
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//1) Destructuring

//Resumo: spread é usado onde, escreveriamos valores, separados por uma virgula

// o rest é basicamente usado onde escreveriamos nomes de variables separados por virgula, e nao valores separados por virgulas

// rest pattern usa a mesma sintaxe, no entanto, para coletar vários elementos e condensa-los numa matriz, entao isso é realmente o oposto de o operador spread que desempacota um array

//SPREAD, because on RIGHT side of =

// const arr = [1, 2, ...[3, 4]];

// //Rest, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// //REST element deve ser o último elemento sempre. se nao da erro
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood); // Pizza Risotto [....]

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdays);

// //2) Functions

// //Assim, ele permite introduzir varios parametros com o rest, se nao soubermos quantos sao
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// // com o rest permite aceitar array, ou valores simples
// //por exemplo:
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// //assim passa tudo com virgulas
// add(x); //023,5,7
// add(...x); //35

// //mushrooms, e logo o array dos ingredientes restantes
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms'); //mushrooms and  array vazio
/////////////////////////////////////////
//The Spread Operator (...)

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// //melhor maneira com spread operator
// const newArray = [1, 2, ...arr];
// console.log(newArray);

// //ele imprime valores individuais
// console.log(...newArray); // é igual
// console.log(1, 2, 7, 8, 9); // é igual

// // ele contem os 3 elementos originais mais o gnocci
// //o spread operator pega todos os elementos do array e tambem nao cria novas variaveis, só podemos usa-lo em lugares onde deveriamos escrever os valores individualmente
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, stirngs, maps, sets. NOT objects

// const str = 'Jonas';
// //cada letra da string original é agora um elemento individual
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Schmedtmann`); // esté no é um lugar onde espera dados separados por uma virgula, só espera um token, os valores separados por virgula só sao esperados quando passamos argumentos para uma funçao ou quando construímos um novo array

// // Real-world example
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt("Let's make pasta! Ingredient 2?"),
// //   prompt("Let's make pasta! Ingredient 3?"),
// // ];
// // console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// //melhor ****
// restaurant.orderPasta(...ingredients);

// // Objects
// //copiara todas as propiedades do restaurante no nosso objeto, e podemos adicionar outras coisas
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name); // ristorante roma
// console.log(restaurant.name); // original , classico italiano

///////////////////////////////////////////////////////////////////
// //pass
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via del Sole,21',
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // //desestruturaçao
// // const [x, y, z] = arr;
// // console.log(x, y, z);
// // console.log(arr);

// // // const [first, second] = restaurant.categories;
// // // console.log(first, second); // the first two elements of array

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary); // the first and 3 elements of array

// // //Switching variables
// // //armazenar o valor do primeiro se nao ficaria
// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary);
// // // // [secondary, main];

// // //mais facil
// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // // Receive 2 return values from a function
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // //array dentro de outro array (nested)
// // //Nested destructuring
// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;
// // // console.log(i, j);

// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // //Default values
// // //para evitar o undefined
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);

////////////////////////////////
// Coding Challenge #1
// Data Structures, Modern Operators and Strings
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK �

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// //Loop for-of
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// //para saber o indice
// for (const [i, el] of menu.entries()) {
//   // console.log(item);
//   console.log(`${i + 1}: ${el}`);
// }
// console.log([...menu.entries]);
