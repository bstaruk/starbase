const RepoDetails = ({ el }) => {
  if (!el) {
    return;
  }

  // required properties
  const props = {
    owner: el.getAttribute('data-owner'),
    repo: el.hasAttribute('data-repo'),
  };

  // exit if required elements & properties not present
  if (!props.owner || !props.repo) {
    return;
  }

  // do things
  console.log({
    el,
    owner: props.owner,
    repo: props.repo,
  });
};

export default RepoDetails;
