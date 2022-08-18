import React, { Fragment, useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import InputSearch from './input-search'
import InputNumber from './input-number'

const INITIAL_OWNER = 'PaulieScanlon'
const INITIAL_REPO = 'mdx-embed'
const INITIAL_RESULTS = 5

const GetGitHubRepoEvents = () => {
  const [response, setResponse] = useState(null)
  const [owner, setOwner] = useState(INITIAL_OWNER)
  const [_owner, _setOwner] = useState(INITIAL_OWNER)
  const [repo, setRepo] = useState(INITIAL_REPO)
  const [_repo, _setRepo] = useState(INITIAL_REPO)
  const [results, setResults] = useState(INITIAL_RESULTS)
  const [_results, _setResults] = useState(INITIAL_RESULTS)

  const [isSubmitting, setIsSubmitting] = useState(true)

  const getGitHubEvents = useCallback(async () => {
    setIsSubmitting(true)

    try {
      const response = await axios('/api/get-github-repo-events', {
        method: 'POST',
        data: {
          owner: _owner,
          repo: _repo,
          results: _results,
        },
      })
      setResponse(response.data)
      setIsSubmitting(false)
    } catch (error) {
      setResponse(error.response)
      setIsSubmitting(false)
    }
  }, [_owner, _repo, _results])

  useEffect(() => {
    getGitHubEvents()
  }, [getGitHubEvents])

  const handleOwnerChange = (event) => {
    setResponse('')
    setOwner(event.target.value)
  }

  const handleOwnerClear = () => {
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

  const handleResultsChange = (event) => {
    setResponse('')
    setResults(parseInt(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    _setOwner(owner)
    _setRepo(repo)
    _setResults(results)
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <InputSearch
            label="Owner"
            searchPlaceholder={INITIAL_OWNER}
            searchValue={owner}
            onChange={handleOwnerChange}
            onClear={handleOwnerClear}
          />
          <InputSearch
            label="Repository"
            searchPlaceholder="mdx-embed"
            searchValue={repo}
            onChange={handleRepoChange}
            onClear={handleRepoClear}
            showSymbol={false}
          />
          <InputNumber
            label="Results"
            numberValue={results}
            onChange={handleResultsChange}
          />
        </div>
        <button disabled={isSubmitting || !owner || !repo} type="submit">
          Submit
        </button>
      </form>

      {response ? (
        <pre className="language-json">{JSON.stringify(response, null, 2)}</pre>
      ) : (
        <div>{isSubmitting ? <div>Loading</div> : null}</div>
      )}
    </Fragment>
  )
}

export default GetGitHubRepoEvents
