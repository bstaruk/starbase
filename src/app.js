// offline-plugin
import './lib/offline-plugin';

// remove .no-js from html tag
document.querySelector('html').classList.remove('no-js');

// fetch & promise polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// ordered css imports
require('./css/app.css');

// import all other css
require.context('./css/', true, /\.css$/);
