import React from 'react'
import { Container, Flex } from 'theme-ui'

import Logo from './logo'

const Header = () => {
  return (
    <Container>
      <Flex as="header" variant="styles.header">
        <Logo />
      </Flex>
    </Container>
  )
}

export default Header
