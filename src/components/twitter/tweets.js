import React, { useState } from 'react';

import InputSearch from '../input-search';
import Loading from '../loading';
import PrismSyntaxHighlight from '../prism-syntax-highlight';

const INITIAL_ID = 470012453;

const Tweets = () => {
  const [response, setResponse] = useState(null);
  const [id, setId] = useState(INITIAL_ID);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getTweets = async () => {
    setIsSubmitting(true);

    try {
      const response = await (
        await fetch(`/api/v2/twitter/tweets?id=${id}`, {
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

  const handleIdChange = (event) => {
    setResponse('');
    setId(event.target.value);
  };

  const handleIdClear = () => {
    setResponse('');
    setId('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getTweets();
  };
  return (
    <div className="mb-6 px-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-1fr-auto gap-4 items-end text-text text">
        <InputSearch
          label="Id"
          searchPlaceholder={`${INITIAL_ID}`}
          searchValue={id}
          onChange={handleIdChange}
          onClear={handleIdClear}
        />

        <button disabled={isSubmitting || !id} type="submit">
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

export default Tweets;
