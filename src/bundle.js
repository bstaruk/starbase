// components js
import Tabs from './components/tabs/Tabs';

// remove .no-js from html tag
document.querySelector('html').classList.remove('no-js');

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
  const tabs = document.getElementsByClassName('tabs');
  for (let i = 0; i < tabs.length; i++) {
    new Tabs({ el: tabs[i] });
  }
};

initializeComponents(); // let's get this show on the road
