import { RedGin, event } from 'redgin';
import { Product, products } from './products';
import './productAlerts'

export default class AppProductList extends RedGin {
  products: Product[] = products;

  share() {
    alert('The product has been shared!');
  }

  render() {
    return `
    
      <h2>Products</h2>

      <div>

        ${ this.products.map( (e) => `

          <h3>
            <a 
              title="${e.name}"
            >${e.name}</a>
          </h3>
          ${ e.description ? `<p>Description: ${e.description}</p>` : ``  }   
          <button  
            ${event('click', () => this.share() )} 
            > Share
          </button>
       
          <product-alerts product='${ JSON.stringify(e) }'></product-alerts>`
          
        ).join('') }         

      </div>
    `;
  }
}

customElements.define('app-product-list', AppProductList);
