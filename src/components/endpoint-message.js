import React from 'react'
import PropTypes from 'prop-types'
import { Message, Grid, Badge, Text } from 'theme-ui'
import Icon from './icon'

const EndpointMessage = ({ type, endpoint, icon, isExpanded }) => {
  return (
    <Message
      variant="primary"
      sx={{
        cursor: 'pointer',
        mb: 2,
        lineHeight: 'body',
        '.endpoint-text': {
          transition: '.2s linear margin-left, .1s linear color',
        },
        '.expand-icon': {
          height: '20px',
          width: '20px',
          borderRadius: '50%',
          transition: '.2s linear background-color',
        },
        ':hover': {
          '.endpoint-text': {
            color: 'primary',
            ml: '3px',
          },
          '.expand-icon': {
            color: 'primary',
            backgroundColor: 'highlightHover',
          },
        },
      }}
    >
      <Grid
        sx={{
          alignItems: 'center',
          gridTemplateColumns: 'auto 1fr',
        }}
      >
        <Badge>{type}</Badge>
        <Text className="endpoint-text" variant="mono">
          {endpoint}
        </Text>
      </Grid>
      <Grid
        sx={{
          gridTemplateColumns: 'auto auto',
          gap: 1,
        }}
      >
        <Icon path={icon} />
        <Icon
          className="expand-icon"
          path={isExpanded ? 'expandLess' : 'expandMore'}
        />
      </Grid>
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
  /** The expanded status */
  isExpanded: PropTypes.bool.isRequired,
}

export default EndpointMessage
