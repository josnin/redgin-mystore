// Import stylesheets
import './style.css';
import { style2 } from './style2.css';

import('redgin')
  .then(({ injectStyles }) => {

    const styles = [
      `@import url("https://fonts.googleapis.com/icon?family=Material+Icons")`, 
      style2
    ]

    // inject global styles
    injectStyles.push(...styles)
   

    // load compon
    import('./src/layout/layout')

      
  
  })
  .catch((err) => console.log(err))

