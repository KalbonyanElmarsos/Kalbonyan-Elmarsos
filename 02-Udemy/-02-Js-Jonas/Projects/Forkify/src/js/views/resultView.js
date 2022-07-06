import View from './View.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'no recipes found for your query try another';

  htmlGenerator() {
    return this._JSONData.map(item => previewView.render(item, false)).join('');
  }
  // _helperFunc(item) {
  //   const id = document.location.hash.slice(1);

  //   return `
  //     <li class="preview">
  //       <a class="preview__link ${
  //         id === item.id ? ' preview__link--active' : ''
  //       }" href="#${item.id}">
  //         <figure class="preview__fig">
  //           <img src="${item.imageUrl}" alt="${item.title}" />
  //         </figure>
  //         <div class="preview__data">
  //           <h4 class="preview__title">${item.title}</h4>
  //           <p class="preview__publisher">${item.publisher}</p>
  //           <div class="preview__user-generated">
  //             <svg>
  //               <use href="${icons}#icon-user"></use>
  //             </svg>
  //           </div>
  //         </div>
  //       </a>
  //     </li>
  // `;
  // }
  // htmlGenerator() {
  //   return this._JSONData.map(this._helperFunc).join('');
  // }
}

export default new ResultView();
