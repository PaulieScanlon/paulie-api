import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Spinner, Flex } from 'theme-ui'

import FormInput from '../components/form-input'

const GetTwitterUser = () => {
  const [response, setResponse] = useState(null)
  const [username, setUserName] = useState('PaulieScanlon')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getTwitterUser = useCallback(async () => {
    setResponse('')
    setIsSubmitting(true)

    try {
      const response = await axios('/api/get-twitter-user', {
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
    getTwitterUser()
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
    getTwitterUser()
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

export default GetTwitterUser
