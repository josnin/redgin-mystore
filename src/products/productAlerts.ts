import { RedGin, propReflect, event, emit } from 'redgin'
import { Product } from './products'

class ProductAlerts extends RedGin {
  product = propReflect<Product>(null)

  static observedAttributes = ['product']
  render() {
    return `
      ${ this.product && this.product.price > 700 ? ` 
        <p>          
          <button ${ event('click', () => emit.call(this, 'notifyMe') ) } >Notify Me</button>
        </p>      
      ` : `` }

      `
  }
}

customElements.define('product-alerts', ProductAlerts)