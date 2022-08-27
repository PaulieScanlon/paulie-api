import React, { Fragment, useState } from 'react';

import FormInputValue from '../form-input-value';
import PrismSyntaxHighlight from '../prism-syntax-highlight';

const INITIAL_PRODUCT = 'prod_KAgqqzBEBmuYkT';
const INITIAL_AMOUNT = 5;

const Payment = () => {
  const [response, setResponse] = useState(null);
  const [price, setPrice] = useState(INITIAL_AMOUNT);
  const [select, setSelect] = useState(INITIAL_PRODUCT);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const makeStripePayment = async () => {
    setIsSubmitting(true);
    try {
      const response = await (
        await fetch('/api/v2/stripe/payment', {
          method: 'POST',
          body: JSON.stringify({
            product: select,
            amount: price,
            success_url: 'https://www.mdx-embed.com',
            cancel_url: 'https://www.mdx-embed.com'
          })
        })
      ).json();

      setResponse(response);
      setIsSubmitting(false);
    } catch (error) {
      setResponse(error.response);
      setIsSubmitting(false);
    }
  };

  const handleSelectChange = (event) => {
    setResponse('');
    setSelect(event.target.value);
  };

  const handleNumberChange = (event) => {
    setResponse('');
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    makeStripePayment();
  };

  return (
    <div className="mb-6 px-4">
      <FormInputValue
        productValue={select}
        numberValue={parseInt(price)}
        onSubmit={handleSubmit}
        onSelectChange={handleSelectChange}
        onNumberChange={handleNumberChange}
        isSubmitting={isSubmitting}
      />
      {response ? (
        <Fragment>
          <div className="py-6">
            <PrismSyntaxHighlight className="language-json">{JSON.stringify(response, null, 2)}</PrismSyntaxHighlight>
          </div>
          <div className="flex justify-center">
            <a href={response.url} className="link-button" target="_blank" rel="noreferrer">
              Checkout
            </a>
          </div>
        </Fragment>
      ) : (
        <Fragment>{isSubmitting ? <div className="my-4">Loading</div> : null}</Fragment>
      )}
    </div>
  );
};

export default Payment;
