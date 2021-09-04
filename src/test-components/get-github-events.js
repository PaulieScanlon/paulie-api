import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Spinner } from 'theme-ui'

const GetGitHubEvents = () => {
  const [response, setResponse] = useState(null)

  const getGitHubEvents = async () => {
    try {
      const response = await axios('/api/get-github-events', {
        method: 'POST',
        data: {
          username: 'PaulieScanlon',
          results: 30,
        },
      })
      setResponse(response.data)
    } catch (error) {
      setResponse(error.response)
    }
  }

  useEffect(() => {
    getGitHubEvents()
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

export default GetGitHubEvents
