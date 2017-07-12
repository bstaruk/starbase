// promise & fetch polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// base styles
require('./styles/app.css');

// components styles
require.context('./components/', true, /\.css$/);

// button component
const Button = require('./components/button/Button');
const buttonEl = document.getElementsByClassName('button');
buttonEl && new Button({el: buttonEl});
