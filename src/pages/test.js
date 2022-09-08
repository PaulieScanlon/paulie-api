import React, { useState, useEffect } from 'react';

const Page = () => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTestInfo = async () => {
      setIsSubmitting(true);

      try {
        const response = await (await fetch('/api/v2/test')).json();
        setResponse(response);
        setIsLoading(false);
      } catch (error) {
        setResponse(error);
        setIsLoading(false);
      }
    };

    getTestInfo();
  }, []);

  return (
    <div>
      <small className="mb-4 leading-6 font-semibold capitalize text-primary">test</small>
      <h1>Test</h1>
      {isLoading ? <div className="my-4">Loading</div> : null}
      {response ? (
        <div className="pt-6">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      ) : null}
    </div>
  );
};

export default Page;
