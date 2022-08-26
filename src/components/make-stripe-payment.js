import React, { Fragment, useState } from 'react';
import axios from 'axios';

import FormInputValue from './form-input-value';
import PrismSyntaxHighlight from './prism-syntax-highlight';

const INITIAL_PRODUCT = 'prod_KAgqqzBEBmuYkT';
const INITIAL_AMOUNT = 5;

const MakeStripePayment = () => {
  const [response, setResponse] = useState(null);
  const [price, setPrice] = useState(INITIAL_AMOUNT);
  const [select, setSelect] = useState(INITIAL_PRODUCT);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const makeStripePayment = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios('/api/make-stripe-payment', {
        method: 'POST',
        data: {
          product: select,
          amount: price,
          success_url: 'https://paulieapi.gatsbyjs.io/make-stripe-payment',
          cancel_url: 'https://paulieapi.gatsbyjs.io/make-stripe-payment'
        }
      });
      setResponse(response.data);
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

export default MakeStripePayment;
