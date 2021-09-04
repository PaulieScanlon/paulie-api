import React from 'react'

import { Box } from 'theme-ui'

const config = {
  lock: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
}

const Icon = ({ path, ...sx }) => {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="100%"
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

export default Icon
