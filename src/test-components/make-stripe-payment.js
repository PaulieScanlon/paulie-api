import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Spinner } from 'theme-ui'

const MakeStripePayment = () => {
  const [response, setResponse] = useState(null)

  const makeStripePayment = async () => {
    try {
      const response = await axios('/api/make-stripe-payment', {
        method: 'POST',
        data: {
          product: 'prod_K6dGWR54oYDK1q',
          amount: 5,
          success_url: 'https://paulieapi.gatsbyjs.io/make-stripe-payment',
          cancel_url: 'https://paulieapi.gatsbyjs.io/make-stripe-payment',
        },
      })
      setResponse(response.data)
    } catch (error) {
      setResponse(error.response)
    }
  }

  useEffect(() => {
    makeStripePayment()
  }, [])

  return (
    <Fragment>
      {response ? (
        <pre className="language-javascript">
          {JSON.stringify(response, null, 2)}
        </pre>
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default MakeStripePayment