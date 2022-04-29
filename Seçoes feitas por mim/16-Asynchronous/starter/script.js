'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////////////
//Maneira antiga
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //send request
// request.send();

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request); //Promise {<pending>}

const renderCountry = function (data, className) {
  console.log(data.flags.png);
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

////////////////////////////////////262. Consuming Promises with Async/Awai----------------
//Então, uma função que basicamente continuará em execução em segundo plano enquanto executa o código que está dentro dela, quando essa função for concluída, ela retornará automaticamente uma premissa,

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     // temos que tratar os erros manualmente, pq o try catch só apanha o erro se nao tem net

//     if (!resGeo.ok) throw new Error('Problem getting location data');

//     const dataGeo = await resGeo.json();
//     console.log(dataGeo.country);

//     // Country data
//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     // // BUG in video:
//     // // if (!resGeo.ok) throw new Error('Problem getting country');

//     // // FIX:
//     // if (!res.ok) throw new Error('Problem getting country');

//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);
//   }
// };
/////264. Returning Values from Async Functions///
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    // temos que tratar os erros manualmente, pq o try catch só apanha o erro se nao tem net

    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo.country);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    // // BUG in video:
    // // if (!resGeo.ok) throw new Error('Problem getting country');

    // // FIX:
    // if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    //Reject promise returned from async function

    throw err;
  }
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city); //retorna um promise

//ainda é executado por isso ainda aparece undefined e nao o catch , aconteceu um erro, e apromessa que retorna ainda foi cumprida, por isso usamos //Reject promise returned from async function // throw err;

// se nao aparecia o then como se fosse cumprida e aparecia o 2: undefined

// IIFE , expressoes de funçao imediatamente invocadas

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💣`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    // Geolocation
    const city = await whereAmI();

    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💣`);
    //Reject promise returned from async function

    throw err;
  }
  console.log('3: Finished getting location');
})();

countriesContainer.style.opacity = 1;

//////////////////////////265. Running Promises in Parallel/////////////////////////////

const get3Countries = async function (c1, c2, c3) {
  try {
    //nao faz sentido pq nao depemdem entre si
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital[0]));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'venezuela');

// const whereAmI = async function () {
//   try {
//     //Então, basicamente, await necesita uma promise e  irá parar a execução da decodificação neste ponto da função até que a premissa seja cumprida.
//     //Geolocation
//     const pos = await getPosition();

//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     //Country data
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(err);
//     renderCountry(`Something went wrong 💣 ${err.message}`);
//   }
// };
// whereAmI();
console.log('FIRST');

////////////////263. Error Handling With try...catch///////////////////////////////////////////

try {
  let y = 1;
  const x = 2;
  y = 3;
} catch (err) {
  alert(err.message);
}

// = pero o de emcima é mais elegante
// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res =>
//   console.log(res)
// );

// const getCountryAndNeighbour = function (country) {
// Country 1

/////////////////////////////////////////////////////////////////////////
//////The Event Loop in Practice//////////////////////

//primero os dois sincronos
// segundo a promesa pq tem a fila de microtarefas e tem prioridade
// ultimo o timer aunque tinha acabado antes que o promise
// console.log('Test start'); //1
// setTimeout(() => console.log('0 Sec timer'), 0); //5 (ultimo) // ver que nao se cumple 0secs pela prioridade
// Promise.resolve('Resolved promise 1').then(res => console.log(res)); //3

// // Promise.resolve('Resolved promise2').then(res => {
// //   //4
// //   for (let i = 0; i < 10000; i++) {
// //     console.log(res);
// //   }
// // });

// //Só depois de acabar o promise é que vai o setimeout, pela prioridade podemos ver a espera no console.log
// console.log('Test end'); //2
// /////////////////////////////////////////////////////////////////////////
// //////Building a Simple Promise//////////////////////

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('YOu win 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //Promisifying setTimeout

// const wait = function (seconds) {
//   // n é preciso especificar o reject parameter pq um timer nunca falha
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second'));

// wait(2)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('5 second passed');
//     return wait(1);
//   });

//  codigo assincrono
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).catch(x => console.error(x));

/////////////////////////////////////////////////////////////////////////
/////////////////////////Promisifying the Geolocation AP////////////////

// o codigo nao esta bloqueado, e é assincrono
//web api esta a tratar por isso vai a segunda linha

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// // console.log('Getting positions');
// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };
// btn.addEventListener('click', whereAmI);
/////////////////////////////////////////////////////////////////////////
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//       // se nao tem borders?
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     //pq o valor de emcima está a devolver uma promessa
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.log(`${err} 🤢🤢`);
//       renderError(`Something went wrong 🤢🤢 ${err.message}. Try again! `);
//     })
//     //Finally sempre acontece se for cumpida ou nao
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

//lat: latitude
//lng: longitude
//         if (!response.ok)
//           //throw vai interrumpir a funçao até o retorno e vai ir para o catch , e vai propagarse por todo o resto do código como uma promesa falhida até hegar ao catch
//           throw new Error(`Country not found ${response.status}`);

//         return response.json();
//       } //new promise
//     )
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//       // se nao tem borders?
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     //pq o valor de emcima está a devolver uma promessa
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.log(`${err} 🤢🤢`);
//       renderError(`Something went wrong 🤢🤢 ${err.message}. Try again! `);
//     })
//     //Finally sempre acontece se for cumpida ou nao
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

/////////////////////////////////////////////////////////////
// const getCountryAndNeighbour = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       response => {
//         console.log(response);

//         if (!response.ok)
//           //throw vai interrumpir a funçao até o retorno e vai ir para o catch , e vai propagarse por todo o resto do código como uma promesa falhida até hegar ao catch
//           throw new Error(`Country not found ${response.status}`);

//         return response.json();
//       } //new promise
//     )
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//       // se nao tem borders?
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     //pq o valor de emcima está a devolver uma promessa
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.log(`${err} 🤢🤢`);
//       renderError(`Something went wrong 🤢🤢 ${err.message}. Try again! `);
//     })
//     //Finally sempre acontece se for cumpida ou nao
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryAndNeighbour('portugal');
// });

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     //devolve uma promessa e por isso  chamamos ao then()
//     .then(function (response) {
//       console.log(response);
//       return response.json(); //new promise
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

///////////////////////////////////////

//Solicitaçao XML HTTP (mais antiga)

// const renderCountry = function (data, className) {
//   //para ter o objeto desestruturamos ([data])

//   //   console.log(Object.values(data.currencies)[0]);
//   //   console.log(Object.values(data.currencies)[0].name);

//   const html = `
//         <article class="country ${className}">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${
//               Object.values(data.languages)[0]
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               Object.values(data.currencies)[0].name
//             }</p>
//           </div>
//         </article>
//         `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   //send request
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);
//     // console.log(this.responseText);

//     //Get neighbour country (2)
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     //AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     //send request
//     request2.send();
//     //temos um pedido que depende de outro
//     //sempre vai aparecer primeiro o request1 , e se nao como saberiamos qual era o pais vizinho
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       // Render country 1
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// ///////////////////////////////////////////////////////////////////////////////////////////////////

// //Callback hell má pratica pq deixa o codigo confuso por isso utilizamos as promessas

// // codigo assincrono
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// // const getCountryData = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   //send request
// //   request.send();
// //   console.log(request.responseText);

// //   request.addEventListener('load', function () {
// //     console.log(this.responseText);

// //     //para ter o objeto desestruturamos ([data])
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     console.log(Object.values(data.currencies)[0]);
// //     console.log(Object.values(data.currencies)[0].name);
// //     //To fixed é para uma casa decimal
// //     const html = `
// //     <article class="country">
// //       <img class="country__img" src="${data.flags.png}" />
// //       <div class="country__data">
// //         <h3 class="country__name">${data.name.common}</h3>
// //         <h4 class="country__region">${data.region}</h4>
// //         <p class="country__row"><span>👫</span>${(
// //           +data.population / 1000000
// //         ).toFixed(1)} people</p>
// //         <p class="country__row"><span>🗣️</span>${
// //           Object.values(data.languages)[0]
// //         }</p>
// //         <p class="country__row"><span>💰</span>${
// //           Object.values(data.currencies)[0].name
// //         }</p>
// //       </div>
// //     </article>
// //     `;

// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// //podem trocar a ordem, pq pode ser que os dados cheguem em diferentes momentos
// getCountryAndNeighbour('usa');
// // getCountryData('venezuela');
// // getCountryData('germany');

/////////////////// Coding Challenge #1///////////////////
// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time �
// Your tasks:
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating �
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message
// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)

// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474

//OPTIMIZED

// const whereAmI = function (lat, lng) {
//   //Country by lat and lng
//   getJSON(`https://geocode.xyz/${lat},${lng}?geoit=json`, 'Problem with server')
//     .then(data => {
//       return getJSON(
//         `https://restcountries.com/v3.1/name/${data.country}`,
//         'Country not found'
//       );
//     })
//     //Country by name of country
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error('No neighbour found!');
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     //Neighbour country
//     .then(data => {
//       renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       renderError(`Something went wrong 🤢🤢 ${err.message}. Try again! `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   whereAmI('52.508', '13.381');
//   whereAmI(' 19.037', '72.873');
//   whereAmI('-33.933', '18.474');
// });

//OLD

// const whereAmI = function (lat, lng) {
//   //Country by lat and lng
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Problem with server ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       //Then, using this data, log a
//       // message like this to the console: “You are in Berlin, Germany”
//       console.log(`You are in ${data.state}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       console.log(data);
//       if (!neighbour) throw new Error('No neighbour found!');
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       console.log(`${err.message} 🤢🤢`);
//       renderError(`Something went wrong 🤢🤢 ${err.message}. Try again! `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   whereAmI('52.508', '13.381');
//   whereAmI(' 19.037', '72.873');
//   whereAmI('-33.933', '18.474');
// });

// Coding Challenge #2
// For this challenge you will actually have to watch the video! Then, build the image
// loading functionality that I just showed you on the screen.
// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by
// yourself. Pretend you're working on your own �
// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input.
// This function returns a promise which creates a new image (use
// document.createElement('img')) and sets the .src attribute to the
// provided image path
// 2. When the image is done loading, append it to the DOM element with the
// 'images' class, and resolve the promise. The fulfilled value should be the
// image element itself. In case there is an error loading the image (listen for
// the'error' event), reject the promise
// 3. If this part is too tricky for you, just watch the first part of the solution
// PART 2
// 4. Consume the promise using .then and also add an error handler
// 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
// function we created earlier
// 6. After the 2 seconds have passed, hide the current image (set display CSS
// property to 'none'), and load a second image (Hint: Use the image element
// returned by the 'createImage' promise to hide the current image. You will
// need a global variable for that �)
// 7. After the second image has loaded, pause execution for 2 seconds again
// 8. After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong
// image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
// otherwise images load too fast
// GOOD LUCK �

// if/else (conditionals) are synchronous, which means if we have:

// if (condition1) {} else {}
// if (condition2) {} else {}
// condition2 to will always be resolved after condition1, condition2 has to wait for condition1 to finish

// with promises (which are asynchronous), condition2 might be resolved before condition1 (if condition1 takes longer).

// there are many practical usages, promises are very useful for something takes a “long” time. Like fetching data from an API/back-end. This takes “long”, a request has to be made to the server, request has to be processed and a response has to be send

// you do not want this operation to be blocking operation, so that the rest of your application/website has to wait for this.

// const wait = function (seconds) {
//   // n é preciso especificar o reject parameter pq um timer nunca falha
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImage;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     console.log('Image 3 loaded');
//     return wait(2);
//   })
//   .catch(err => console.error(err));

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('YOu win 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
