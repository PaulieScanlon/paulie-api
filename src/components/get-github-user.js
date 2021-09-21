import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Spinner, Flex, Grid, Button } from 'theme-ui'

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
            label="Username"
            searchPlaceholder={INITIAL_USERNAME}
            searchValue={username}
            onChange={handleUsernameChange}
            onClear={handleUsernameClear}
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

export default GetGitHubUser
