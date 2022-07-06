import View from './View.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class AddingRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _overlayElement = document.querySelector('.overlay');
  _windowElement = document.querySelector('.add-recipe-window');
  _closeBtn = document.querySelector('.btn--close-modal');
  _openBtn = document.querySelector('.nav__btn--add-recipe');

  constructor() {
    super();
    this._handleShowingWindow();
    this._handleHidingWindow();
  }

  toggleWindow() {
    this._overlayElement.classList.toggle('hidden');
    this._windowElement.classList.toggle('hidden');
  }
  _handleHidingWindow() {
    this._closeBtn.addEventListener('click', this.toggleWindow.bind(this));
  }

  _handleShowingWindow() {
    this._openBtn.addEventListener('click', this.toggleWindow.bind(this));
    this._overlayElement.addEventListener(
      'click',
      this.toggleWindow.bind(this)
    );
  }

  handleUploadRecipe(handler) {
    this._parentElement.addEventListener('submit', function (event) {
      event.preventDefault();

      const dataArr = [...new FormData(this)];
      const dataObj = Object.fromEntries(dataArr);
      handler(dataObj);
    });
  }
  htmlGenerator() {}
}

export default new AddingRecipeView();
