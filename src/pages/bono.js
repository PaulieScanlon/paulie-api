import React, { useState, useEffect } from 'react';

import PrismSyntaxHighlight from '../components/prism-syntax-highlight';

const Page = () => {
  const [response, setResponse] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getGitHubUser = async () => {
      setIsSubmitting(true);

      try {
        const response = await (
          await fetch('/api/v2/bono?q=Bird', {
            headers: {
              Authorization: `Bearer ${process.env.GATSBY_PAULIE_API_TOKEN}`
            }
          })
        ).json();
        // const response = await (await fetch('/api/v2/bono?q=Bird')).json();
        setResponse(response);
        setIsSubmitting(false);
      } catch (error) {
        setResponse(error.response);
        setIsSubmitting(false);
      }
    };

    getGitHubUser();
  }, []);

  return (
    <div>
      <small className="mb-4 leading-6 font-semibold capitalize text-primary">bono</small>
      <h1>Bono</h1>
      {isSubmitting ? <div className="my-4">Loading</div> : null}
      {response ? (
        <div className="pt-6">
          <PrismSyntaxHighlight className="language-json">{JSON.stringify(response, null, 2)}</PrismSyntaxHighlight>
        </div>
      ) : null}
    </div>
  );
};

export default Page;
