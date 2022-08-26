import React, { useState } from 'react';
import axios from 'axios';

import InputSearch from './input-search';
import PrismSyntaxHighlight from './prism-syntax-highlight';

const INITIAL_USERNAME = 'PaulieScanlon';
const INITIAL_REPO = 'mdx-embed';

const GetGitHubRepo = () => {
  const [response, setResponse] = useState(null);
  const [owner, setOwner] = useState(INITIAL_USERNAME);
  const [repo, setRepo] = useState(INITIAL_REPO);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getGitHubUser = async () => {
    setIsSubmitting(true);

    try {
      const response = await axios('/api/get-github-repo', {
        method: 'POST',
        data: {
          owner: owner,
          repo: repo
        }
      });
      setResponse(response.data);
      setIsSubmitting(false);
    } catch (error) {
      setResponse(error.response);
      setIsSubmitting(false);
    }
  };

  const handleUsernameChange = (event) => {
    setResponse('');
    setOwner(event.target.value);
  };

  const handleUsernameClear = () => {
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
    getGitHubUser();
  };

  return (
    <div className="mb-6 px-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-1fr-auto gap-4 items-end text-text text">
        <div className="grid grid-cols-1fr-1fr gap-4">
          <InputSearch
            label="Username"
            searchPlaceholder={INITIAL_USERNAME}
            searchValue={owner}
            onChange={handleUsernameChange}
            onClear={handleUsernameClear}
          />
          <InputSearch
            label="Repository"
            searchPlaceholder="mdx-embed"
            searchValue={repo}
            onChange={handleRepoChange}
            onClear={handleRepoClear}
            showSymbol={false}
          />
        </div>
        <button disabled={isSubmitting || !owner} type="submit">
          Submit
        </button>
      </form>
      {isSubmitting ? <div className="my-4">Loading</div> : null}
      {response ? (
        <div className="pt-6">
          <PrismSyntaxHighlight className="language-json">{JSON.stringify(response, null, 2)}</PrismSyntaxHighlight>
        </div>
      ) : null}
    </div>
  );
};

export default GetGitHubRepo;
