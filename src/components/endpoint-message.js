import React from 'react'
import PropTypes from 'prop-types'
import { Message, Grid, Badge, Text } from 'theme-ui'
import Icon from './icon'

const EndpointMessage = ({ type, endpoint, icon }) => {
  return (
    <Message variant="primary">
      <Grid
        sx={{
          gridTemplateColumns: 'auto 1fr',
        }}
      >
        <Badge>{type}</Badge>
        <Text variant="mono">{endpoint}</Text>
      </Grid>
      <Icon path={icon} />
    </Message>
  )
}

EndpointMessage.propTypes = {
  /** The type of endpoint */
  type: PropTypes.string.isRequired,
  /** The name of the endpoint */
  endpoint: PropTypes.string.isRequired,
  /** The name of the icon */
  icon: PropTypes.string.isRequired,
}

export default EndpointMessage
