import React from 'react'
import PropTypes from 'prop-types'

import Icon from './icon'

const EndpointMessage = ({ type, endpoint, icon, isExpanded }) => {
  return (
    <div>
      {type}
      {endpoint}
    </div>
  )
}

EndpointMessage.propTypes = {
  /** The type of endpoint */
  type: PropTypes.string.isRequired,
  /** The name of the endpoint */
  endpoint: PropTypes.string.isRequired,
  /** The name of the icon */
  icon: PropTypes.string.isRequired,
  /** The expanded status */
  isExpanded: PropTypes.bool.isRequired,
}

export default EndpointMessage
