import { RedGin, event, html } from 'redgin';
import { Product, products } from './products';
import './productAlerts'

export default class ProductList extends RedGin {
  products: Product[] = products;

  share() {
    alert('The product has been shared!');
  }

  onNotify() {
    alert(`You will be notified when the product goes on sale`);
  }

  render() {
    return html`
    
      <h2>Products</h2>

      <div>

        ${ this.products.map( (e) => html`

          <h3>
            <a 
              title="${e.name}"
            >${e.name}</a>
          </h3>

          ${ e.description ? html`<p>Description: ${e.description}</p>` : `` }   

          <button  
            ${event('click', () => this.share() )} 
          >Share</button>
       
          <product-alerts 
            product='${ JSON.stringify(e) }'
            ${ event('notifyMe', () => this.onNotify() ) }
          ></product-alerts>`
          
        ).join('') }         

      </div>
    `;
  }
}

customElements.define('product-list', ProductList);

declare global {
	interface HTMLElementTagNameMap {
		"product-list": ProductList;
	}
}
