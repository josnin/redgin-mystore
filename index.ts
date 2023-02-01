// Import stylesheets
import './style.css';
import { style2 } from './style2.css';

import('redgin')
  .then(({ injectStyles }) => {

    // inject global styles
    injectStyles.push(
      `@import url("https://fonts.googleapis.com/icon?family=Material+Icons")`
    )
    injectStyles.push(style2)

    // load compon
    import('./src/layout/layout')

      
  
  })
  .catch((err) => console.log(err))

