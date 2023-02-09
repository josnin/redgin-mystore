import { RedGin, html } from 'redgin';
import 'router-slot';
import('./topBar');

class AppRoot extends RedGin {
  render() {
    return html` 
      <top-bar></top-bar>

      <div class="container">
         <router-slot></router-slot>
      </div>
    `;
  }
}

customElements.define('app-root', AppRoot);

 // configure router
 customElements.whenDefined('router-slot').then(async () => {

  const routerSlot = document.querySelector('app-root').shadowRoot.querySelector('router-slot')

  routerSlot.add([
     
    {
      path: '',          
      component: () => import('../products/productList'),   
    },
  ])
}) 
