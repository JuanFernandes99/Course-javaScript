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

///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

for (const day of Object.keys(openingHours)) {
  console.log(day); // thu,fri,sat
}

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

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

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
