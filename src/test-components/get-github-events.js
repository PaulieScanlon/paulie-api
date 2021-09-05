import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Spinner, Flex } from 'theme-ui'

import FormInputSearch from '../components/form-input-search'

const GetGitHubEvents = () => {
  const [response, setResponse] = useState(null)
  const [username, setUserName] = useState('PaulieScanlon')
  const [results, setResults] = useState(5)
  const [isSubmitting, setIsSubmitting] = useState(true)

  const getGitHubEvents = useCallback(async () => {
    setResponse('')
    setIsSubmitting(true)

    try {
      const response = await axios('/api/get-github-events', {
        method: 'POST',
        data: {
          username: username,
          results: results,
        },
      })
      setResponse(response.data)
      setIsSubmitting(false)
    } catch (error) {
      setResponse(error.response)
      setIsSubmitting(false)
    }
  }, [username, results])

  useEffect(() => {
    getGitHubEvents()
  }, [])

  const handleSearchChange = (event) => {
    setResponse('')
    setUserName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setResults(event.target.value)
  }

  const handleClear = () => {
    setResponse('')
    setUserName('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getGitHubEvents()
  }

  return (
    <Fragment>
      <FormInputSearch
        searchValue={username}
        numberValue={results}
        inputPlaceholder="username"
        onSubmit={handleSubmit}
        onSearchChange={handleSearchChange}
        onNumberChange={handleNumberChange}
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

export default GetGitHubEvents
