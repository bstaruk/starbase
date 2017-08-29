// promise & fetch polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// baseline app styles
require('./app/fonts/fonts.css');
require('./app/app.css');

// components styles
require.context('./components/', true, /\.css$/);

// button component
const Button = require('./components/button/Button');
const buttonEl = document.getElementsByClassName('button');
buttonEl && new Button({el: buttonEl});
