// offline-plugin
import './lib/offline-plugin';

// application css
import './lib/fonts/fonts.css';
import './css/app.css';

// remove .no-js from html tag
document.querySelector('html').classList.remove('no-js');

// fetch & promise polyfills (comment-out if not needed)
// require('es6-promise').polyfill();
// require('whatwg-fetch');
