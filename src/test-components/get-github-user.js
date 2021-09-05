import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Spinner, Flex } from 'theme-ui'

import FormInput from '../components/form-input'

const GetGitHubUser = () => {
  const [response, setResponse] = useState(null)
  const [username, setUserName] = useState('PaulieScanlon')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getGitHubUser = useCallback(async () => {
    setResponse('')
    setIsSubmitting(true)

    console.log(username)

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

  const handleChange = (event) => {
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
      <FormInput
        inputValue={username}
        inputPlaceholder="username"
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClear={handleClear}
        isSubmitting={isSubmitting}
      />
      {response ? (
        <pre className="language-javascript">
          {JSON.stringify(response, null, 2)}
        </pre>
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
