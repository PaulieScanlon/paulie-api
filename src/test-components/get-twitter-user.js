import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Spinner, Flex } from 'theme-ui'

const GetTwitterUser = () => {
  const [response, setResponse] = useState(null)

  const getTwitterUser = async () => {
    try {
      const response = await axios('/api/get-twitter-user', {
        method: 'POST',
        data: {
          username: 'PaulieScanlon',
        },
      })
      setResponse(response.data)
    } catch (error) {
      setResponse(error.response)
    }
  }

  useEffect(() => {
    getTwitterUser()
  }, [])

  return (
    <Fragment>
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
          <Spinner />
        </Flex>
      )}
    </Fragment>
  )
}

export default GetTwitterUser
