import { RedGin } from 'redgin';
import 'router-slot';
import('./topBar');

class AppRoot extends RedGin {
  render() {
    return ` 
      <app-top-bar></app-top-bar>

      <div class="container">
         <router-slot></router-slot>
      </div>
    `;
  }
}

customElements.define('app-root', AppRoot);
