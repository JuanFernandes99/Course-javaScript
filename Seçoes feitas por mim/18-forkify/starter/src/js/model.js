import { async } from 'regenerator-runtime';

export const state = {
  recipe: {},
};

//change the state object "state
export const loadRecipe = async function (id) {
  try {
    // vamos esperar o resultaod da promesa, e armazenar na variavel res ,
    // vamos parar a execuçao do código com o await, mas nao hã problema pq
    // isto é uma async function que funciona em segundo plnao
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    console.log(res);
    // o .json está disponivel em todos os objetos de resposta, e o fetch
    // retorna um objeto de resposta
    const data = await res.json();
    console.log(data);
    //res.status para o codigo
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    console.log(res, data.message);

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
    alert(err);
  }
};
