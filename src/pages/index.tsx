import React, { FunctionComponent, useState, useEffect, Fragment } from 'react'

const IndexPage: FunctionComponent = () => {
  const [twitter, setTwitter] = useState({ user: 'Loading...' })
  const [gitHub, setGitHub] = useState({ user: 'Loading...', repos: 'Loading...' })
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('api/twitter-user')
      .then((response: any) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        } else {
          throw Error(response.message)
        }
      })
      .then((response) => {
        setTwitter(response)
      })
      .catch(() => {
        setError(true)
      })
    fetch('api/github-user')
      .then((response: any) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        } else {
          throw Error(response.message)
        }
      })
      .then((response) => {
        setGitHub(response)
      })
      .catch(() => {
        setError(true)
      })
  }, [])

  return (
    <main>
      <h1>Gatsby Functions</h1>
      {error ? <h1>Error</h1> : null}
      {twitter ? (
        <Fragment>
          <h2>Twitter User</h2>
          <pre>
            <code>{JSON.stringify(twitter.user, null, 2)}</code>
          </pre>
        </Fragment>
      ) : null}
      <br />
      {gitHub ? (
        <Fragment>
          <h2>Github User</h2>
          <pre>
            <code>{JSON.stringify(gitHub.user, null, 2)}</code>
          </pre>
          <br />
          <h2>Github Repos</h2>
          <pre>
            <code>{JSON.stringify(gitHub.repos, null, 2)}</code>
          </pre>
        </Fragment>
      ) : null}
    </main>
  )
}

export default IndexPage
