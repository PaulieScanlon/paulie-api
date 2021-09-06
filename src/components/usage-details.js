import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Link } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

import Icon from './icon'

const UsageDetails = ({ to, href }) => {
  return (
    <Grid
      sx={{
        mt: to ? 0 : 4,
        alignItems: 'center',
        gridTemplateColumns: '1fr auto',
        p: {
          fontSize: 'smaller',
          m: 0,
        },
        a: {
          fontSize: 'smaller',
          display: 'grid',
          alignItems: 'center',
          gap: 1,
          gridTemplateColumns: 'auto 1fr',
        },
      }}
    >
      {to ? <small>Usage</small> : <GatsbyLink to="/">Back</GatsbyLink>}

      {to ? (
        <GatsbyLink to={to}>
          <Icon path="play" />
          Run in browser
        </GatsbyLink>
      ) : null}
      {href ? (
        <Link
          href={`https://github.com/PaulieScanlon/paulie-api/blob/main/src/api${href}.js`}
          target="_blank"
          rel="noopener"
          sx={{
            color: 'secondary',
          }}
        >
          View src
          <Icon path="code" sx={{ mt: '2px' }} />
        </Link>
      ) : null}
    </Grid>
  )
}

UsageDetails.propTypes = {
  /** The route to link to */
  to: PropTypes.string,
  /** The href to link to */
  href: PropTypes.string,
}

export default UsageDetails
