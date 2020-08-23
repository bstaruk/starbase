import * as OfflinePluginRuntime from 'offline-plugin/runtime';

// styles
import 'app.css';

// fetch & promise polyfills (comment-out if not needed)
// require('es6-promise').polyfill();
// require('whatwg-fetch');

// js components
import RepoDetails from 'js/RepoDetails';

// remove .no-js from html tag
document.querySelector('html').classList.remove('no-js');

// initialize RepoDetails component
const repoDetailsWrapper = document.getElementById('repo-details');
if (repoDetailsWrapper) {
  RepoDetails({ el: repoDetailsWrapper });
}

// run offline plugin last (skip for dev)
if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install({
    onUpdateReady: () => {
      OfflinePluginRuntime.applyUpdate();
    },
  });
}
