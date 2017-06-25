// base styles
require('./styles/app.css');

// components styles
require.context('./components/', true, /\.css$/);

// components js
const Button = require('./components/button/Button');
const buttonEl = document.getElementsByClassName('button');
buttonEl && new Button({el: buttonEl});
