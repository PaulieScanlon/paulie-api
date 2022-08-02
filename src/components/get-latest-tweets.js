import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Spinner, Flex, Grid, Button } from 'theme-ui'

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
      <Grid
        as="form"
        variant="forms"
        onSubmit={handleSubmit}
        sx={{
          gridTemplateColumns: ['auto', '1fr auto'],
          gap: [3, 2],
        }}
      >
        <Grid
          sx={{
            gridTemplateColumns: ['auto', '1fr'],
            gap: 2,
          }}
        >
          <InputSearch
            label="Id"
            searchPlaceholder={INITIAL_ID}
            searchValue={id}
            onChange={handleIdChange}
            onClear={handleIdClear}
          />
        </Grid>
        <Button disabled={isSubmitting || !id} type="submit">
          Submit
        </Button>
      </Grid>
      {response ? (
        <pre className="language-json">{JSON.stringify(response, null, 2)}</pre>
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

export default GetLatestTweets
