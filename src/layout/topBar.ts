import { RedGin, html } from 'redgin';

class AppTopBar extends RedGin {
  render() {
    return html`
      <a>
        <h1>My Store</h1>
      </a>  
      <a class="button fancy-button">
        <i class="material-icons">shopping_cart</i>Checkout
      </a>  
  `;
  }
}

customElements.define('app-top-bar', AppTopBar);
