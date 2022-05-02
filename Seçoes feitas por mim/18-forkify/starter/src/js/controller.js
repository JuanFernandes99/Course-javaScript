import * as model from './model.js';
import recipeView from './views/recipeView.js';
//lembrar que o que envia o parcel é o ficheiro dist por isso temos que ter em conta
import searchView from './views/searchView.js';
//nao devemos ter nenhum elemento da Dom no controller
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const { async } = require('regenerator-runtime');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    // o hash é o #...id
    const id = window.location.hash.slice(1);
    //slice pq o id começa em # e assim vem do api

    console.log(id);

    //modern way pq a primeira vez n temos id no url
    if (!id) return;
    recipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    //1) Loading recipe

    // a receita é carregada e armazena no objeto de estado , está funçao la buscamos do model
    await model.loadRecipe(id);

    //2) Rendering recipe
    // esse model.state.recipe e o que acabams de receber da linha de emcima e logo esses dados sao pasados para a funçao render
    console.log(model.state.recipe);
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    console.log(resultsView);
    // 1 ) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    //2) Load search results
    await model.loadSearchResults(query);

    //3) Render results
    // console.log(model.state.search.results);
    // resultsView.render(model.state.search.results);
    // console.log(model.getSearchResultsPage());
    resultsView.render(model.getSearchResultsPage(2));

    // 4) Render initial pagination buttons

    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  //1) Render New results
  // console.log(model.state.search.results);
  // resultsView.render(model.state.search.results);
  // console.log(model.getSearchResultsPage());
  resultsView.render(model.getSearchResultsPage(goToPage));

  //2) Render New pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);
  console.log('entre');
  //Update the recipe view
  //recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
