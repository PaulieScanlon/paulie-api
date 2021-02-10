import React, { FunctionComponent, useState, useEffect } from 'react'

const IndexPage: FunctionComponent = () => {
  const [titterResponse, setTwitterResponse] = useState({ user: null })

  useEffect(() => {
    fetch(`${process.env.GATSBY_API_URL}/twitter-user`, {
      mode: 'no-cors',
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setTwitterResponse({ user: res.user })
      })
      .catch((err) => {
        console.error({ err })
      })
  }, [])

  return (
    <main>
      {titterResponse.user ? (
        <>
          <h4>Twitter Response</h4>
          <pre>
            <code>{JSON.stringify(`${process.env.GATSBY_API_URL}/twitter-user`, null, 2)}</code>
          </pre>
          <pre>
            <code>{JSON.stringify(titterResponse.user, null, 2)}</code>
          </pre>
        </>
      ) : null}
    </main>
  )
}

export default IndexPage
