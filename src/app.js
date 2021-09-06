// Dependency Imports
import 'es6-promise/auto';
import 'whatwg-fetch';

// Styles
import 'app.scss';

// Remove .no-js from html tag
document.querySelector('html').classList.remove('no-js');

// Runnable (Not Exported) Components
require('scripts/stargazers');
