import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Spinner, Flex, Grid, Button } from 'theme-ui'

import InputSearch from './input-search'

const INITIAL_USERNAME = 'PaulieScanlon'
const INITIAL_REPO = 'mdx-embed'

const GetGitHubRepo = () => {
  const [response, setResponse] = useState(null)
  const [owner, setOwner] = useState(INITIAL_USERNAME)
  const [_owner, _setOwner] = useState(INITIAL_USERNAME)
  const [repo, setRepo] = useState(INITIAL_REPO)
  const [_repo, _setRepo] = useState(INITIAL_REPO)
  const [isSubmitting, setIsSubmitting] = useState(true)

  const getGitHubUser = useCallback(async () => {
    setIsSubmitting(true)

    try {
      const response = await axios('/api/get-github-repo', {
        method: 'POST',
        data: {
          owner: _owner,
          repo: _repo,
        },
      })
      setResponse(response.data)
      setIsSubmitting(false)
    } catch (error) {
      setResponse(error.response)
      setIsSubmitting(false)
    }
  }, [_owner, _repo])

  useEffect(() => {
    getGitHubUser()
  }, [getGitHubUser])

  const handleUsernameChange = (event) => {
    setResponse('')
    setOwner(event.target.value)
  }

  const handleUsernameClear = () => {
    setResponse('')
    setOwner('')
  }

  const handleRepoChange = (event) => {
    setResponse('')
    setRepo(event.target.value)
  }

  const handleRepoClear = () => {
    setResponse('')
    setRepo('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    _setOwner(owner)
    _setRepo(repo)
  }
  return (
    <Fragment>
      <Grid
        as="form"
        variant="forms"
        onSubmit={handleSubmit}
        sx={{
          gridTemplateColumns: ['auto', '1fr auto'],
          gap: [3, 2],
        }}
      >
        <Grid
          sx={{
            gridTemplateColumns: ['auto', '1fr 1fr'],
            gap: 2,
          }}
        >
          <InputSearch
            label="Username"
            searchPlaceholder={INITIAL_USERNAME}
            searchValue={owner}
            onChange={handleUsernameChange}
            onClear={handleUsernameClear}
          />
          <InputSearch
            label="Repository"
            searchPlaceholder="mdx-embed"
            searchValue={repo}
            onChange={handleRepoChange}
            onClear={handleRepoClear}
            showSymbol={false}
          />
        </Grid>
        <Button disabled={isSubmitting || !owner} type="submit">
          Submit
        </Button>
      </Grid>
      {response ? (
        <pre className="language-json">{JSON.stringify(response, null, 2)}</pre>
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

export default GetGitHubRepo