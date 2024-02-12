import { RedGin, html } from 'redgin';

class TopBar extends RedGin {
  render() {
    return html`
      <a>
        <h1>My Store</h1>
      </a>  
      <a class="button fancy-button" router-link href="/cart">
        <i class="material-icons">shopping_cart</i>Checkout
      </a>  
  `;
  }
}

customElements.define('top-bar', TopBar);

declare global {
	interface HTMLElementTagNameMap {
		"top-bar": TopBar;
	}
}
