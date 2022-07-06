import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PreviewView extends View {
  htmlGenerator() {
    const id = document.location.hash.slice(1);

    return `
      <li class="preview">
        <a class="preview__link ${
          id === this._JSONData.id ? ' preview__link--active' : ''
        }" href="#${this._JSONData.id}">
          <figure class="preview__fig">
            <img src="${this._JSONData.imageUrl}" alt="${
      this._JSONData.title
    }" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._JSONData.title}</h4>
            <p class="preview__publisher">${this._JSONData.publisher}</p>
            <div class="recipe__user-generated ${
              this._JSONData.key ? '' : 'hidden'
            }">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
  `;
  }
}

export default new PreviewView();
