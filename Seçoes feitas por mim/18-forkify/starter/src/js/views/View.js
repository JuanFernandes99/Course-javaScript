import icons from 'url:../../img/icons.svg';
export default class view {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    //pega nesses dados e armazena no dataa para usar eses dados em todo o lugar dentro deste
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    //pega nesses dados e armazena no dataa para usar eses dados em todo o lugar dentro deste
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    console.log(newElements);
    console.log(curElements);

    //para solo editar lo necesario
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // se aparece false é que alguma coisa mudou
      console.log(curEl, newEl.isEqualNode(curEl));

      //Updates changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        //optional chaining por si elf irst child no existe
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        //o node value é o texto tipo >5<
        console.log('ahhaha', newEl.firstChild.nodeValue.trim());
        //curEl é o que esta na pagina agora, e é o que queremos upppdate
        curEl.textContent = newEl.textContent;
      }

      // Updates changed ATTRIBUTES
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
