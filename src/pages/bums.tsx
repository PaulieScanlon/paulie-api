import React, { FunctionComponent, useState, useEffect } from 'react'

const BumsPage: FunctionComponent = () => {
  const [octokitResponse, setOctokitResponse] = useState({ search: null })

  useEffect(() => {
    fetch(`${process.env.GATSBY_API_URL}/github-search`, {
      mode: 'no-cors',
      method: 'GET',
    })
      .then((res) => res.text())
      .then((res) => {
        setOctokitResponse(JSON.parse(res))
      })
      .catch((err) => {
        console.error({ err })
      })
  }, [])

  return (
    <main>
      {octokitResponse.search ? (
        <>
          <h4>Octokit Response</h4>
          <pre>
            <code>{JSON.stringify(`${process.env.GATSBY_API_URL}/github-search`, null, 2)}</code>
          </pre>
          <pre>
            <code>{JSON.stringify(octokitResponse.search, null, 2)}</code>
          </pre>
        </>
      ) : (
        `Loading...`
      )}
    </main>
  )
}

export default BumsPage
