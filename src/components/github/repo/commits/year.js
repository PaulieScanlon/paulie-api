import React, { useState } from 'react';

import InputSearch from '../../../input-search';
import Loading from '../../../loading';
import PrismSyntaxHighlight from '../../../prism-syntax-highlight';

const INITIAL_OWNER = 'PaulieScanlon';
const INITIAL_REPO = 'paulie-dev-2019';

const RepoCommitsYear = () => {
  const [response, setResponse] = useState(null);
  const [owner, setOwner] = useState(INITIAL_OWNER);
  const [repo, setRepo] = useState(INITIAL_REPO);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getGitHubCommits = async () => {
    setIsSubmitting(true);

    try {
      const response = await (
        await fetch(`/api/v2/github/repo/commits/year?owner=${owner}&repository=${repo}`, {
          headers: {
            Authorization: `Bearer ${process.env.GATSBY_PAULIE_API_TOKEN}`
          }
        })
      ).json();
      setResponse(response);
      setIsSubmitting(false);
    } catch (error) {
      setResponse(error.response);
      setIsSubmitting(false);
    }
  };

  const handleOwnerChange = (event) => {
    setResponse('');
    setOwner(event.target.value);
  };

  const handleOwnerClear = () => {
    setResponse('');
    setOwner('');
  };

  const handleRepoChange = (event) => {
    setResponse('');
    setRepo(event.target.value);
  };

  const handleRepoClear = () => {
    setResponse('');
    setRepo('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getGitHubCommits();
  };

  return (
    <div className="mb-6 px-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-1fr-auto gap-4 items-end text-text text">
        <div className="grid grid-cols-auto-auto gap-4">
          <InputSearch
            label="Owner"
            searchPlaceholder={INITIAL_OWNER}
            searchValue={owner}
            onChange={handleOwnerChange}
            onClear={handleOwnerClear}
            isSubmitting={isSubmitting}
          />
          <InputSearch
            label="Repository"
            searchPlaceholder={INITIAL_REPO}
            searchValue={repo}
            onChange={handleRepoChange}
            onClear={handleRepoClear}
            showSymbol={false}
            isSubmitting={isSubmitting}
          />
        </div>
        <button disabled={isSubmitting || !owner || !repo} type="submit">
          {isSubmitting ? <Loading /> : 'Submit'}
        </button>
      </form>
      {response ? (
        <div className="pt-6">
          <PrismSyntaxHighlight className="language-json">{JSON.stringify(response, null, 2)}</PrismSyntaxHighlight>
        </div>
      ) : null}
    </div>
  );
};

export default RepoCommitsYear;
