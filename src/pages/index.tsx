import React, { FunctionComponent, useState, useEffect } from 'react'

const IndexPage: FunctionComponent = () => {
  const [res, setRes] = useState({ user: null })

  useEffect(() => {
    console.log('process.env.GATSBY_API_URL: ', process.env.GATSBY_API_URL)
    console.log('process.env.GATSBY_TWITTER_USERNAME: ', process.env.GATSBY_TWITTER_USERNAME)

    fetch(`${process.env.GATSBY_API_URL}/twitter-user`, {
      mode: 'no-cors',
      method: 'GET',
    })
      .then((res) => res.text())
      .then((res) => {
        setRes(JSON.parse(res))
      })
      .catch((err) => {
        console.error({ err })
        // setRes(JSON.parse(err))
      })
  }, [])

  return (
    <main>
      IndexPage
      <pre>
        <code>{JSON.stringify(res.user, null, 2)}</code>
      </pre>
    </main>
  )
}

export default IndexPage
