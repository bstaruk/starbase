// Dependency Imports
import 'es6-promise/auto';
import 'whatwg-fetch';

// Styles
import 'app.scss';

// Scripts (Components)
import RepoDetails from 'scripts/RepoDetails';

// Remove .no-js from html tag
document.querySelector('html').classList.remove('no-js');

// Initialize RepoDetails component
const repoDetailsWrapper = document.getElementById('repo-details');
if (repoDetailsWrapper) {
  RepoDetails({ el: repoDetailsWrapper });
}
