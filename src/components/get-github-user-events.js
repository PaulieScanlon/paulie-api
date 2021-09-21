import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Spinner, Flex, Grid, Button } from 'theme-ui'

import InputSearch from './input-search'
import InputNumber from './input-number'

const INITIAL_USERNAME = 'PaulieScanlon'
const INITIAL_RESULTS = 5

const GetGitHubUserEvents = () => {
  const [response, setResponse] = useState(null)
  const [username, setUsername] = useState(INITIAL_USERNAME)
  const [_username, _setUsername] = useState(INITIAL_USERNAME)
  const [results, setResults] = useState(INITIAL_RESULTS)
  const [_results, _setResults] = useState(INITIAL_RESULTS)
  const [isSubmitting, setIsSubmitting] = useState(true)

  const getGitHubEvents = useCallback(async () => {
    setIsSubmitting(true)

    try {
      const response = await axios('/api/get-github-user-events', {
        method: 'POST',
        data: {
          username: _username,
          results: _results,
        },
      })
      setResponse(response.data)
      setIsSubmitting(false)
    } catch (error) {
      setResponse(error.response)
      setIsSubmitting(false)
    }
  }, [_username, _results])

  useEffect(() => {
    getGitHubEvents()
  }, [getGitHubEvents])

  const handleUsernameChange = (event) => {
    setResponse('')
    setUsername(event.target.value)
  }

  const handleUsernameClear = () => {
    setResponse('')
    setUsername('')
  }

  const handleResultsChange = (event) => {
    setResponse('')
    setResults(parseInt(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    _setUsername(username)
    _setResults(results)
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
            gridTemplateColumns: ['auto', '1fr auto'],
            gap: 2,
          }}
        >
          <InputSearch
            label="Username"
            searchPlaceholder={INITIAL_USERNAME}
            searchValue={username}
            onChange={handleUsernameChange}
            onClear={handleUsernameClear}
          />
          <InputNumber
            label="Results"
            numberValue={results}
            onChange={handleResultsChange}
          />
        </Grid>
        <Button disabled={isSubmitting || !username} type="submit">
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

export default GetGitHubUserEvents