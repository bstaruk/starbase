// base styles
require('./styles/app.css');

// components styles
require.context('./components/', true, /\.css$/);

// components js
const Button = require('./components/button/Button');

componentSetup();
function componentSetup() {
  if (document.getElementsByClassName('button')) {
    new Button();
  }
}
