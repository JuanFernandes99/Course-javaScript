//modo estrito , é um modo especial de javascript que torna mais facil escrever um código javaScript seguro (para evitar errores (nos proibe fazer certas coisas, e cria bugs que pderia ignorar))

// tem que ser a primeira linha de código
"use strict";

// let hasDriversLicense = false;
// const passTest = true;
// // com o modo strict aparece na consola : Uncaught ReferenceError: hasDriverLicense is not defined , sem ele nao
// //if (passTest) hasDriverLicense = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio"; //Unexpected strict mode reserved word

// const private = 534; // Unexpected strict mode reserved word

//video 33. functions

//functions: é um pedaço de código que podemos repetir em varios lugares do código

// function logger() {
//   console.log("My name is Juan");
// }
// // Chamar a funçao/invocar
// logger();
// logger();
// logger();

// //parametros (dados de entrada da funçao)
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //Assignment
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

// function describeCountry(country, population, capitalCity) {
//   const string = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return string;
// }

// const finland = describeCountry("Finland", 10, "Helsinki");
// const portugal = describeCountry("Portugal", 6, "Lisboa");
// const venezuela = describeCountry("Venezuela", 4, "Caracas");

// console.log(`${finland},
//  ${portugal},
//  ${venezuela}`);

//34. Function declarations vs expressions

// //function declaration
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);
// console.log(calcAge1(1999));

// //function expression

// // a principal diferença é que na function expression para chamar a funçao já devemos ter declarada a funçao e no declaration nao
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const age2 = calcAge2(2000);

// console.log(age1, age2);

// é melhor as function expression por que obriga a declarar a funçao primeiro e fica melhor no código

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

// const percentageOfWorld1 = function (populationValue) {
//   return (populationValue / 7900) * 100;
// };

// const china = percentageOfWorld1(1441);
// const portugal = percentageOfWorld1(50);
// const venezuela = percentageOfWorld1(15);

// console.log(`${china},
// ${portugal},
// ${venezuela}`);

// const percentageOfWorld2 = function (populationValue) {
//   return (populationValue / 7900) * 100;
// };

// const mexico = percentageOfWorld2(1441);

// console.log(`${mexico}`);

//35 Arrow functions

// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }
// //no precisamos das chavetas nem do return, se é uma linha de codigo;
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Juan"));
// console.log(yearsUntilRetirement(1991, "Pedro"));

// // //Assignment
// // 1. Recreate the last assignment, but this time create an arrow function called
// // 'percentageOfWorld3'

// const percentageOfWorld3 = (populationValue) => (populationValue / 7900) * 100;

// // console.log(percentageOfWorld3(2000));

// //36. Functions calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// // Assignment
// // 1. Create a function called 'describePopulation'. Use the function type you
// // like the most. This function takes in two arguments: 'country' and
// // 'population', and returns a string like this: 'China has 1441 million people,
// // which is about 18.2% of the world.'
// // 2. To calculate the percentage, 'describePopulation' call the
// // 'percentageOfWorld1' you created earlier
// // 3. Call 'describePopulation' with data for 3 countries of your choice

// const describePopulation = function (country, population) {
//   return `${country} has ${population} million people, wich is about ${percentageOfWorld3(
//     population
//   )}% of the world`;
// };

// console.log(describePopulation("venezuela", 1441));

// //37. reviewing functions
// // os parametros sao variaveis locais de cada funçao
// //Ctrl + D para selecionar todos os iguais
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement(1991, "Juan"));
// console.log(yearsUntilRetirement(1950, "Mike"));

//38. Coding Challenge
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �
// GOOD LUCK �

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgDolhins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// const avgDolhins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolhins, avgKoalas) {
//   if (avgDolhins > avgKoalas * 2) {
//     return `Dolphins win (${avgDolhins} vs ${avgKoalas})`;
//   } else if (avgDolhins * 2 < avgKoalas) {
//     return `Koalas win (${avgKoalas} vs ${avgDolhins})`;
//   } else {
//     return "Nobody wins";
//   }
// };

// console.log(checkWinner(avgDolhins, avgKoalas));
// console.log(checkWinner(avgDolhins2, avgKoalas2));

//39.Introduction to arrays

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// //const years = new Array(1991, 198, 2008, 2020);

// console.log(friends[0]);

// //contar elementos do array
// console.log(friends.length);
// //console.log(friends[friends.length]); //undefined
// // pq o length n começa em 0
// console.log(friends[friends.length - 1]);

// //atribuir outro valor
// //Array nao é um valor primitivo, assim que podemos mudar os valores do array aunque esteja const
// friends[2] = "Jay";
// console.log(friends);

// // mas n esta permitido mudar o valor todo do array

// //friends = ['Bob, 'Alice]; // da erro
// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge1 = function (birthYear) {
//   return 2022 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// //console.log(calcAge1(years)); //NaN pq estamos tentar introducir um array inteiro, e só está a espera de um valor

// const age1 = calcAge1(years[0]);
// const age2 = calcAge1(years[1]);
// const age3 = calcAge1(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge1(years[0]),
//   calcAge1(years[1]),
//   calcAge1(years[years.length - 1]),
// ];

// console.log(ages);

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

// const populations = [10, 1441, 332, 83];

// console.log(populations.length === 4);

// const percentageOfWorld1 = function (populationValue) {
//   return (populationValue / 7900) * 100;
// };
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[populations.length - 1]),
// ];

// console.log(percentages);

// // 40. Basic Array Operations (Methods)

// const friends = ["Michael", "Steven", "Peter"];

// //push adiciona elementos ao array
// friends.push("Jay");
// //const newLength = friends.push("Jay"); // opçao para saber o novo comprimento , tambem´pode ser usado n unshif
// console.log(friends);

// // adiciona um novo elemento no inicio do array
// friends.unshift("John");
// console.log(friends);

// //remove elements

// friends.pop(); // Last element of array (remove)
// const popped = friends.pop(); // retorna o elemento apagado
// console.log(popped);
// console.log(friends);

// friends.shift(); // remove first element of array
// console.log(friends);

// console.log(friends.indexOf("Steven")); // index de um determinado elemento
// console.log(friends.indexOf("Bob")); // index de um determinado elemento // retorna um -1 se n encontra o elemento
// friends.push(23);
// console.log(friends.includes("Steven")); // true se no array tem um Steven
// console.log(friends.includes("Bob")); // true se no array tem um bob , se nao false
// console.log(friends.includes("23")); //false
// console.log(friends.includes(23)); //true

// if (friends.includes("Peter")) {
//   console.log("You have a friend called Peter");
// }

//Assignment

// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

// //1.
// const neighbours = ["Venezuela", "Portugal"];
// console.log(neighbours);

// //2.
// neighbours.push("Utopia");

// console.log(neighbours);
// //3.
// neighbours.pop(); // last

// console.log(neighbours);

// //4.
// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }
// //5.
// neighbours[neighbours.indexOf("Venezuela")] = "Republic of Venezuela";

// console.log(neighbours);

// //41. Coding Challenge #2

// // Coding Challenge #2
// // Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// // the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// // 20%.
// // Your tasks:
// // 1. Write a function 'calcTip' that takes any bill value as an input and returns
// // the corresponding tip, calculated based on the rules above (you can check out
// // the code from first tip calculator challenge if you need to). Use the function
// // type you like the most. Test the function using a bill value of 100
// // 2. And now let's use arrays! So create an array 'bills' containing the test data
// // below
// // 3. Create an array 'tips' containing the tip value for each bill, calculated from
// // the function you created before
// // 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// // Test data: 125, 555 and 44

// //1.
// let bill = 100;

// let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

// console.log(
//   ` The bill was ${bill}, the tip was ${tip}, and the total value ${
//     bill + tip
//   } `
// );

// const calcTip = function (billValue) {
//   let tip =
//     billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
//   return tip;
// };
// //2.
// const bills = [125, 555, 44];

// //3.
// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1]),
// ];
// console.log(tips);

// //4.
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total);

// //42. Introduction to Objects

// // em arrays no podemos dar nomes aos elementos, por isso é utilizado os objects
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// // o object tem cinco propriedades
// // const jonas = {
// //   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// // Assignment
// // 1. Create an object called 'myCountry' for a country of your choice, containing
// // properties 'country', 'capital', 'language', 'population' and
// // 'neighbours' (an array like we used in previous assignments)

// const myCountry = {
//   country: "Venezuela",
//   capital: "Caracas",
//   Language: "Spanish",
//   population: 30,
//   neighbours: ["Colombia", "Brasil"],
// };

//43. Dot vs. Bracket Notation

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";

// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );

// console.log(jonas.interestedIn); // undefined
// console.log(jonas.job); // undefined
// // se vamos utilizar uma variavel, tem que ser com brackets
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@juandosr";
// console.log(jonas);

// //Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// Assignment
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

// const myCountry = {
//   country: "Venezuela",
//   capital: "Caracas",
//   Language: "Spanish",
//   population: 30,
//   neighbours: ["Colombia", "Brasil"],
// };

// //1.

// console.log(
//   `${myCountry.country} has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

// //2.
// myCountry.population += 2;

// console.log(myCountry.population);

// myCountry["population"] -= 2;

// console.log(myCountry["population"]);

//44. Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //melhor this por se modificamos o nome do objeto
  //   calcAge: function () {
  //    // console.log(this);
  //     return 2037 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSumarry: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's License. `;
  },
};

//this é quem chama o metodo isso aponta para o jonas
console.log(jonas.calcAge());

console.log(jonas);

// Challenge
//"Jonas is a 46-year old teacher, and he has a/ driver's license "

console.log(jonas.getSumarry());

//Assignment
// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring ccountries, and false if
// there are. Use the ternary operator to set the property.

const myCountry = {
  country: "Venezuela",
  capital: "Caracas",
  Language: "Spanish",
  population: 30,
  neighbours: ["Colombia", "Brasil"],

  //   describe: function () {
  //     return `${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  //   },
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

//45. Coding Challenge #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK �

const calcBmi = function (mass, height) {
  return mass / height ** 2;
};
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  //2.
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.mass / this.height ** 2;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  //2.
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.mass / this.height ** 2;
  },
};

mark.calcBmi();
john.calcBmi();
console.log(mark.bmi);
console.log(john.bmi);
//3.

//.bmi pq já esta criado

//Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(
    `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})`
  );
} else if (mark.bmi < john.bmi) {
  console.log(
    `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})`
  );
} else {
  console.log("BMI IGUAIS");
}

//46. iteration: the for loop

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// //Assignment
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

//47. Looping Arrays, Breaking and Continuing

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];
// const types = [];
// //i = 0 pq é um array
// for (let i = 0; i <= jonasArray.length - 1; i++) {
//   //Reading from jonas array
//   console.log(jonasArray[i], typeof jonasArray[i]);

//   //Filling types array
//   // types[i] = typeof jonasArray[i];
//   //  console.log(types[i]);
//   types.push(typeof jonasArray[i]); // melhor que a anterior mais clean
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];

// const ages = [];

// for (let i = 0; i <= years.length - 1; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break

// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < jonasArray.length - 1; i++) {
//   // SE É UMA STRING CONTINUA SE NAO, NAO

//   if (typeof jonasArray[i] !== "string") continue;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < jonasArray.length - 1; i++) {
//   //break quando encontra um número
//   if (typeof jonasArray[i] === "number") break;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// Assignment
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is

const populations = [10, 1441, 332, 83];
const percentages2 = [];

const percentageOfWorld1 = function (populationValue) {
  return (populationValue / 7900) * 100;
};

for (let i = 0; i <= populations.length - 1; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

//48. Looping Backwards and Loops in Loops
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// 0 , 1 ..., 4
// 4, 3, ... , 1

//loop backwards
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

// Assignment
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway �

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}

//49. The while Loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1; // para tirar o número decimal .trunc
console.log(dice);

//Loop sem contador melhor usar o while, quando n sabemos quantas interaçoes vai ter
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

// Assignment
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);

//Coding Challenge #4

// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK �

//1.
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//2.
const tips = [];
const totals = [];

//3.
const calcTip = function (billValue) {
  let tip =
    billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;

  return tip;
};

const calcTotal = function (billValue, tipValue) {
  let total = billValue + tipValue;
};

for (let i = 0; i <= bills.length - 1; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i], calcTip(bills[i]));
}

console.log(tips);
console.log(totals);

//Bonus

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
