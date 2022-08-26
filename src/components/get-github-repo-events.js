import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import InputSearch from './input-search';
import InputNumber from './input-number';
import PrismSyntaxHighlight from './prism-syntax-highlight';

const INITIAL_OWNER = 'PaulieScanlon';
const INITIAL_REPO = 'mdx-embed';
const INITIAL_RESULTS = 5;

const GetGitHubRepoEvents = () => {
  const [response, setResponse] = useState(null);
  const [owner, setOwner] = useState(INITIAL_OWNER);
  const [repo, setRepo] = useState(INITIAL_REPO);
  const [results, setResults] = useState(INITIAL_RESULTS);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getGitHubEvents = async () => {
    setIsSubmitting(true);

    try {
      const response = await axios('/api/get-github-repo-events', {
        method: 'POST',
        data: {
          owner: owner,
          repo: repo,
          results: results
        }
      });
      setResponse(response.data);
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

  const handleResultsChange = (event) => {
    setResponse('');
    setResults(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getGitHubEvents();
  };

  return (
    <div className="mb-6 px-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-1fr-auto gap-4 items-end text-text text">
        <div className="grid grid-cols-1fr-1fr-auto gap-4">
          <InputSearch
            label="Owner"
            searchPlaceholder={INITIAL_OWNER}
            searchValue={owner}
            onChange={handleOwnerChange}
            onClear={handleOwnerClear}
          />
          <InputSearch
            label="Repository"
            searchPlaceholder="mdx-embed"
            searchValue={repo}
            onChange={handleRepoChange}
            onClear={handleRepoClear}
            showSymbol={false}
          />
          <InputNumber label="Results" numberValue={results} onChange={handleResultsChange} />
        </div>
        <button disabled={isSubmitting || !owner || !repo} type="submit">
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

export default GetGitHubRepoEvents;
