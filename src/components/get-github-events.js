import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Spinner, Flex } from 'theme-ui'

import FormInputSearch from './form-input-search'

const INITIAL_USERNAME = 'PaulieScanlon'
const INITIAL_RESULTS = 5

const GetGitHubEvents = () => {
  const [response, setResponse] = useState(null)
  const [username, setUserName] = useState(INITIAL_USERNAME)
  const [search, setSearch] = useState(INITIAL_USERNAME)
  const [results, setResults] = useState(INITIAL_RESULTS)
  const [amount, setAmount] = useState(INITIAL_RESULTS)
  const [isSubmitting, setIsSubmitting] = useState(true)

  const getGitHubEvents = useCallback(async () => {
    setResponse('')
    setIsSubmitting(true)

    try {
      const response = await axios('/api/get-github-events', {
        method: 'POST',
        data: {
          username: search,
          results: amount,
        },
      })
      setResponse(response.data)
      setIsSubmitting(false)
    } catch (error) {
      setResponse(error.response)
      setIsSubmitting(false)
    }
  }, [search, amount])

  useEffect(() => {
    getGitHubEvents()
  }, [getGitHubEvents])

  const handleSearchChange = (event) => {
    setResponse('')
    setUserName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setResponse('')
    setResults(event.target.value)
  }

  const handleClear = () => {
    setResponse('')
    setUserName('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearch(username)
    setAmount(results)
  }

  return (
    <Fragment>
      <FormInputSearch
        searchValue={username}
        numberValue={parseInt(results)}
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
