// components js
import Menu from './components/menu/Menu';

// promise & fetch polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// baseline app styles
require('./app/fonts/fonts.css');
require('./app/app.css');

// components styles
require.context('./components/', true, /\.css$/);

// component js
const initializeComponents = () => {
  const menus = document.getElementsByClassName('menu');
  for (let i = 0; i < menus.length; i++) {
    new Menu({ el: menus[i] });
  }
};

initializeComponents(); // let's get this show on the road
