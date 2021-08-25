import React, { ChangeEvent, Fragment, FunctionComponent, useState } from 'react'
import axios from 'axios'

const StripePaymentPage: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState(1)
  const [cta, setCta] = useState({
    type: 'button',
    message: 'Make Donation with Stripe',
    url: null,
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (value) {
      setInputValue(parseInt(value))
    } else {
      setInputValue(1)
    }
  }

  const makeStripePayment = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post('/api/make-stripe-payment', {
        product: 'prod_K6dGWR54oYDK1q',
        amount: inputValue,
        success_url: 'http://localhost:8000/stripe-payment',
        cancel_url: 'http://localhost:8000/stripe-payment',
      })
      setIsLoading(false)
      setCta({
        type: 'link',
        message: 'Proceed to checkout',
        url: response.data.url,
      })
    } catch (error) {
      setIsLoading(false)
      console.warn(JSON.stringify(error, null, 2))
    }
  }

  return (
    <main>
      <h1>Stripe Payment Page</h1>

      {cta.type === 'button' ? (
        <Fragment>
          <div
            style={{
              display: 'inline-block',
              position: 'relative',
            }}
          >
            <span style={{ position: 'absolute', marginTop: '1px', marginLeft: '1px' }}>$</span>
            <input
              type="number"
              min="1"
              max="100"
              value={inputValue}
              onChange={handleChange}
              style={{
                paddingLeft: '10px',
              }}
            />
          </div>
          <button disabled={isLoading} onClick={makeStripePayment}>
            {cta.message}
          </button>
        </Fragment>
      ) : (
        <a href={cta.url} target="_blank" rel="noopener">
          {cta.message}
        </a>
      )}
    </main>
  )
}

export default StripePaymentPage
