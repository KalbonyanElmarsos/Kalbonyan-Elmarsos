import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';
import View from './View';
class RecipeView extends View {
  // #recipe;
  // #parentElement = document.querySelector('.recipe');
  // #errorMessage = 'recipe not found please try again';
  // #successMessage = 'your request done successfully';
  // render(recipe) {
  //   this._JSONData = recipe;
  //   const html = this.#htmlGenerator();
  //   this.#clearHtml();
  //   this._parentElement.insertAdjacentHTML('afterbegin', html);
  // }

  // #clearHtml() {
  //   this._parentElement.innerHTML = '';
  // }
  htmlGenerator() {
    return `
    <figure class="recipe__fig">
    <img src="${this._JSONData.imageUrl}" alt="${
      this._JSONData.title
    }" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._JSONData.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${
        this._JSONData.cookingTime
      }</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <div class="recipe__user-generated ${this._JSONData.key ? '' : 'hidden'}">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      <span class="recipe__info-data recipe__info-data--people">${
        this._JSONData.servings
      }</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny update-servings-btn btn--increase-servings" data-update_serving="${
          this._JSONData.servings - 1
        }">
          <svg>
            <use href="${icons}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny update-servings-btn btn--increase-servings" data-update_serving="${
          this._JSONData.servings + 1
        }">
          <svg>
            <use href="${icons}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated ${this._JSONData.key ? '' : 'hidden'}">
      <svg>
        <use href="${icons}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round btn-bookmark">
      <svg class="">
        <use href="${icons}#icon-bookmark${
      this._JSONData.bookmarked ? '-fill' : ''
    }"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      
      ${this._JSONData.ingredients.map(this.#buildIngredient).join('')}
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
  }
  #buildIngredient(ingredient) {
    return `
  <li class="recipe__ingredient">
  <svg class="recipe__icon">
    <use href="${icons}#icon-check"></use>
  </svg>
  <div class="recipe__quantity">${
    ingredient.quantity ? ingredient.quantity : ''
    // ingredient.quantity ? new Fraction(ingredient.quantity) : ''
  }</div>
  <div class="recipe__description">
    <span class="recipe__unit">${ingredient.unit}</span>
     ${ingredient.description}
  </div>
</li>

  `;
  }
  // renderSpinner() {
  //   const spinner = `
  // <div class="spinner">
  //       <use>
  //         <use href="${icons}#icon-loader"></use>
  //       </svg>
  //     </div>
  // `;
  //   this.#clearHtml();

  //   this._parentElement.insertAdjacentHTML('afterbegin', spinner);
  // }

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(event =>
      window.addEventListener(event, handler)
    );
  }

  addHandlerServings(handler) {
    this._parentElement.addEventListener('click', function (event) {
      const targetBtn = event.target.closest('.update-servings-btn');
      if (!targetBtn) return;
      const newServings = +targetBtn.dataset.update_serving;

      newServings > 0 && handler(newServings);
    });
  }
  addHandlerBookmark(handler) {
    // Event delegation
    this._parentElement.addEventListener('click', function (event) {
      const btnBookmark = event.target.closest('.btn-bookmark');
      if (!btnBookmark) return;
      console.log(btnBookmark);
      handler();
    });
  }
}
export default new RecipeView();
