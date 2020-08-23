const RepoDetails = ({ el }) => {
  if (!el) {
    return;
  }

  // required properties
  const props = {
    owner: el.getAttribute('data-owner'),
    repo: el.getAttribute('data-repo'),
  };

  // exit if required elements & properties not present
  if (!props.owner || !props.repo) {
    return;
  }

  const getRepoDetails = () =>
    fetch(`https://api.github.com/repos/${props.owner}/${props.repo}`, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((data) => data);

  const render = () => {
    getRepoDetails()
      .then((data) => {
        console.log('success', data); // eslint-disable-line no-console
      })
      .catch((data) => {
        console.log('error', data); // eslint-disable-line no-console
      });
  };

  render();
};

export default RepoDetails;
