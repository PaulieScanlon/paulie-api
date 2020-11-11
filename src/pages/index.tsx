import React, { FunctionComponent, useState, useEffect } from 'react'

const IndexPage: FunctionComponent = () => {
  const [res, setRes] = useState({ user: null })

  useEffect(() => {
    console.log('API_URL: ', process.env.API_URL)
    fetch(`${process.env.API_URL}/user`, {
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
