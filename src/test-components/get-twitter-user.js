import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Spinner, Flex } from 'theme-ui'

import FormInputSearch from '../components/form-input-search'

const INITIAL_USERNAME = 'PaulieScanlon'

const GetTwitterUser = () => {
  const [response, setResponse] = useState(null)
  const [username, setUserName] = useState(INITIAL_USERNAME)
  const [search, setSearch] = useState(INITIAL_USERNAME)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getTwitterUser = useCallback(async () => {
    setResponse('')
    setIsSubmitting(true)

    try {
      const response = await axios('/api/get-twitter-user', {
        method: 'POST',
        data: {
          username: search,
        },
      })
      setResponse(response.data)
      setIsSubmitting(false)
    } catch (error) {
      setResponse(error.response)
      setIsSubmitting(false)
    }
  }, [search])

  useEffect(() => {
    getTwitterUser()
  }, [getTwitterUser])

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
    setSearch(username)
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

export default GetTwitterUser
