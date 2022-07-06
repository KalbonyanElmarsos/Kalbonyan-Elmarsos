import { API_URL, RESULT_PER_PAGE, API_KEY } from './config.js';
import { getJSONResponse, sendJSONRequest, AJAX } from './helper.js';
export const AppState = {
  recipe: {},
  search: {
    query: '',
    result: [],
    page: 1,
    resultPerPage: RESULT_PER_PAGE,
  },
  bookmarks: [],
};
const reformatRecipe = function (recipe) {
  return {
    id: recipe.id,
    publisher: recipe.publisher,
    imageUrl: recipe.image_url,
    ingredients: recipe.ingredients,
    sourceUrl: recipe.source_url,
    title: recipe.title,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ...(recipe.key && { key: recipe.key }), //// very awsome trick
  };
};
export const getRecipe = async function (recipeID) {
  try {
    if (!recipeID) return; ////////////////////////
    let {
      data: { recipe },
    } = await AJAX(`${API_URL}/${recipeID}?key=${API_KEY}`);
    // } = await getJSONResponse(`${API_URL}/${recipeID}`);
    // console.log(recipe);

    //  Reformat recipe object
    AppState.recipe = reformatRecipe(recipe);

    if (AppState.bookmarks.some(item => item.id === recipeID)) {
      AppState.recipe.bookmarked = true;
    } else AppState.recipe.bookmarked = false;
    // console.log(AppState);
  } catch (err) {
    throw err;
  }
};

export const getSearchQuery = async function (query) {
  try {
    // set the app state
    AppState.search.query = query;
    const response = await AJAX(`${API_URL}/?search=${query}&key=${API_KEY}`);
    // const response = await getJSONResponse(`${API_URL}/?search=${query}`);

    // Reformat recipes
    AppState.search.result = response.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        publisher: recipe.publisher,
        imageUrl: recipe.image_url,
        title: recipe.title,
        ...(recipe.key && { key: recipe.key }), //// very awsome trick
      };
    });
    AppState.search.page = 1;

    // console.log(AppState.search.result);
  } catch (err) {
    throw err;
  }
};

export const displayRecipePages = function (pageNum = AppState.search.page) {
  AppState.search.page = pageNum;
  const start = (pageNum - 1) * AppState.search.resultPerPage; //0 - 10 - 20 -...
  const end = pageNum * AppState.search.resultPerPage; // 9-19- 29-39-...

  return AppState.search.result.slice(start, end);
};

export const updateServings = function (newServings) {
  AppState.recipe.ingredients.forEach(item => {
    item.quantity = (item.quantity * newServings) / AppState.recipe.servings;
  });
  AppState.recipe.servings = newServings;
};

export const addBookMark = function () {
  AppState.recipe.bookmarked = true;
  // console.log(AppState.recipe);
  AppState.bookmarks.push(AppState.recipe);

  handleLocalStorage();
};
export const deleteBookmark = function (id) {
  const index = AppState.bookmarks.findIndex(item => item.id === id);

  AppState.bookmarks.splice(index, 1);
  AppState.recipe.bookmarked = false;
  handleLocalStorage();
};

const handleLocalStorage = function () {
  localStorage.setItem('bookmarks', JSON.stringify(AppState.bookmarks));
};

const getLocalStorage = function () {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  if (bookmarks) AppState.bookmarks = bookmarks;
};
getLocalStorage();

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(item => item[0].startsWith('ingredient') && item[1] !== '')
      .map(ing => {
        const arr = ing[1].replaceAll(' ', '').split(',');
        if (arr.length !== 3)
          throw new Error('Wrong format please use a correct format');

        const [quantity, unit, description] = arr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });
    console.log(newRecipe);
    const recipeFormated = {
      title: newRecipe.title,
      image_url: newRecipe.image,
      ingredients,
      publisher: newRecipe.publisher,
      source_url: newRecipe.sourceUrl,
      servings: newRecipe.servings,
      cooking_time: newRecipe.cookingTime,
    };

    const res = await AJAX(
      // const res = await sendJSONRequest(
      `${API_URL}?key=${API_KEY}`,
      recipeFormated
    );
    console.log(res);
    AppState.recipe = reformatRecipe(res.data.recipe);
  } catch (err) {
    throw err;
  }
};
