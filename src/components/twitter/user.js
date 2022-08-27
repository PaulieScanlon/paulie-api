import React, { useState } from 'react';

import InputSearch from '../input-search';
import PrismSyntaxHighlight from '../prism-syntax-highlight';

const INITIAL_USERNAME = 'PaulieScanlon';

const User = () => {
  const [response, setResponse] = useState(null);
  const [username, setUsername] = useState(INITIAL_USERNAME);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getUser = async () => {
    setIsSubmitting(true);

    try {
      const response = await (await fetch(`/api/v2/twitter/user?username=${username}`)).json();
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

  const handleSubmit = (event) => {
    event.preventDefault();
    getUser();
  };

  return (
    <div className="mb-6 px-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-1fr-auto gap-4 items-end text-text text">
        <div>
          <InputSearch
            label="Username"
            searchPlaceholder={INITIAL_USERNAME}
            searchValue={username}
            onChange={handleUsernameChange}
            onClear={handleUsernameClear}
          />
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

export default User;