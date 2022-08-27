import React, { useState } from 'react';

import InputSearch from '../../input-search';
import InputNumber from '../../input-number';
import PrismSyntaxHighlight from '../../prism-syntax-highlight';

const INITIAL_USERNAME = 'PaulieScanlon';
const INITIAL_RESULTS = 5;

const Events = () => {
  const [response, setResponse] = useState(null);
  const [username, setUsername] = useState(INITIAL_USERNAME);
  const [results, setResults] = useState(INITIAL_RESULTS);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getGitHubEvents = async () => {
    setIsSubmitting(true);

    try {
      const response = await (await fetch(`/api/v2/github/user/events?username=${username}&results=${results}`)).json();
      setResponse(response);
      setIsSubmitting(false);
    } catch (error) {
      setResponse(error.response);
      setIsSubmitting(false);
    }
  };

  const handleUsernameChange = (event) => {
    setResponse('');
    setUsername(event.target.value);
  };

  const handleUsernameClear = () => {
    setResponse('');
    setUsername('');
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
        <div className="grid grid-cols-1fr-1fr gap-4">
          <InputSearch
            label="Username"
            searchPlaceholder={INITIAL_USERNAME}
            searchValue={username}
            onChange={handleUsernameChange}
            onClear={handleUsernameClear}
          />
          <InputNumber label="Results" numberValue={results} onChange={handleResultsChange} />
        </div>
        <button disabled={isSubmitting || !username} type="submit">
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

export default Events;
