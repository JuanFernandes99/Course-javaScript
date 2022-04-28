'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  // assim vaziamos o que estava antes

  //text content return the text
  // e o inner html retorna todo incluindo o html todas as tags html sao incluidas
  //pero tmb se pode ser como set

  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
  `;
    //para inserir o html
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

// const user = 'Steven Thomas Williams'; //stw

const createUsernames = function (accs) {
  //accs =  o array com os 4 objetos
  console.log(accs);
  accs.forEach(function (acc) {
    //acc cada objeto por isso o foreach
    console.log(acc);
    acc.username = acc.owner
      // o split converte para array cada elemento até o space
      //logo faz um mapeamento de cada elemtnod o array e devolve um novo array ['s', 't', 'w'] com o primeiro elemento de cada um
      // logo faz o join com um spaço no meio s t w
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//Para criar o username a todas las contas
createUsernames(accounts);

const calcDisplayBalance = movements => {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1.movements);

console.log(accounts);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    //Ahora se queremos eliminar os impuestos menor a 1
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);

/////////////////////////////// Magic Chaining//////////

//podemos hacer varios pq sao arrays, que vao saindo até o reduce que aparece um valor
const eurToUsd2 = 1.1;
// PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd2)
//   .reduce((acc, mov) => acc + mov, 0);

//Agora se alguma coisa corre mal queriamos saber onde é por isso vamos fazer assim:
console.log(movements);
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    //assimv erificamos o arr que é o resultado da operaçao anterior que seria o filter
    console.log(arr);
    return mov * eurToUsd2;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// const withdrawsFor = [];
// for (const mov of movements) if (movements < 0) withdrawsFor.push(mov);

// //para saber o saldo da conta vamos usar o reduce

// console.log(movements);
// // accumulator -> SNOWBALL
// const balance = movements.reduce((acc, cur, i, arr) => {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
//   //o 0 é o valor que especificamos como valor inicial
// }, 0);
// console.log(balance);

// //Outra forma
// let balanceFor = 0;
// for (const mov of movements) balanceFor += mov;
// console.log(balanceFor);

// //Maximum value

// //percorre e vai comparando se o
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc /*fica com o mesmo valor */;
//   else return mov; // retorna o mov como nuevo acumulador in the next iteration
// }, movements[0]);
// //acc é movements[0] = 200

// //acc é 450 maior que -400 sim , entra no return acc e entao o acumulador se mantem igual para a proxima interaçao
// console.log(max);
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // ---------------The map Method-------------
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// //O map retorna um array
// const movementsUSD = movements.map(mov => mov * eurToUsd);

// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });

// console.log(movements);
// console.log(movementsUSD);

// //OU com forloop
// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${
//       mov > 0 ? 'deposited' : 'withdrew'
//     } deposited ${Math.abs(mov)}`
// );
// console.log(movementsDescriptions);

// // ---------------Data Transformations: map, filter, reduce-------------

// //O map é usado para fazer um loop em arrays, semelhante ao foreach, mas o map cria um novo array baseado na matriz original

// //entao essencialmente, o map pega um array faz um loop em esse array e, emcada alteração, aplica uma função covic que especificamos em nosso código ao elemento atual do array. Portanto, neste exemplo, dizemos que cada elemento deve ser multiplicado por dois. e coloca em um novo array

// //forEach porque forEach simplesmente nos permite fazer algum trabalho  com cada elemento do array. Mas o mapa, por outro lado, nos constrói um novo array contendo os resultados da aplicação de uma operação ao array original,

// // método de filter, que como o nome diz, é usado
// // para filtrar os elementos do array original que satisfaçam uma determinada condição.
// // Portanto, neste exemplo,  procuramos apenas elementos maiores que dois.
// // Portanto, todos os elementos que passarem no teste que especificamos farão parte de uma nova matriz filtrada.
// // Ou, em outras palavras, os elementos para os quais a condição é  verdadeira serão incluídos em uma nova matriz que o método de filtro retorna. Todos os outros elementos serão filtrados,portanto, não serão incluídos na nova matriz.

// // método de reduce que usamos para condensar todos os elementos do array original em um único valor.
// // E um exemplo disso pode ser adicionar todos os elementos de um array juntos. Mas também podemos fazer muitas outras coisas interessantes.
// // Portanto, para o exemplo de somar todos os números na matriz, precisamos especificar uma operação como esta, em que temos uma variável de acumulador.
// // Então, conforme o método de redução faz um loop
// // sobre o array, ele continua adicionando o elemento atual ao acumulador até que no final do loop tenhamos a soma total de todos os elementos.

// /////////////////////////////////////////////////

// // //-------------------------Slice----------------//
// // //O array também tem o slice

// // // O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.

// // let arr = ['a', 'b', 'c', 'd', 'e'];

// // console.log(arr.slice(2));
// // // 0: "c"
// // // 1: "d"
// // // 2: "e"
// // console.log(arr.slice(2, 4));
// // // 0: "c"
// // // 1: "d"
// // console.log(arr.slice(-2));
// // // 0: "d"
// // // 1: "e"
// // //nota: o "-"" nao pode ser 0
// // console.log(arr.slice(-1));
// // //0: "e"
// // console.log(arr.slice(1, -2));
// // // 0: "b"
// // // 1: "c"
// // console.log([...arr]);
// // //O array todo

// // //-------------------------Splice---------------//

// // // O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

// // // let arr = ['a', 'b', 'c', 'd', 'e'];

// // // console.log(arr.splice(2));
// // //extrai esta parte do array
// // // 0: "c"
// // // 1: "d"
// // // 2: "e"

// // // arr.splice(-1); //O ultimo elemento
// // // 0: "a"
// // // 1: "b"
// // // 2: "c"
// // // 3: "d"

// // arr.splice(1, 2); // b and c are deleted
// // // 0: "a"
// // // 1: "d"
// // // 2: "e"

// // console.log(arr);
// // //ele mudou o arr original:

// // // 0: "a"
// // // 1: "b"

// // //-------------------------Reverse--------------//
// // // O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
// // // e muda o array original
// // arr = ['a', 'b', 'c', 'd', 'e'];

// // const arr2 = ['j', 'i', 'h', 'g', 'f'];
// // console.log(arr2.reverse());
// // // 0: "f"
// // // 1: "g"
// // // 2: "h"
// // // 3: "i"
// // // 4: "j"
// // console.log(arr2);

// // //-------------------------Concat--------------//
// // // O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro.

// // const letters = arr.concat(arr2);
// // console.log(letters);
// // //igual que
// // console.log([...arr, ...arr2]);

// // //-------------------------Join--------------//

// // // O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.

// // console.log(letters.join(' - '));
// // //a - b - c - d - e - f - g - h - i - j

// //----------143. The new at Method--------------//
// // const arr = [23, 11, 64];
// // console.log(arr[0]); //23
// // //alternative
// // console.log(arr.at(0)); //23

// // // getting last array element
// // console.log(arr[arr.length - 1]);
// // console.log(arr.slice(-1)[0]);
// // //new way
// // console.log(arr.at(-1));

// //----------144. LOOPING: FOREACH--------------//
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // //A ordem dos argumentos do foreach e o for loop é ao contrario !! important

// // // e o foreach nao pode fazer break!

// // // o abs tira o valor negativo
// // // for (const movement of movements) {
// // //   if (movement > 0) {
// // //     console.log(`You deposited ${movement}`);
// // //   } else {
// // //     //// o abs tira o valor negativo
// // //     //A função Math.abs(x) retorna o valor absoluto de um número "x", tal qual:
// // //     console.log(`You withdraw ${Math.abs(movement)}`);
// // //   }
// // // }

// // //Assim para obter acceso ao index
// // for (const [i, movement] of movements.entries()) {
// //   if (movement > 0) {
// //     console.log(`Movement ${i + 1}: You deposited ${movement}`);
// //   } else {
// //     //// o abs tira o valor negativo
// //     //A função Math.abs(x) retorna o valor absoluto de um número "x", tal qual:
// //     console.log(`You withdraw ${Math.abs(movement)}`);
// //   }
// // }

// // console.log('-----------FOREACH-------');

// // // movements.forEach(function (movement) {
// // //   if (movement > 0) {
// // //     console.log(`You deposited ${movement}`);
// // //   } else {
// // //     //// o abs tira o valor negativo
// // //     //A função Math.abs(x) retorna o valor absoluto de um número "x", tal qual:
// // //     console.log(`You withdraw ${Math.abs(movement)}`);
// // //   }
// // // });

// // //Assim para obter acceso ao index (mais facil o foreach)

// // //first parameter movement, //second index // tercer array !!important
// // movements.forEach(function (mov, i, arr) {
// //   if (mov > 0) {
// //     console.log(`Movement ${i + 1}: You deposited ${mov}`);
// //   } else {
// //     //// o abs tira o valor negativo
// //     //A função Math.abs(x) retorna o valor absoluto de um número "x", tal qual:
// //     console.log(`You withdraw ${Math.abs(mov)}`);
// //   }
// // });

// // //Assim é o funcionamento do foreach

// // //0: function(200)
// // // 1: function (450)
// // //2: function (400)
// // //......

// // //----------144. forEach With Maps and Sets-----//

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // currencies.forEach(function (value, key, Map) {
// //   console.log(`${key}: ${value}`);
// // });
// // // USD: United States dollar
// // //  EUR: Euro
// // // GBP: Pound sterling

// // // Set ?

// // const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// // console.log(currenciesUnique);

// // // _ variavel descartavel

// // currenciesUnique.forEach(function (value, _, Map) {
// //   console.log(`${value}: ${value}`);
// // });

// // // ---------------Coding Challenge #1-------------

// // // Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// // // about their dog's age, and stored the data into an array (one array for each). For
// // // now, they are just interested in knowing whether a dog is an adult or a puppy.
// // // A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// // // old.
// // // Your tasks:
// // // Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// // // ('dogsJulia' and 'dogsKate'), and does the following things:
// // // 1. Julia found out that the owners of the first and the last two dogs actually have
// // // cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// // // ages from that copied array (because it's a bad practice to mutate function
// // // parameters)
// // // 2. Create an array with both Julia's (corrected) and Kate's data
// // // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// // // is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// // // �
// // // ")
// // // 4. Run the function for both test datasets
// // // Test data:
// // // § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// // // § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// // // Hints: Use tools from all lectures in this section so far �
// // // GOOD LUCK �

// // const Julia = [3, 5, 2, 12, 7];
// // const Kate = [4, 1, 15, 8, 3];
// // const checkDogs = function (dogsJulia, dogsKate) {
// //   const dogsJuliaCorrected = dogsJulia;

// //   //remove 1 elemento a partir do índice 0
// //   //(1,2 ) apagaria o 5,2
// //   //lembrar que começa a contar desde o indice começa no 0 e apaga um número ou seja o 0 o mesmo indice
// //   dogsJuliaCorrected.splice(0, 1); // b and c are deleted
// //   console.log(dogsJuliaCorrected);
// //   dogsJuliaCorrected.splice(-1, 1);
// //   console.log(dogsJuliaCorrected);

// //   const dogs = dogsJuliaCorrected.concat(dogsKate);

// //   // A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years

// //   // for (const [i, movement] of dogs.entries()) {
// //   //   if (movement > 3) {
// //   //     console.log(
// //   //       `Dog number ${i + 1} is an adult, and is ${movement} years old`
// //   //     );
// //   //   } else {
// //   //     console.log(
// //   //       `Dog number ${i + 1} is a puppy, and is ${movement} years old`
// //   //     );
// //   //   }
// //   // }

// //   //OU

// //   dogs.forEach(function (dog, i) {
// //     if (dog > 3) {
// //       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
// //     } else {
// //       console.log(`Dog number ${i + 1} is a puppy, and is ${dog} years old`);
// //     }
// //   });
// // };

// // checkDogs(Julia, Kate);

// // Coding Challenge #2
// // Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// // dog ages to human ages and calculate the average age of the dogs in their study.
// // Your tasks:
// // Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// // ages ('ages'), and does the following things in order:
// // 1. Calculate the dog age in human years using the following formula: if the dog is
// // <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// // humanAge = 16 + dogAge * 4
// // 2. Exclude all dogs that are less than 18 human years old (which is the same as
// // keeping dogs that are at least 18 years old)
// // 3. Calculate the average human age of all adult dogs (you should already know
// // from other challenges how we calculate averages �)
// // 4. Run the function for both test datasets
// // Test data:
// // § Data 1: [5, 2, 4, 1, 15, 8, 3]
// // § Data 2: [16, 6, 10, 5, 6, 1, 4]
// // GOOD LUCK �

// const dogAge = [5, 2, 4, 1, 15, 8, 3];

// console.log(dogAge);
// const calcAverageHumanAge = ages => {
//   const humanAge = ages.map(age => (age > 2 ? 16 + age * 4 : 2 * age));
//   console.log(humanAge);
//   return humanAge;
// };

// let newDogAge = calcAverageHumanAge(dogAge);
// console.log(newDogAge);
// const dogAgeFilters = newDogAge.filter(age => age > 18);

// console.log(dogAgeFilters);

// //Primeiro vai somar tudo , e logo é que divide
// // let averagedog =
// //   dogAgeFilters.reduce((acc, age) => acc + age, 0) / dogAgeFilters.length;

// //OU
// let averagedog = dogAgeFilters.reduce(
//   (acc, age, i, arr) => acc + age / arr.length,
//   0
// );
// console.log(averagedog);

// //Funçao com tudo junto
// /*
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);
// */

// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀

console.log(movements);
const calcAverageHumanAge = function (ages) {
  const average = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return average;
};

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

//   return average;
// };
