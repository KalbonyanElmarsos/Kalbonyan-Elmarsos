import icons from 'url:../../img/icons.svg';
import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  htmlGenerator() {
    const totalPages = Math.ceil(
      this._JSONData.result.length / this._JSONData.resultPerPage
    );

    const currentPage = this._JSONData.page;
    // console.log(totalPages);
    // console.log(currentPage);
    // 1) 1 page and more
    if (currentPage === 1 && totalPages > 1) {
      return this._nextBtnHtml(currentPage);
    }
    // 2) 1 page  and no more
    if (currentPage === 1 && totalPages === 1) {
      return '';
    }
    // 3) last page
    if (currentPage === totalPages) {
      return this._prevBtnHtml(currentPage);
    }
    // 4) other pages, but not first or last
    if (currentPage > 1 && currentPage < totalPages) {
      return `${this._prevBtnHtml(currentPage)} ${this._nextBtnHtml(
        currentPage
      )}`;
    }
  }
  _nextBtnHtml(page) {
    return `
  <button data-goto="${page + 1}" class="btn--inline pagination__btn--next">
  <span>${page + 1}</span>
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
  </svg>
</button>
  `;
  }
  _prevBtnHtml(page) {
    return `
  <button  data-goto="${page - 1}" class="btn--inline pagination__btn--prev">
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-left"></use>
  </svg>
  <span>${page - 1}</span>
</button>
  `;
  }

  addHandlerBtn(handler) {
    // Event delegation
    this._parentElement.addEventListener('click', function (event) {
      const btn = event.target.closest('.btn--inline');
      if (!btn) return;
      const newPageNum = +btn.dataset.goto;
      handler(newPageNum);
    });
  }
}

export default new PaginationView();
