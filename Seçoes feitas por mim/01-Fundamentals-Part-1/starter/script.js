/*let js = "amazing";
let firstName = "Jonas";
console.log(firstName);

//camelCase : primeira palavra em minuscula, proxima palavra maiscula

// nao se pode começar o nome da variavel com número , nem com function, melhor nao usar o nome

// maiscula é para constantes

//ex:

let PI = 3.1415;
//nome das variaveis descritivos.

let myFirstJob = "Programmer";

//melhor que:

let job1 = "Programmer";

/*  Assigment: LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)


//let country = "Portugal";
//let continent = "Europe";
let population = "10"

//2. Log their values to the console
//console.log(country, continent, population);
//ou

//console.log(country);
//console.log(continent);
//console.log(population);

//Data Types:

//primitive data types:

//1. number: used for decimals and integers. 
let age = 23;
//2. string: used for text 
let secondName = "Jonas";
//3. boolean used for taking decisions true or fale:
let fullAge = true;

//4. undefined: value taken by a variable that is not yet defined ("empty value") 
let children;

//5. Null: Also means "empty Value"
//6. symbol: value that is unique and cannot be changed

//7. bigInt: larger integers than the number type can hold

//JavaScript has dynamic typing: n precisa de definir o tipo de data

//value has typeof, not Variable! , posteriormente em nosso codigo um a variavel x pode ser um númro e depois uma string em jS

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
//operador para saber o tipo desse valor
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

// dinamic typing exemplo : posteriormente em nosso codigo um a variavel x pode ser um númro e depois uma string em jS, exemplo:
javaScriptIsFun = "Yes!";
console.log(typeof javaScriptIsFun);

//undefined exemplo:
let year;
//value: undefined
console.log(year);
// tipo de valor: undefined
console.log(typeof year);

//agora atribuimos um novo valor , costumava ser indefinido
year = 1991;
//agora o tipo é number
console.log(typeof year);
// erro do js, deveria retornar null por isso cuidado pq retorna object
console.log(typeof null);

// Assigment: LECTURE: Data Types

/*1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console

//1.
//let isIsland = true;
let language;

//2.
//console.log(typeof isIsland);
//console.log(typeof population);
//console.log(typeof country);
//console.log(typeof language);



//13. let, const and var

//let age = 30;
//age = 31;

//a variavel const nao pode ser alterada exemplo:

const birthYear = 1991;
//birthYear = 1990; n funciona

//const n podem estar empty

// boa pratica escrever const , quando a variavel nunca vai mudar por exemplo a data de nascimento.

//sempre usar const e só usar let quando tiver a certeza que esse valor vai mudar!!! pq pode causar bugs os lets

//nunca usar var,  e sempre declarar variavel

/* Assignment: LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens

//1.

language = "Portuguese"
const country = 'Portugal';
const continent = 'Europe';
const isIsland = true;
//isIsland = false; Error : Cannot access 'isIsland' before initialization


//14. Basic Operators


//operador nos permite transformar ou combinar varios valores 

//math operators

const now = 2037; // para n repetir anos
//const ageJonas = 2037 - 1991;
//const ageSarah = 2037 - 2018;

const ageJonas = now - 1991;
const ageSarah = now - 2018;

//console.log de varias variaveis
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// operador plus para concatenar diferentes strings

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName)

//operador typeof

console.log(typeof lastName);

// operador = e + 
//assignment operators
let x = 10 + 5; //15
console.log(x);
x += 10; // x = x + 10 = 25
console.log(x);
x *= 4; // x = x * 4 = 100
console.log(x);
x++; // x = x + 1
console.log(x);
x--; // x = x - 1;
console.log(x);
x--;
console.log(x);

//comparison operators

console.log(ageJonas > ageSarah); // true
// > , < , >= , <=
console.log(ageSarah >= 18); // true 

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
// primero faz as operaçoes todas e logo compara


/* Assignment LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'

//1.

console.log("half of population: " + population / 2);
//2.
console.log("population + 1: " + population + 1)
//3.
console.log(population > 6) //false
//4.
console.log(population < 33) //true

//5.

const description = country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;
console.log(description);

// 15. operator precedence
*/
// podemos declarar 2 variaveis numa linha

let x, y;

x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
//const averageAge = ageJonas + ageSarah / 2 //error
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);
console.log(averageAge);

//16. coding challenge
/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK  */

// let por causa do data2
/*let markMass, markHeight, johnMass, johnHeight, johnBMI, markBmi, markHigherBMI;

markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

markBmi = markMass / markHeight ** 2;
console.log(markBmi);
johnBMI = johnMass / johnHeight * johnHeight;
console.log(johnBMI);
markHigherBMI = markBmi > johnBMI;
console.log(typeof markHigherBMI);
console.log(markHigherBMI);

console.log("Data2")

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBmi = markMass / (markHeight ** 2);
console.log(markBmi);
johnBMI = johnMass / (johnHeight ** 2);
console.log(johnBMI);
markHigherBMI = markBmi > johnBMI;
console.log(typeof markHigherBMI);
console.log(markHigherBMI);
*/
//17. string and template literals

const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

// literal modelo usamos crases para facilitar o uso da string com variaveis
//shift + esqueda do enter

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
//tambem podemos usa crases para string normais
console.log(`Just a regular string...`);

// string varias linhas

console.log("String with \n\
multiple \n\
lines");

// uso das crases também para isto mais clean sem os \n\
console.log(`String
multiple
lines`);

/*LECTURE: Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax*/

//1.
const language = "Portuguese";
const country = "Portugal";
const continent = "Europe";
let population = "10";

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

//18. taking decisions: if/else statements

const age = 19;
const age2 = 15;
//const isOldEnough = age >= 18;

//emoji windows + .
if (age2 >= 18) {
  console.log("Sarah  can start driving license 🚗");
} else {
  const yearsleft = 18 - age2;
  console.log(`Sarah is too young. waith another ${yearsleft} years 😁 `);
}

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

/*Assignment LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original*/

//population = 50;
if (population > 33) {
  console.log(`${country} population is above average`);
} else {
  console.log("'Portugal's population is 22 million below average'");
}

//19. Coding challenge #2
/*Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �*/

let markMass, markHeight, johnMass, johnHeight, johnBMI, markBmi, markHigherBMI;

markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

markBmi = markMass / markHeight ** 2;
console.log(markBmi);
johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);
console.log(typeof markHigherBMI);
console.log(markHigherBMI);

if (markBmi > johnBMI) {
  console.log("Mark's BMI is higher than John's!");
  console.log(
    `Mark's BMI:  (${markBmi}) is higher than John's BMI: (${johnBMI})!`
  );
} else {
  console.log("John's BMI is higher than Mark's!");
  console.log(
    `John's BMI:  (${johnBMI}) is higher than Mark's BMI: (${markBmi})!`
  );
}

//20. type conversion an coercion

// type conversion: é quando convertemos manualmente de um tipo para outro

const inputYear = "1991";
console.log(inputYear + 18);
//esto vai unir a string a saida é (199118)
console.log(Number(inputYear), inputYear); // converter string para number
// se a string nao é um número aparece um NaN

console.log(Number(inputYear) + 18);

// convert number to string

console.log(String(23), 23);

// type coercion = ocorre quando o javascript converte automaticamente para nós
console.log("I am" + 23 + "years old");
// se nao tinhamos a coercion tinhamos que fazer assim:
console.log("I am" + String(23) + "years old");

// o + concatena strings
console.log("23" + "10" + 3);

// o -  converte  strings to numbers
console.log("23" - "10" - 3);

// o * converte em número
console.log("23" * "2");

// o / converte em número
console.log("23" / "2");

let n = "1" + 1; // 11 pq é +
n = n - 1; //  11 - 1 = 10
console.log(n);

let p = 2 + 3 + 4 + "5"; // retorna uma string "95"

let e = "10" - "4" - "3" - 2 + "5"; // retorna 15

/*LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right**/

//a) 4
//b) "617"
//c) 23
//d ) false
//e) "114" + 9= "1149" - 4 = 1145 - 2 = 1143

//21. truthy and falsy values

//falsy values: sao valores que nao sao exatamente falsos, mas se tornarao falsos quando tentarmos converte-los em um booleano

//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas")); // nao é uma string vazia = true
console.log(Boolean({}));

//const money = 0; //false
const money = 1; //true
// o js tenta converter qualquer coisa dentro do if para um booleano com o truty o u falsy
// se o money é 0 , converte para  false
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

//  verificar

let height; //undefined : falsy value

if (height) {
  console.log("height is defined");
} else {
  console.log("height is undefined");
}

//22. equality operators: == vs ===

//const age1 = 18;
const age1 = "18"; // só vai dar true o loose
// se só temos uma linha no if nao é preciso criar chavetas

//o === e se sao estritamente iguais
if (age1 === 18) console.log("you just became an adult :D (strict)");
if (age1 == 18) console.log("you just became an adult :D (loose)");
// o === n faz coercao do type
// o == sim faz

// o == faz coercao
//ou seja o "18" sera convertido num número
if (age1 == "18") console.log("you just became an adult :D part 2");

//age 1 === "18" da false

// boa pratica sempre evitar o ==

//para pedir um valor a pagina web = prompt
/*const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
}
else {
    console.log('Number is not 23 or 7')
}

//versao estrita : !==
if (favourite !== 23) console.log('Why not 23?');
*/

/*  Assigment: LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation*/

// const numNeighbours = Number(prompt('How many neighbour countries does your country have ? '));

// if (numNeighbours === 1) {
//     console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// }
// else {
//     console.log('No borders')
// }

// //24. Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision); // true

// console.log(hasDriversLicense || hasGoodVision); // true

// console.log(!hasDriversLicense); // false

// //ctrl + k + c para comentar tudo
// //ctrl + k + u para tirar o comentario

// // if (shouldDrive) {
// //     console.log('Sarah is able to drive!')
// // } else {
// //     console.log('Someone else should drive...')
// // }

// const isTired = true; // C

// console.log(hasDriversLicense || hasGoodVision || isTired)
// console.log(hasDriversLicense && hasGoodVision && isTired)

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }

// // LECTURE: Logical Operators
// // 1. Comment out the previous code so the prompt doesn't get in the way
// // 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// // country that speaks english, has less than 50 million people and is not an
// // island.
// // 3. Write an if statement to help Sarah figure out if your country is right for her.
// // You will need to write a condition that accounts for all of Sarah's criteria. Take
// // your time with this, and check part of the solution if necessary.
// // 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// // not, log 'Portugal does not meet your criteria :('
// // 5. Probably your country does not meet all the criteria. So go back and temporarily
// // change some variables in order to make the condition true (unless you live in
// // Canada :D)

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

//25. Coding challenge #3

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK �

const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 123) / 3;
console.log(averageScoreDolphins, averageScoreKoalas);
if (averageScoreDolphins >= 100 || averageScoreKoalas >= 100) {
  if (averageScoreDolphins > averageScoreKoalas) {
    console.log("Dolphin win the trophy");
  } else if (averageScoreDolphins < averageScoreKoalas) {
    console.log("Koala win the trophy");
  } else {
    console.log("Both win the trophy");
  }
} else {
  console.log("No one wins the trophy");
}

//26. the switch statement

//break: é para quebrar o codigo sair do switch!

const day = "wednesday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case " thursay":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend ");
    break;
  default:
    console.log("Not a valid day!");
}

// LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

const language1 = "mandarin";

switch (language1) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

//27. statements and expressions

// expression: produz um valor
//ex:
3 + 4;
1991;
true && false && !false;

// statements : nao produzem um valor, sao açoes
//ex:
if (23 > 10) {
  const str = "23 is bigger";
}

//28. the conditional (ternary) operator

const age3 = 23;

age3 >= 18
  ? console.log("I like to drink wine")
  : console.log("I like t drink water");

// uma linha de codigo
const drink = age3 >= 18 ? "wine" : "water";
console.log(drink);

// 6 linhas de código
let drink2;

if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
// melhor para deciçoes rapidas, n pode ser um substituto de um if/else
console.log(`I like to drink ${age3 >= 18 ? "wine" : "water"}`);

// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

population = 130;
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �
// GOOD LUCK �

let tip, bill;

bill = 275;

tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

// console.log(
//   ` The bill was ${bill}, the tip was ${
//     bill >= 50 && bill <= 300 ? (tip = 0.15 * bill) : (tip = 0.2 * bill)
//   } and the total value ${bill + tip}`
// );

console.log(
  ` The bill was ${bill}, the tip was ${tip}, and the total value ${
    bill + tip
  } `
);
