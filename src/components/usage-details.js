import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'theme-ui'
import { Link } from 'gatsby'

const UsageDetails = ({ to }) => {
  return (
    <Grid
      sx={{
        alignItems: 'center',
        gridTemplateColumns: '1fr auto',
        p: {
          fontSize: 'smaller',
          m: 0,
        },
        a: {
          fontSize: 'smaller',
        },
      }}
    >
      <small>Usage</small>

      <Link to={to}>Run in browser</Link>
    </Grid>
  )
}

UsageDetails.propTypes = {
  /** The route to link to */
  to: PropTypes.string.isRequired,
}

export default UsageDetails