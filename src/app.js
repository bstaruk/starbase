// import * as OfflinePluginRuntime from 'offline-plugin/runtime';

// fetch & promise polyfills (comment-out if not needed)
import 'es6-promise/auto';
import 'whatwg-fetch';

// styles
import 'app.scss';

// js components
import RepoDetails from 'scripts/RepoDetails';

// remove .no-js from html tag
document.querySelector('html').classList.remove('no-js');

// initialize RepoDetails component
const repoDetailsWrapper = document.getElementById('repo-details');
if (repoDetailsWrapper) {
  RepoDetails({ el: repoDetailsWrapper });
}
