import React, { Fragment } from 'react'
import { Box, Container } from 'theme-ui'

import Seo from './seo'
import Header from './header'

const PageElement = ({ children }) => {
  return (
    <Fragment>
      <Seo />
      <Header />
      <Box as="main" variant="styles.main">
        <Container>{children}</Container>
      </Box>
    </Fragment>
  )
}

export default PageElement
