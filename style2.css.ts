/* Global Styles */
import { css } from 'redgin';

export const style2 = css`

/* Global Styles */

* {
  
  font-family: 'Roboto', Arial, sans-serif;
  color: #616161;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}

.container {
  display: flex;
  flex-direction: row;
}

router-slot  {
  padding: 0 16px;
}

/* Text */



h1 {
  font-size: 32px;
  color: white;
  margin: 0;
}

h2 {
  font-size: 20px;
}

h1, h2 {
  font-weight: lighter;
}

p {
  font-size: 14px;
}

/* Hyperlink */

a {
  cursor: pointer;
  /* color: #1976d2; */
  color: rgb(233, 94, 94);
  text-decoration: none;
}

a:hover {
  opacity: 0.8;
}

/* Input */

input {
  font-size: 14px;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #BDBDBD;
}

label {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;
  display: block;
  text-transform: uppercase;
}

/* Button */
.button, button {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 2px;
  font-size: 14px;
  cursor: pointer;
  /*background-color: #1976d2; */
  background-color: rgb(233, 94, 94);
  color: white;
  border: none;
}

.button:hover, button:hover {
  opacity: 0.8;
  font-weight: normal;
}

.button:disabled, button:disabled {
  opacity: 0.5;
  cursor: auto;
}

/* Fancy Button */

.fancy-button {
  background-color: white;
  /* color: #1976d2; */
  color: rgb(233, 94, 94);
}

.fancy-button i.material-icons {
  /* color: #1976d2; */
  color: rgb(233, 94, 94);
  padding-right: 4px;
}

/* Top Bar */

app-top-bar { 
  width: 100%;
  height: 68px;
  /*background-color: #1976d2; */
  background-color: rgb(233, 94, 94);
  padding: 16px;    
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}



/* Checkout Cart, Shipping Prices */

.cart-item, .shipping-item {
  width: 100%;
  min-width: 400px;
  max-width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 32px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: #EEEEEE;
}

`;
