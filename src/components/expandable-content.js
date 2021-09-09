import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Box, Button } from 'theme-ui'

const ExpandableContent = ({ startExpanded = false, trigger, children }) => {
  const [isExpanded, setIsExpanded] = useState(startExpanded)

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Grid>
      <Button onClick={handleClick} variant="ghost">
        {trigger(isExpanded)}
      </Button>
      {isExpanded ? <Box>{children}</Box> : null}
    </Grid>
  )
}

ExpandableContent.propTypes = {
  /** The trigger component */
  trigger: PropTypes.func.isRequired,
  /** Initial expanded state */
  startExpanded: PropTypes.bool,
}

export default ExpandableContent
