import icons from 'url:../img/icons.svg';
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//*/
// ------------- 288. Loading a Recipe from API ----------------------------------------------------------
// -------------  289. Rendering the Recipe ----------------------------------------------------------
// ------------- 290. Listening For load and hashchange Events ----------------------------------------------------------
/*
// Global variables and functions
function renderSpinner(parentElement) {
  const spinner = `
    <div class="spinner">
          <use>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
    `;
  parentElement.innerHTML = '';
  parentElement.insertAdjacentHTML('afterbegin', spinner);
}

const showRecipes = async function () {
  try {
    renderSpinner(recipeContainer);

    //  Extract id from url
    const id = window.location.hash.slice(1); // #5ed6604591c37cdc054bcd09 --> use slice(1) to get ride of from #

    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcb34'
    );
    const responseJSON = await response.json();
    if (!response.ok)
      throw new Error(`${responseJSON.message}, status: ${response.status}`);
    console.log(responseJSON);
    let { recipe } = responseJSON.data;
    recipe = {
      id: recipe.id,
      publisher: recipe.publisher,
      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      sourceUrl: recipe.source_url,
      title: recipe.title,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
    };
    console.log(recipe);
    const element = `
      <figure class="recipe__fig">
      <img src="${recipe.imageUrl}" alt="${recipe.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          recipe.cookingTime
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          recipe.servings
        }</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${icons}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        
        ${recipe.ingredients
          .map(item => {
            return `
          <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${icons}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${item.quantity}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${item.unit}</span>
             ${item.description}
          </div>
        </li>

          `;
          })
          .join('')}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}icon-arrow-right"></use>
        </svg>
      </a>
    </div>
      `;
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', element);
  } catch (err) {
    alert(err);
  }
};
showRecipes();
['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, showRecipes)
);
// window.addEventListener('hashchange', showRecipes);
// window.addEventListener('load', showRecipes);
*/

// ------------- 292. Refactoring for MVC ----------------------------------------------------------
// /*
import * as model from './model.js';
import { CLOSE_MODAL_TIME } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import bookmarkView from './views/bookmarkView.js';
import addingRecipeView from './views/addingRecipeView';
const showRecipesController = async function () {
  try {
    recipeView.renderSpinner();
    //  Extract id from url
    const recipeID = window.location.hash.slice(1); // #5ed6604591c37cdc054bcd09 --> use slice(1) to get ride of from #
    await model.getRecipe(recipeID);

    resultView.update(model.displayRecipePages());

    bookmarkView.update(model.AppState.bookmarks);

    const { recipe } = model.AppState;
    if (Object.entries(recipe).length === 0) throw new Error();
    recipeView.render(recipe);
  } catch (err) {
    console.error(err);
    recipeView.renderErrorMsg();
  }
};
// showRecipes();
// ['hashchange', 'load'].forEach(event =>
//   window.addEventListener(event, showRecipes)
// );

const SearchController = async function () {
  try {
    resultView.renderSpinner();

    const query = searchView.getQuery();

    if (!query) return;

    await model.getSearchQuery(query);

    const result = model.displayRecipePages();
    resultView.render(result);
    // console.log(resultView);

    // -Render pagination btns
    paginationView.render(model.AppState.search);
  } catch (err) {
    console.log(err);
  }
};

const paginationController = function (pageNum) {
  const result = model.displayRecipePages(pageNum);
  resultView.render(result);

  // - Rerender pagination btns
  paginationView.render(model.AppState.search);
};

const servingsController = function (newServings) {
  // console.log(model.AppState.recipe.servings);
  // Update serving state
  model.updateServings(newServings);

  // Update UI
  const { recipe } = model.AppState;
  // recipeView.render(recipe);
  recipeView.update(recipe);
};

const bookmarkController = function () {
  if (model.AppState.recipe.bookmarked) {
    model.deleteBookmark(model.AppState.recipe.id);
  } else model.addBookMark();

  // update UI
  recipeView.update(model.AppState.recipe);

  //  render bookmark items
  bookmarkView.render(model.AppState.bookmarks);
};

const ControllerBookmarksLocalStorage = function () {
  bookmarkView.render(model.AppState.bookmarks);
};

const addRecipeController = async function (newRecipe) {
  console.log(newRecipe);
  try {
    addingRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);

    recipeView.render(model.AppState.recipe);

    addingRecipeView.renderSuccessMsg('your recipe uploaded successfully');

    bookmarkView.render(model.AppState.bookmarks);

    // CHange the url current recipe id with the uploaded one
    window.history.pushState(null, '', `#${model.AppState.recipe.id}`);

    setTimeout(function () {
      addingRecipeView.toggleWindow();
    }, CLOSE_MODAL_TIME * 1000);
  } catch (err) {
    console.log(err.message);
    addingRecipeView.renderErrorMsg(err.message);
  }
};

function appInit() {
  recipeView.addHandlerRender(showRecipesController);
  recipeView.addHandlerServings(servingsController);
  recipeView.addHandlerBookmark(bookmarkController);
  searchView.addHandlerSubmit(SearchController);

  paginationView.addHandlerBtn(paginationController);

  bookmarkView.addHandlerLocalStorage(ControllerBookmarksLocalStorage);

  addingRecipeView.handleUploadRecipe(addRecipeController);
}
appInit();
// window.addEventListener('hashchange', showRecipes);
// window.addEventListener('load', showRecipes);

//*/
// -------------  ----------------------------------------------------------
// /*

//*/
