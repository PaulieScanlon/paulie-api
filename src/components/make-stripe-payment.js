import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Spinner, Flex, Button } from 'theme-ui'

import FormInputValue from './form-input-value'

const INITIAL_PRODUCT = 'prod_KAgqqzBEBmuYkT'
const INITIAL_AMOUNT = 5

const MakeStripePayment = () => {
  const [response, setResponse] = useState(null)
  const [price, setPrice] = useState(INITIAL_AMOUNT)
  const [amount, setAmount] = useState(INITIAL_AMOUNT)
  const [product, setProduct] = useState(INITIAL_PRODUCT)
  const [select, setSelect] = useState(INITIAL_PRODUCT)
  const [isSubmitting, setIsSubmitting] = useState(true)

  const makeStripePayment = useCallback(async () => {
    setIsSubmitting(true)

    try {
      const response = await axios('/api/make-stripe-payment', {
        method: 'POST',
        data: {
          product: product,
          amount: amount,
          success_url: 'https://paulieapi.gatsbyjs.io/make-stripe-payment',
          cancel_url: 'https://paulieapi.gatsbyjs.io/make-stripe-payment',
        },
      })
      setResponse(response.data)
      setIsSubmitting(false)
    } catch (error) {
      setResponse(error.response)
      setIsSubmitting(false)
    }
  }, [product, amount])

  useEffect(() => {
    makeStripePayment()
  }, [makeStripePayment])

  const handleSelectChange = (event) => {
    setResponse('')
    setSelect(event.target.value)
  }

  const handleNumberChange = (event) => {
    setResponse('')
    setPrice(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setAmount(price)
    setProduct(select)
  }

  return (
    <Fragment>
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
          <pre className="language-json">
            {JSON.stringify(response, null, 2)}
          </pre>
          <Flex sx={{ justifyContent: 'center' }}>
            <Button
              as="a"
              variant="secondary"
              href={response.url}
              target="_blank"
              sx={{
                width: ['full', 'auto'],
              }}
            >
              Checkout
            </Button>
          </Flex>
        </Fragment>
      ) : (
        <Flex
          sx={{
            justifyContent: 'center',
          }}
        >
          {isSubmitting ? <Spinner /> : null}
        </Flex>
      )}
    </Fragment>
  )
}

export default MakeStripePayment
