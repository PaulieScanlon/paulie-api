import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { Fragment } from 'react'
import { Spinner } from '@theme-ui/components'

const GetTwitterUser = () => {
  const [response, setResponse] = useState(null)

  const getTwitterUser = async () => {
    try {
      const a = await axios('/api/get-twitter-user', {
        method: 'POST',
        data: {
          username: 'PaulieScanlon',
        },
      })
      setResponse(a.data)
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
        <Spinner />
      )}
    </Fragment>
  )
}

export default GetTwitterUser
