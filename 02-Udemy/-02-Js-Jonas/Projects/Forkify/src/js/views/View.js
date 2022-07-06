import icons from 'url:../../img/icons.svg';

export default class View {
  _JSONData;
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'recipe not found please try again';
  _successMessage = 'your request done successfully';
  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author mahmoud farag
   * @todo adding more featureas
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderErrorMsg();
    this._JSONData = data;
    const html = this.htmlGenerator();
    if (!render) return html;
    // console.log(html);
    this._clearHtml();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }
  update(data) {
    this._JSONData = data;
    const newHtml = this.htmlGenerator();

    //  virtual DOM
    const virtualDom = document.createRange().createContextualFragment(newHtml); // return virtual nodelist with all new elements
    const virtualDomArr = Array.from(virtualDom.querySelectorAll('*'));
    const currentHtmlArr = Array.from(
      this._parentElement.querySelectorAll('*')
    );
    // console.log(virtualDomArr);
    // console.log(currentHtmlArr);

    virtualDomArr.forEach((newHtml, index) => {
      const currentHtml = currentHtmlArr[index];

      if (
        !newHtml.isEqualNode(currentHtml) &&
        newHtml.firstChild?.nodeValue.trim() !== ''
      ) {
        currentHtml.textContent = newHtml.textContent;
      }
      if (!newHtml.isEqualNode(currentHtml)) {
        Array.from(newHtml.attributes).forEach(attr => {
          currentHtml.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  renderErrorMsg(message = this._errorMessage) {
    const html = `
    <div class="error">
      <div>
        <svg>
          <use href="src/img/icons.svg#icon-alert-triangle"></use>
        </svg>
      </div>  
    <p>${message}</p>
    `;
    this._clearHtml();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  renderSuccessMsg(message = this._successMessage) {
    const html = `
   <div class="message">
      <div>
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
      </div>  
    <p>${message}</p>
  `;
    this._clearHtml();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  renderSpinner() {
    const spinner = `
    <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
   </div>
  `;
    this._clearHtml();
    this._parentElement.insertAdjacentHTML('afterbegin', spinner);
  }
  _clearHtml() {
    this._parentElement.innerHTML = '';
  }
}
