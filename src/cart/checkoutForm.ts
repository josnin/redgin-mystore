import { RedGin, event, html } from 'redgin';
import { Product, products } from '../products/products';
import { FormBuilder } from 'pao-form';

export default class CartCheckout extends RedGin {
  items: Product[] = products;
  //items: any = []
  fb: any;
  checkoutFrmGroup: any;

  onSubmit() {
    this.items = [];
    console.warn(
      'Your order has been submitted',
      this.checkoutFrmGroup.getValue()
    );
    this.checkoutFrmGroup.clearValue();
  }

  onInit() {
    this.fb = new FormBuilder(this.shadowRoot);
    const Validators = {
      required: {
        validator: (value) => !!value,
        errorMessage: 'This field is required!',
      },
    };

    // Create controls with validators
    const nameControl = this.fb.control('', [Validators.required]);
    const addressControl = this.fb.control('', [Validators.required]);

    // Create a form group
    this.checkoutFrmGroup = this.fb.group({
      name: nameControl,
      address: addressControl,
    });

    this.checkoutFrmGroup.validateAll();

    console.log(this.checkoutFrmGroup, 'AAAAA');
  }

  render() {
    return html`
        <h3>Cart</h3>

        <p>
          <a routerLink="/shipping">Shipping Prices</a>
        </p>
        
    
          ${this.items.map(
            (e) => html`
          <div class="cart-item">
            <span>${e.name} </span>
            <span>${e.price}</span>       
          </div>       
          `
          )}
    
        </div>
        
        <form>
        
          <div>
            <label for="name">
              Name
            </label>
            <input id="name" type="text">
            <div id="nameError"></div>
          </div>
        
          <div>
            <label for="address">
              Address
            </label>
            <input id="address" type="text">
            <div id="addressError"></div>
          </div>
        
        
          <br/>
          <button ${event('click', () => this.onSubmit())}>Purchase</button>

        
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
