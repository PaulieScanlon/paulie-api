import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Icon from './icon'

const UsageDetails = ({ to, href }) => {
  return (
    <Fragment>
      {to ? <small>Usage</small> : <Link to="/">Back</Link>}

      {to ? (
        <Link to={to}>
          <Icon path="play" />
          Run in browser
        </Link>
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
    </Fragment>
  )
}

UsageDetails.propTypes = {
  /** The route to link to */
  to: PropTypes.string,
  /** The href to link to */
  href: PropTypes.string,
}

export default UsageDetails
