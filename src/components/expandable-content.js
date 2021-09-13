import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Grid, Box, Button } from 'theme-ui'

import { AppContext } from '../context/app-context'

import EndpointMessage from './endpoint-message'

const ExpandableContent = ({ id, trigger, children }) => {
  const { state, dispatch } = useContext(AppContext)

  const handleClick = () => {
    dispatch({
      type: 'setExpanded',
      id: id,
      isExpanded: !state[id].isExpanded,
    })
  }

  return (
    <Grid
      sx={{
        mb: 2,
      }}
    >
      <Button onClick={handleClick} variant="ghost">
        <EndpointMessage
          type="POST"
          endpoint={`/api/${id}`}
          icon="lock"
          isExpanded={state[id].isExpanded}
        />
      </Button>
      {state[id].isExpanded ? <Box>{children}</Box> : null}
    </Grid>
  )
}

ExpandableContent.propTypes = {
  /** The id used by context API to persist expanded state */
  id: PropTypes.string.isRequired,
}

export default ExpandableContent
