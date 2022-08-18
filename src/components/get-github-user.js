import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import InputSearch from './input-search'

const INITIAL_USERNAME = 'PaulieScanlon'

const GetGitHubUser = () => {
  const [response, setResponse] = useState(null)
  const [username, setUsername] = useState(INITIAL_USERNAME)
  const [_username, _setUsername] = useState(INITIAL_USERNAME)
  const [isSubmitting, setIsSubmitting] = useState(true)

  const getGitHubUser = useCallback(async () => {
    setIsSubmitting(true)

    try {
      const response = await axios('/api/get-github-user', {
        method: 'POST',
        data: {
          username: _username,
        },
      })
      setResponse(response.data)
      setIsSubmitting(false)
    } catch (error) {
      setResponse(error.response)
      setIsSubmitting(false)
    }
  }, [_username])

  useEffect(() => {
    getGitHubUser()
  }, [getGitHubUser])

  const handleUsernameChange = (event) => {
    setResponse('')
    setUsername(event.target.value)
  }

  const handleUsernameClear = () => {
    setResponse('')
    setUsername('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    _setUsername(username)
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

export default GetGitHubUser
