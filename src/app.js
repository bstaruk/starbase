// base styles
require('./styles/app.css');

// css components
require('./components/header/header.css');
require('./components/footer/footer.css');

// js components
const Button = require('./components/button/Button');

// initialize js components
componentSetup();
function componentSetup() {
  if (document.getElementsByClassName('button')) {
    new Button();
  }
}
