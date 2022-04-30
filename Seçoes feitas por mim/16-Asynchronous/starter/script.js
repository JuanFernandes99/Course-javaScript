'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//Solicitaçao XML HTTP (mais antiga)

const renderCountry = function (data) {
  //para ter o objeto desestruturamos ([data])

  //   console.log(Object.values(data.currencies)[0]);
  //   console.log(Object.values(data.currencies)[0].name);

  const html = `
        <article class="country">
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
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  //send request
  request.send();
  console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);
    console.log(this.responseText);

    //Get neighbour country (2)
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    //AJAX call country 2
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    //send request
    request.send();
  });
};

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   //send request
//   request.send();
//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     console.log(this.responseText);

//     //para ter o objeto desestruturamos ([data])
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     console.log(Object.values(data.currencies)[0]);
//     console.log(Object.values(data.currencies)[0].name);
//     //To fixed é para uma casa decimal
//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${
//           Object.values(data.languages)[0]
//         }</p>
//         <p class="country__row"><span>💰</span>${
//           Object.values(data.currencies)[0].name
//         }</p>
//       </div>
//     </article>
//     `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

//podem trocar a ordem, pq pode ser que os dados cheguem em diferentes momentos
getCountryAndNeighbour('portugal');
// getCountryData('venezuela');
// getCountryData('germany');
