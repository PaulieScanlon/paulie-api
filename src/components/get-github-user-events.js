import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'

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
      <form onSubmit={handleSubmit}>
        <div>
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
        </div>
        <button disabled={isSubmitting || !username} type="submit">
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

export default GetGitHubUserEvents
