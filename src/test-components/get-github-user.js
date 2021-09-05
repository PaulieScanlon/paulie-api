import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Spinner, Flex } from 'theme-ui'

import FormInputSearch from '../components/form-input-search'

const GetGitHubUser = () => {
  const [response, setResponse] = useState(null)
  const [username, setUserName] = useState('PaulieScanlon')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getGitHubUser = useCallback(async () => {
    setResponse('')
    setIsSubmitting(true)

    try {
      const response = await axios('/api/get-github-user', {
        method: 'POST',
        data: {
          username: username,
        },
      })
      setResponse(response.data)
      setIsSubmitting(false)
    } catch (error) {
      setResponse(error.response)
      setIsSubmitting(false)
    }
  }, [username])

  useEffect(() => {
    getGitHubUser()
  }, [])

  const handleSearchChange = (event) => {
    setResponse('')
    setUserName(event.target.value)
  }

  const handleClear = () => {
    setResponse('')
    setUserName('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getGitHubUser()
  }

  return (
    <Fragment>
      <FormInputSearch
        searchValue={username}
        inputPlaceholder="username"
        onSubmit={handleSubmit}
        onSearchChange={handleSearchChange}
        onClear={handleClear}
        isSubmitting={isSubmitting}
      />
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
