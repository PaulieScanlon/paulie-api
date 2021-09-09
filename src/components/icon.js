import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const config = {
  lock: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
  github:
    'M12,0.5C5.5,0.5,0.2,5.8,0.2,12.3c0,5.2,3.4,9.6,8.1,11.2c0.6,0.1,0.8-0.3,0.8-0.6c0-0.3,0-1,0-2c-3.3,0.7-4-1.6-4-1.6c-0.5-1.4-1.3-1.7-1.3-1.7c-1.1-0.7,0.1-0.7,0.1-0.7C5,17,5.7,18.1,5.7,18.1c1.1,1.8,2.8,1.3,3.4,1c0.1-0.8,0.4-1.3,0.7-1.6c-2.6-0.3-5.4-1.3-5.4-5.8c0-1.3,0.5-2.3,1.2-3.2C5.6,8.2,5.2,7,5.8,5.4c0,0,1-0.3,3.2,1.2c0.9-0.3,2-0.4,3-0.4c1,0,2,0.1,3,0.4c2.3-1.5,3.2-1.2,3.2-1.2c0.6,1.6,0.2,2.8,0.1,3.1c0.8,0.8,1.2,1.9,1.2,3.2c0,4.5-2.8,5.5-5.4,5.8c0.4,0.4,0.8,1.1,0.8,2.2c0,1.6,0,2.9,0,3.2c0,0.3,0.2,0.7,0.8,0.6c4.7-1.6,8.1-6,8.1-11.2C23.8,5.8,18.5,0.5,12,0.5z',
  play: 'M8 5v14l11-7z',
  code: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
  clear:
    'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  expandMore: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z',
  expandLess: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z',
}

const Icon = ({ path, ...sx }) => {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      width="18px"
      height="18px"
      fill="currentcolor"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
      {...sx}
    >
      <path d={config[path]} fill="currentcolor" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Box>
  )
}

Icon.propTypes = {
  /** The name of the icon path */
  path: PropTypes.string.isRequired,
}

export default Icon
