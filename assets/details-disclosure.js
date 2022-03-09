class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');

    this.addEventListener('keyup', onKeyUpEscape);
    this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    })
  }

  close() {
    this.mainDetailsToggle.removeAttribute('open')
  }
}

customElements.define('details-disclosure', DetailsDisclosure);

class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();
    this.header = document.querySelector('header');
  }

  onToggle() {
    if (document.documentElement.style.getPropertyValue('--header-bottom-position-desktop') !== '') return;
    if (this.header) document.documentElement.style.setProperty('--header-bottom-position-desktop', `${Math.floor(this.header.getBoundingClientRect().bottom)}px`);
  }
}

customElements.define('header-menu', HeaderMenu);
