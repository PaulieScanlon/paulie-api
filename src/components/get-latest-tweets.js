import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import InputSearch from './input-search'

const INITIAL_ID = 470012453

const GetLatestTweets = () => {
  const [response, setResponse] = useState(null)
  const [id, setId] = useState(INITIAL_ID)
  const [_id, _setId] = useState(INITIAL_ID)
  const [isSubmitting, setIsSubmitting] = useState(true)

  const getLatestTweets = useCallback(async () => {
    setIsSubmitting(true)

    try {
      const response = await axios('/api/get-latest-tweets', {
        method: 'POST',
        data: {
          // https://tools.codeofaninja.com/find-twitter-id
          id: _id,
        },
      })
      setResponse(response.data)
      setIsSubmitting(false)
    } catch (error) {
      setResponse(error.response)
      setIsSubmitting(false)
    }
  }, [_id])

  useEffect(() => {
    getLatestTweets()
  }, [getLatestTweets])

  const handleIdChange = (event) => {
    setResponse('')
    setId(event.target.value)
  }

  const handleIdClear = () => {
    setResponse('')
    setId('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    _setId(id)
  }
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <InputSearch
            label="Id"
            searchPlaceholder={INITIAL_ID}
            searchValue={id}
            onChange={handleIdChange}
            onClear={handleIdClear}
          />
        </div>
        <button disabled={isSubmitting || !id} type="submit">
          Submit
        </button>
      </form>
      {response ? (
        <pre className="language-json">{JSON.stringify(response, null, 2)}</pre>
      ) : (
        <div>{isSubmitting ? <div>Loading</div> : null}</div>
      )}
    </Fragment>
  )
}

export default GetLatestTweets
