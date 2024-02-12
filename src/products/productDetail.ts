import { RedGin, propReflect, event, emit, html } from 'redgin';
import { Product, products } from './products';

export default class ProductDetail extends RedGin {
  products: Product[] = products;

  render() {
    const routeParams = JSON.parse(this.getAttribute('route-params'));
    const product = this.products.find(product => product.id == routeParams.productId);
  
    console.log(this.products);
  
    return `
      <h2>Product Details</h2>
      <div>
        ${product ? `
          <h3>${product.name}</h3>
          <h4>${product.price}</h4>
          <p>${product.description}</p>
        ` : ''}
      </div>
    `;
  }
  

}

customElements.define('product-detail', ProductDetail);

declare global {
  interface HTMLElementTagNameMap {
    'product-detail': ProductDetail;
  }
}
