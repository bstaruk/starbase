const RepoDetails = ({ el }) => {
  if (!el) {
    return;
  }

  // required ui elements
  const ui = {
    wrapper: el.querySelector('p'),
  };

  // required properties
  const props = {
    owner: el.getAttribute('data-owner'),
    repo: el.getAttribute('data-repo'),
  };

  // exit if required elements & properties not present
  if (!ui.wrapper || !props.owner || !props.repo) {
    return;
  }

  const getRepoDetails = () =>
    fetch(`https://api.github.com/repos/${props.owner}/${props.repo}`, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((data) => data);

  const render = () => {
    el.classList.remove('repo-details--loaded');

    getRepoDetails()
      .then((data) => {
        ui.wrapper.textContent = `${data.name} has ${data.stargazers_count} stargazers, ${data.forks_count} forks and ${data.open_issues_count} open issues.`;
        el.classList.add('repo-details--loaded');
      })
      .catch(() => {
        ui.wrapper.textContent = `There was an error getting the repo details for ${props.owner}/${props.repo}. Refresh the page to try again.`;
      });
  };

  render();
};

export default RepoDetails;
