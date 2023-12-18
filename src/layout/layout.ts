import { RedGin, html } from 'redgin';
import JongRouter from 'jong-router';

import('./topBar');

class AppRoot extends RedGin {

  onInit() {
    const router = new JongRouter([

      { pattern: '/', component: import('../products/productList') }  
   
    
      // Add more routes as needed
    
    ], this.shadowRoot.getElementById('outlet'), this.shadowRoot );   
    
    
    router.init();
    
  }

  render() {
    return html` 
      <top-bar></top-bar>

      <div class="container">
        <div id="outlet"></div>
      
      </div>
    `;
  }
}

customElements.define('app-root', AppRoot);

