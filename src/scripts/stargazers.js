import { hasEmpty } from 'scripts/utils';

const getRepoDetails = (owner, repo) =>
  fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    method: 'GET',
  })
    .then((r) => r.json())
    .then((data) => data);

const initStargazers = ({ el }) => {
  const ui = {
    el,
  };

  // Required properties
  const props = {
    owner: ui.el?.getAttribute('data-owner'),
    repo: ui.el?.getAttribute('data-repo'),
  };

  // Do nothing if anything required is not present
  if (hasEmpty(props)) {
    return;
  }

  getRepoDetails(props.owner, props.repo)
    .then((data) => {
      ui.el.textContent = `${data.stargazers_count} stargazers on GitHub`;
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.error(
        `There was an error getting the repo details for ${props.owner}/${props.repo}. Refresh the page to try again.`,
      );
    });
};

const stargazersWrappers = document.querySelectorAll('.stargazers');
stargazersWrappers.forEach((el) => initStargazers({ el }));
