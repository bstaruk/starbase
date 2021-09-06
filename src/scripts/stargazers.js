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
  if (!props.owner || !props.repo) {
    return;
  }

  const getRepoDetails = () =>
    fetch(`https://api.github.com/repos/${props.owner}/${props.repo}`, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((data) => data);

  getRepoDetails()
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
