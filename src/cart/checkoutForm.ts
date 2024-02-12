import { RedGin, event, html, propReflect, watch } from 'redgin';
import { Product, products } from '../products/products';
import { FormBuilder } from 'pao-form';

export default class CartCheckout extends RedGin {
  itemsInCart: Product[] = products;
  isValid = propReflect<boolean>(false);
  checkoutFormGroup: any;

  static observedAttributes = ['is-valid'];

  onSubmit() {
    this.itemsInCart = [];
    console.warn('Your order has been submitted', this.checkoutFormGroup.getValue());
    //this.checkoutFormGroup.clearValue();
  }

  onInit() {
    const formBuilder = new FormBuilder(this.shadowRoot);
    const Validators = {
      required: {
        validator: (value: any) => !!value,
        errorMessage: 'This field is required!',
      },
    };

    // Create controls with validators
    const nameControl = formBuilder.control('', [Validators.required]);
    const addressControl = formBuilder.control('', [Validators.required]);

    // Create a form group
    this.checkoutFormGroup = formBuilder.group({
      name: nameControl,
      address: addressControl,
    });

    // Subscribe to changes in the entire form group
    this.checkoutFormGroup.subscribe((value: string) => {
      console.log('Form value changed:', value);
      this.checkoutFormGroup.validateAll();
      this.isValid = this.checkoutFormGroup.valid;
    });

    //console.log(this.checkoutFormGroup.getValue());
  }

  render() {
    return html`
      <h3>Cart</h3>
      <p><a routerLink="/shipping">Shipping Prices</a></p>
      ${this.itemsInCart.map(
        (item) => html`
          <div class="cart-item">
            <span>${item.name} </span>
            <span>${item.price}</span>
          </div>
        `
      )}
      </div>
      <form>
        <div>
          <label for="name">Name</label>
          <input id="name" type="text">
          <div id="nameError"></div>
        </div>
        <div>
          <label for="address">Address</label>
          <input id="address" type="text">
          <div id="addressError"></div>
        </div>
        <br/>
        ${watch(['isValid'], () => html`
          <button 
            router-link 
            ${event('click', () => this.onSubmit())}
            ${!this.isValid ? 'disabled' : '' }
          >Purchase</button>
        `)}
      </form>
    `;
  }
}

customElements.define('cart-checkout', CartCheckout);

declare global {
  interface HTMLElementTagNameMap {
    'cart-checkout': CartCheckout;
  }
}
