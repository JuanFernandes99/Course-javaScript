import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJson } from './helper';
import { RES_PER_PAGE } from './config';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
};

//change the state object "state
export const loadRecipe = async function (id) {
  try {
    const data = await getJson(`${API_URL}${id}`);
    // let recipe = data.data.recipe;
    //ou
    //como temos recipe dos dois lado fazemos a destruturaçao
    const { recipe } = data.data;
    console.log(recipe);

    //feito isto para mudar os nomes que nao gosto
    state.recipe = {
      cookingTime: recipe.cooking_time,
      id: recipe.id,
      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title,
    };

    console.log(state.recipe);
  } catch (err) {
    //Temp error handling
    console.log(`${err}💣💣`);
    throw err;
  }
};
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJson(`${API_URL}?search=${query}`);
    console.log(data);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        imageUrl: rec.image_url,
        publisher: rec.publisher,
        title: rec.title,
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.log(`${err}💣💣`);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  //*10 resultados da pagna
  const start = (page - 1) * state.search.resultsPerPage; //0;
  const end = page * state.search.resultsPerPage; //9;
  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newQt = oldQt * newServings / oldServings // 2 * 8 / 4 = 4
  });

  state.recipe.servings = newServings;
};
