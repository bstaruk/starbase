// components js
import Button from './components/button/Button';

// promise & fetch polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// baseline app styles
require('./app/fonts/fonts.css');
require('./app/app.css');

// components styles
require.context('./components/', true, /\.css$/);

// components init
function componentsInit() {
  // button
  const buttons = document.getElementsByClassName('button');
  for (let i = 0; i < buttons.length; i++) {
    new Button({ el: buttons[i] });
  }
}

componentsInit();
